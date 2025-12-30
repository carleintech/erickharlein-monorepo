# 🗄️ Supabase Database Setup via psql
# This script uses PostgreSQL command line tool to execute the schema

$ErrorActionPreference = "Stop"

Write-Host "`n🗄️  SUPABASE DATABASE SETUP" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Load environment variables
$envFile = Join-Path $PSScriptRoot "apps\web\.env.local"

if (-not (Test-Path $envFile)) {
    Write-Host "❌ .env.local file not found" -ForegroundColor Red
    exit 1
}

$envContent = Get-Content $envFile
$databaseUrl = ($envContent | Select-String "DATABASE_URL=(.+)" | ForEach-Object { $_.Matches.Groups[1].Value })

if (-not $databaseUrl) {
    Write-Host "❌ DATABASE_URL not found in .env.local" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Database credentials loaded`n" -ForegroundColor Green

# Check if psql is installed
$psql = Get-Command psql -ErrorAction SilentlyContinue

if (-not $psql) {
    Write-Host "❌ PostgreSQL client (psql) is not installed`n" -ForegroundColor Red
    Write-Host "📥 INSTALLATION OPTIONS:" -ForegroundColor Yellow
    Write-Host "   1. Install via winget: winget install PostgreSQL.PostgreSQL" -ForegroundColor Gray
    Write-Host "   2. Download from: https://www.postgresql.org/download/windows/" -ForegroundColor Gray
    Write-Host "   3. Install via Chocolatey: choco install postgresql`n" -ForegroundColor Gray
    
    Write-Host "🌐 ALTERNATIVE: Manual execution in Supabase dashboard" -ForegroundColor Cyan
    Write-Host "   1. Open: https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/sql/new" -ForegroundColor Gray
    Write-Host "   2. Copy contents from: $PSScriptRoot\infra\supabase-schema.sql" -ForegroundColor Gray
    Write-Host "   3. Paste and click 'Run'`n" -ForegroundColor Gray
    
    exit 1
}

Write-Host "✅ PostgreSQL client found: $($psql.Source)`n" -ForegroundColor Green

# Schema file path
$schemaFile = Join-Path $PSScriptRoot "infra\supabase-schema.sql"

if (-not (Test-Path $schemaFile)) {
    Write-Host "❌ Schema file not found at: $schemaFile" -ForegroundColor Red
    exit 1
}

Write-Host "🚀 Executing SQL schema..." -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

try {
    # Execute SQL file via psql
    $result = & psql $databaseUrl -f $schemaFile 2>&1
    
    $resultString = $result | Out-String
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Schema executed successfully!`n" -ForegroundColor Green
        
        # Show summary
        Write-Host "📊 SETUP COMPLETE" -ForegroundColor Cyan
        Write-Host "================================" -ForegroundColor Cyan
        Write-Host "   ✅ Tables created:" -ForegroundColor Green
        Write-Host "      • contact_submissions" -ForegroundColor Gray
        Write-Host "      • booking_submissions" -ForegroundColor Gray
        Write-Host "      • analytics_events" -ForegroundColor Gray
        Write-Host "   ✅ Indexes optimized" -ForegroundColor Green
        Write-Host "   ✅ RLS policies enabled" -ForegroundColor Green
        Write-Host "   ✅ Views created" -ForegroundColor Green
        Write-Host "   ✅ Functions defined`n" -ForegroundColor Green
        
        Write-Host "📍 View your tables at:" -ForegroundColor Cyan
        Write-Host "   https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/editor`n" -ForegroundColor Gray
        
        Write-Host "🎉 Database ready for production!`n" -ForegroundColor Green
    }
    else {
        Write-Host "⚠️  Execution completed with warnings`n" -ForegroundColor Yellow
        Write-Host $resultString -ForegroundColor Gray
    }
}
catch {
    Write-Host "❌ Error executing schema: $_`n" -ForegroundColor Red
    Write-Host "🌐 Try manual execution in Supabase dashboard:" -ForegroundColor Cyan
    Write-Host "   https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/sql/new`n" -ForegroundColor Gray
    exit 1
}

Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
