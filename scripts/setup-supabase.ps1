# 🗄️ Supabase Database Setup Script
# Run this script to create all tables, views, and functions

$ErrorActionPreference = "Stop"

Write-Host "`n🗄️  SUPABASE DATABASE SETUP" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Load environment variables
$envFile = Join-Path $PSScriptRoot "apps\web\.env.local"

if (-not (Test-Path $envFile)) {
    Write-Host "❌ .env.local file not found at: $envFile" -ForegroundColor Red
    exit 1
}

Write-Host "📖 Loading environment variables..." -ForegroundColor Yellow

$envContent = Get-Content $envFile
$supabaseUrl = ($envContent | Select-String "NEXT_PUBLIC_SUPABASE_URL=(.+)" | ForEach-Object { $_.Matches.Groups[1].Value })
$serviceKey = ($envContent | Select-String "SUPABASE_SERVICE_ROLE_KEY=(.+)" | ForEach-Object { $_.Matches.Groups[1].Value })

if (-not $supabaseUrl -or -not $serviceKey) {
    Write-Host "❌ Missing Supabase credentials in .env.local" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Credentials loaded" -ForegroundColor Green
Write-Host "   URL: $supabaseUrl`n" -ForegroundColor Gray

# Read SQL schema
$schemaFile = Join-Path $PSScriptRoot "infra\supabase-schema.sql"

if (-not (Test-Path $schemaFile)) {
    Write-Host "❌ Schema file not found at: $schemaFile" -ForegroundColor Red
    exit 1
}

Write-Host "📝 Reading schema file..." -ForegroundColor Yellow
$schema = Get-Content $schemaFile -Raw

# Split into statements
$statements = $schema -split ';' | Where-Object { 
    $_.Trim() -and 
    -not $_.Trim().StartsWith('--') -and 
    $_.Trim() -ne '' 
}

Write-Host "✅ Found $($statements.Count) SQL statements to execute`n" -ForegroundColor Green

Write-Host "🚀 Executing SQL statements..." -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

$successCount = 0
$errorCount = 0
$skipCount = 0

foreach ($i in 0..($statements.Count - 1)) {
    $statement = $statements[$i].Trim() + ';'
    
    # Extract statement type
    $statementType = ($statement -split '\s+')[0].ToUpper()
    $statementNum = $i + 1
    
    try {
        # Execute via Supabase PostgREST API using custom SQL endpoint
        $headers = @{
            'apikey' = $serviceKey
            'Authorization' = "Bearer $serviceKey"
            'Content-Type' = 'text/plain'
            'Prefer' = 'return=minimal'
        }

        # Use the database connection directly
        $projectRef = ($supabaseUrl -split '//')[1] -split '.supabase.co' | Select-Object -First 1
        
        $response = Invoke-RestMethod `
            -Uri "https://$projectRef.supabase.co/rest/v1/" `
            -Method POST `
            -Headers $headers `
            -Body $statement `
            -ErrorAction SilentlyContinue

        Write-Host "✅ [$statementNum/$($statements.Count)] $statementType - Success" -ForegroundColor Green
        $successCount++
    }
    catch {
        $errorMessage = $_.Exception.Message
        
        # Check if it's an "already exists" error (which is OK)
        if ($errorMessage -match "already exists|duplicate") {
            Write-Host "⚠️  [$statementNum/$($statements.Count)] $statementType - Already exists (skipping)" -ForegroundColor Yellow
            $skipCount++
        }
        else {
            Write-Host "❌ [$statementNum/$($statements.Count)] $statementType - Error: $errorMessage" -ForegroundColor Red
            $errorCount++
        }
    }
}

Write-Host "`n📊 SETUP SUMMARY" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host "   ✅ Successful: $successCount" -ForegroundColor Green
Write-Host "   ⚠️  Already exists: $skipCount" -ForegroundColor Yellow
Write-Host "   ❌ Errors: $errorCount" -ForegroundColor Red

if ($errorCount -eq 0) {
    Write-Host "`n🎉 Database schema setup complete!`n" -ForegroundColor Green
    Write-Host "📍 View your tables at:" -ForegroundColor Cyan
    Write-Host "   https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/editor`n" -ForegroundColor Gray
    
    Write-Host "✅ Tables created:" -ForegroundColor Green
    Write-Host "   • contact_submissions" -ForegroundColor Gray
    Write-Host "   • booking_submissions" -ForegroundColor Gray
    Write-Host "   • analytics_events`n" -ForegroundColor Gray
}
else {
    Write-Host "`n⚠️  Setup completed with some errors." -ForegroundColor Yellow
    Write-Host "   You may need to run the SQL manually in Supabase dashboard.`n" -ForegroundColor Gray
}

Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
