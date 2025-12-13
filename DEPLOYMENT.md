# Deployment Guide

## Quick Deploy to Vercel

This is a static portfolio site with no database dependencies.

### Prerequisites
- Vercel account
- GitHub repository connected to Vercel

### Deployment Steps

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `carleintech/erickharlein-monorepo`

2. **Configure Project**
   - **Framework Preset:** Next.js
   - **Root Directory:** `apps/web`
   - **Build Command:** (use default)
   - **Install Command:** `pnpm install`
   - **Output Directory:** `.next`

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

### Post-Deployment

Your portfolio will be available at: `https://your-project.vercel.app`

Set up a custom domain in Vercel Dashboard → Settings → Domains

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Format code
pnpm format

# Lint code
pnpm lint
```

## Managing Content

### Adding/Editing Projects

Edit `apps/web/data/projects.ts` to add or modify your projects.

### Customizing Components

All components are in `apps/web/components/` and can be edited directly.

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are properly installed
- Verify there are no TypeScript errors

### Monorepo Issues
- Ensure pnpm workspace is configured correctly
- Verify turbo.json has correct build pipeline
