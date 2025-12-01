# Deployment Guide for Vercel

## Prerequisites
1. Supabase account with PostgreSQL database
2. Vercel account
3. GitHub repository connected to Vercel

## Environment Variables

Set these in your Vercel project settings:

### Database
```
DATABASE_URL=your_supabase_postgresql_connection_string
```

### Supabase (if using auth)
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Deployment Steps

### 1. Connect Repository to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository: `carleintech/erickharlein-monorepo`

### 2. Configure Project Settings
- **Framework Preset:** Next.js
- **Root Directory:** `apps/web`
- **Build Command:** `cd ../.. && pnpm install && pnpm turbo run build --filter=@erickharlein/web`
- **Install Command:** `pnpm install`
- **Output Directory:** `.next`

### 3. Add Environment Variables
Add all the environment variables listed above in Vercel Dashboard → Settings → Environment Variables

### 4. Deploy Database Schema
Before first deployment, run migrations:
```bash
cd packages/database
pnpm prisma migrate deploy
pnpm prisma db seed
```

### 5. Deploy
- Click "Deploy"
- Vercel will automatically build and deploy your app

## Database Setup (Supabase)

1. Create a new Supabase project
2. Get your PostgreSQL connection string from Supabase Dashboard → Settings → Database
3. Update your environment variables in Vercel
4. Run migrations from your local machine pointing to Supabase

## Post-Deployment

After successful deployment:
- Your app will be available at: `https://your-project.vercel.app`
- Set up custom domain in Vercel Dashboard → Settings → Domains
- Monitor deployment logs in Vercel Dashboard

## Troubleshooting

### Build Fails
- Check that all environment variables are set correctly
- Verify DATABASE_URL is accessible from Vercel
- Check build logs for specific errors

### Database Connection Issues
- Ensure Supabase allows connections from Vercel
- Verify DATABASE_URL format is correct
- Check that migrations have been run

### Monorepo Issues
- Ensure pnpm workspace is configured correctly
- Verify turbo.json has correct build pipeline
- Check that all workspace dependencies resolve correctly
