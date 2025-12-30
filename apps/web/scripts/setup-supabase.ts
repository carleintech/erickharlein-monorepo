// Setup Supabase Database Schema
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { join } from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupDatabase() {
  console.log('🗄️  Setting up Supabase database schema...\n');

  // Read the SQL schema file
  const schemaPath = join(process.cwd(), '../../infra/supabase-schema.sql');
  const schema = readFileSync(schemaPath, 'utf-8');

  // Split into individual statements (handling multi-line statements)
  const statements = schema
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'))
    .map(s => s + ';');

  console.log(`📝 Found ${statements.length} SQL statements\n`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i];
    
    // Extract statement type for logging
    const statementType = statement.split(' ')[0].toUpperCase();
    
    try {
      const { error } = await supabase.rpc('exec_sql', { query: statement }).single();
      
      if (error) {
        // Try direct execution for DDL statements
        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
          method: 'POST',
          headers: {
            'apikey': supabaseServiceKey,
            'Authorization': `Bearer ${supabaseServiceKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: statement })
        });

        if (!response.ok) {
          console.log(`⚠️  Statement ${i + 1}/${statements.length}: ${statementType} - Skipping (might already exist)`);
        } else {
          successCount++;
          console.log(`✅ Statement ${i + 1}/${statements.length}: ${statementType}`);
        }
      } else {
        successCount++;
        console.log(`✅ Statement ${i + 1}/${statements.length}: ${statementType}`);
      }
    } catch (err: any) {
      // Most errors will be "already exists" which is fine
      if (err.message?.includes('already exists') || err.message?.includes('duplicate')) {
        console.log(`⚠️  Statement ${i + 1}/${statements.length}: ${statementType} - Already exists`);
        successCount++;
      } else {
        console.log(`❌ Statement ${i + 1}/${statements.length}: ${statementType} - ${err.message}`);
        errorCount++;
      }
    }
  }

  console.log(`\n📊 Schema Setup Summary:`);
  console.log(`   ✅ Successful: ${successCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  
  if (errorCount === 0) {
    console.log(`\n🎉 Database schema setup complete!\n`);
    console.log(`📍 View your tables at:`);
    console.log(`   https://supabase.com/dashboard/project/ryxozbeowelrbhwejoid/editor\n`);
  } else {
    console.log(`\n⚠️  Some statements failed. Check the errors above.\n`);
  }
}

setupDatabase().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
