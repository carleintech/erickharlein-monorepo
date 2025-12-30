# 🚀 TechKlein Portfolio - Erickharlein.com

> A production-grade full-stack portfolio and booking platform powered by Next.js 15, React 19, TypeScript, and modern web technologies.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black)](https://erickharlein.com)

## ✨ Features

### 🎨 Frontend Excellence
- **Interactive UI** - Smooth animations with Framer Motion 11
- **Custom 404 Page** - Ghost-catching game with parallax effects & glitch animations
- **Professional Dark Theme** - Signal mint color (#00f5d4) brand identity
- **Fully Responsive** - Mobile-first design, perfect on all devices
- **Type-Safe** - 100% TypeScript with strict mode
- **Performance Optimized** - Turbopack, tree-shaking, code splitting, image optimization

### 💼 Business Features
- **Contact System** - Lead capture with instant dual email notifications
- **Booking Platform** - 9-step wizard with real-time pricing calculation
- **Payment Processing** - Stripe integration with secure webhooks
- **Email Automation** - Professional branded templates via Resend
- **Database Persistence** - Supabase PostgreSQL with RLS policies
- **Analytics Infrastructure** - Event tracking for user behavior insights

### 🛡️ Security & Architecture
- **Route Protection** - Middleware-based validation & catch-all routes
- **RLS Policies** - Row-level security on all database tables
- **Error Handling** - Graceful degradation throughout the application
- **Input Validation** - Zod schemas for type-safe API requests
- **HTTPS Only** - Secure by default on Vercel
- **Environment Isolation** - Separate dev/prod configurations

## 🏗️ Project Structure

```
erickharlein-monorepo/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── app/               # App router (pages & API routes)
│       │   ├── api/          # Backend API endpoints
│       │   │   ├── contact/  # Contact form submission
│       │   │   ├── bookings/ # Booking requests
│       │   │   └── stripe/   # Payment webhooks
│       │   ├── about/        # About page
│       │   ├── booking/      # Booking wizard
│       │   ├── contact/      # Contact page
│       │   ├── projects/     # Projects showcase
│       │   └── [...notFound]/# Catch-all 404 route
│       ├── components/        # React components
│       ├── emails/           # Email templates (React Email)
│       ├── lib/              # Utilities & helpers
│       └── public/           # Static assets
├── packages/
│   ├── ui/                    # Shared UI component library
│   ├── utils/                 # Shared utilities & Zod schemas
│   └── typescript-config/     # TypeScript configurations
├── docs/                      # Comprehensive documentation
│   ├── setup/                # Setup guides (Database, Stripe, Email)
│   └── guides/               # Implementation guides
├── infra/                     # Infrastructure as code
│   └── supabase-schema.sql   # Complete database schema
└── scripts/                   # Automation scripts (PowerShell)
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **pnpm** 8+ (`npm install -g pnpm`)
- **PostgreSQL** (or Supabase account)
- **Stripe Account** (for payments)
- **Resend Account** (for emails)

### Installation

```bash
# Clone the repository
git clone https://github.com/carleintech/erickharlein-monorepo.git
cd erickharlein-monorepo

# Install all dependencies
pnpm install

# Copy environment template
cp apps/web/.env.example apps/web/.env.local

# Configure your credentials in .env.local
# See Environment Setup section below

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## ⚙️ Environment Setup

Create `apps/web/.env.local` with your credentials:

```bash
# ============================================
# 💳 STRIPE (Payment Processing)
# ============================================
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# ============================================
# 📧 RESEND (Email Service)
# ============================================
RESEND_API_KEY=re_...
FROM_EMAIL="TechKlein <hello@erickharlein.com>"

# ============================================
# 🗄️ SUPABASE (Database)
# ============================================
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
DATABASE_URL=postgresql://...@db.xxx.supabase.co:5432/postgres
DATABASE_POOLER_URL=postgresql://...pooler.supabase.com:6543/postgres

# ============================================
# 🌐 SITE CONFIGURATION
# ============================================
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # Change in production
```

### Database Setup (5 minutes)

1. Open Supabase SQL Editor:
   ```
   https://supabase.com/dashboard/project/YOUR_PROJECT/sql/new
   ```

2. Copy contents from `infra/supabase-schema.sql`

3. Paste and execute in SQL Editor

4. Verify tables created in Table Editor

📖 **Detailed guide:** [docs/setup/DATABASE-SETUP.md](docs/setup/DATABASE-SETUP.md)

## 📦 Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.0 | React framework with App Router |
| **React** | 19.0 | UI library |
| **TypeScript** | 5.0 | Type safety |
| **Tailwind CSS** | 3.4 | Styling & design system |
| **Framer Motion** | 11.0 | Animations |
| **Turborepo** | Latest | Monorepo management |
| **pnpm** | 8+ | Fast package manager |

### Backend & Infrastructure
- **Database:** Supabase (PostgreSQL 15)
- **Payments:** Stripe (with webhooks)
- **Email:** Resend + React Email
- **Validation:** Zod
- **Hosting:** Vercel (Edge Functions)
- **Linting:** Biome (ESLint alternative)

## 📚 Documentation

### Quick Reference
- 🚀 **[Quick Start Guide](docs/guides/LAUNCH-READY.md)** - Get running in 5 minutes
- 📊 **[System Status](docs/guides/SYSTEM-STATUS.md)** - Complete system overview
- ✅ **[Launch Checklist](docs/guides/FINALIZATION-CHECKLIST.md)** - Pre-deployment guide

### Setup Guides
- 🗄️ **[Database Setup](docs/setup/DATABASE-SETUP.md)** - Supabase configuration
- 💳 **[Stripe Setup](docs/setup/STRIPE-SETUP.md)** - Payment integration
- 📧 **[Email Setup](docs/setup/EMAIL_SYSTEM_COMPLETE.md)** - Resend configuration
- 🧪 **[Local Testing](docs/setup/STRIPE-LOCAL-TESTING.md)** - Stripe CLI testing

### Implementation Guides
- 📋 **[Booking Wizard](docs/BOOKING_WIZARD_IMPLEMENTATION.md)** - Multi-step form
- 📬 **[Contact Form](docs/CONTACT_FORM_SETUP.md)** - Lead capture system
- 🚢 **[Deployment](docs/DEPLOYMENT.md)** - Production deployment

## 🧪 Testing

### Local Development

```bash
# Start development server
pnpm dev
```

### Test Contact Form

```bash
# Visit: http://localhost:3000/contact
# Submit form and verify:
#  ✅ Admin email received
#  ✅ Auto-reply sent to visitor
#  ✅ Record saved in Supabase
```

### Test Stripe Payments

```bash
# Terminal 1: Start dev server
pnpm dev

# Terminal 2: Start Stripe webhook listener
stripe listen --forward-to http://localhost:3000/api/stripe/webhook

# Visit: http://localhost:3000/booking
# Use test card: 4242 4242 4242 4242
# Verify booking confirmation email
```

### Type Checking & Linting

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Fix linting issues
pnpm lint:fix
```

## 🚢 Deployment

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

### Add Environment Variables

In Vercel Dashboard, add all variables from `.env.local`:

```bash
# Or use CLI
vercel env add STRIPE_SECRET_KEY
vercel env add RESEND_API_KEY
# ... add all variables
```

### Production Deployment

```bash
# Deploy to production
vercel --prod

# Or push to main branch (auto-deploys)
git push origin main
```

## 🎨 Enhanced Design System

### Color Palette

```typescript
// TechKlein Signal Colors (Primary Brand)
signal: {
  DEFAULT: '#00f5d4',  // Neon mint
  soft: '#00c2a8',     // Softer mint
  bright: '#00ffea',   // Brighter cyan
  glow: 'rgba(0, 245, 212, 0.4)',
  dim: 'rgba(0, 245, 212, 0.15)',
}

// Tech Accent Colors
tech: {
  purple: '#7c3aed',   // Primary tech purple
  indigo: '#6366f1',   // Deep blue
  cyan: '#06b6d4',     // Tech cyan
  pink: '#ec4899',     // Accent pink
  blue: '#3b82f6',     // Bright blue
  violet: '#8b5cf6',   // Soft violet
}
```

### Typography
- **Font Family:** Inter (system fallback)
- **Headings:** Bold, tight letter-spacing
- **Body:** Regular, comfortable line-height (1.6)
- **Code:** Fira Code, monospace

### Visual Elements
- **Glass Morphism** - Frosted glass effects with backdrop blur
- **Gradient Backgrounds** - Animated 50s loops
- **Shadow Layers** - Multi-layer shadows for depth
- **Rounded Corners** - 0.5rem (8px) standard radius
- **Glow Effects** - Soft neon glows on interactive elements

## 🛠️ Available Scripts

```bash
# Development
pnpm dev          # Start dev server (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run Biome linter
pnpm lint:fix     # Auto-fix linting issues
pnpm typecheck    # TypeScript type checking

# Database (if using local Prisma)
pnpm db:push      # Push schema changes
pnpm db:studio    # Open database studio

# Workspace
pnpm clean        # Clean all node_modules
pnpm install      # Install all dependencies
```

## 📁 Key Files

### Configuration
- `turbo.json` - Turborepo pipeline configuration
- `pnpm-workspace.yaml` - Workspace package definitions
- `biome.json` - Linting and formatting rules
- `vercel.json` - Vercel deployment config

### Application
- `apps/web/app/layout.tsx` - Root layout with providers
- `apps/web/app/globals.css` - Global styles & design tokens
- `apps/web/tailwind.config.ts` - Tailwind configuration
- `apps/web/middleware.ts` - Route protection logic

### Infrastructure
- `infra/supabase-schema.sql` - Complete database schema (284 lines)
- `scripts/*.ps1` - Setup automation scripts

## 🎯 Features Breakdown

### Contact System Flow
```
User fills form → Validation (Zod) → Parallel processing:
  ├── Admin email (professional template)
  ├── Visitor auto-reply (instant trust)
  └── Database record (Supabase)
→ Success response with email status
```

### Booking System Flow
```
User selects service → 9-step wizard → Real-time pricing
→ Stripe checkout session → Payment processing
→ Webhook handler → Parallel actions:
  ├── Confirmation email (branded template)
  ├── Database record (payment + booking details)
  └── Admin notification
→ Success page with booking reference
```

### Error Handling Strategy
- **Graceful Degradation** - System continues even if email fails
- **Detailed Logging** - Console logs for debugging
- **User-Friendly Messages** - Clear error messages for users
- **Fallback Options** - Alternative contact methods displayed

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.

## 👤 Author

**Erickharlein Pierre**  
Founder & CEO, TechKlein

- 🌐 Website: [erickharlein.com](https://erickharlein.com)
- 💼 LinkedIn: [@erickharlein](https://linkedin.com/in/erickharlein)
- 🐙 GitHub: [@carleintech](https://github.com/carleintech)
- 📧 Email: hello@erickharlein.com
- 📱 WhatsApp: +509 4688-2023

## 🙏 Acknowledgments

Built with amazing open-source technologies:

- [Next.js](https://nextjs.org/) - The React framework for production
- [Vercel](https://vercel.com/) - Cloud hosting platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Supabase](https://supabase.com/) - Open source Firebase alternative
- [Stripe](https://stripe.com/) - Payment infrastructure
- [Resend](https://resend.com/) - Email API for developers
- [React Email](https://react.email/) - Email templates with React
- [Zod](https://zod.dev/) - TypeScript-first validation
- [Lucide Icons](https://lucide.dev/) - Beautiful icon library

## 📈 Project Status

| Metric | Status |
|--------|--------|
| **Version** | 1.0.0 |
| **Status** | ✅ Production Ready |
| **Last Updated** | December 29, 2025 |
| **Live Site** | [erickharlein.com](https://erickharlein.com) |
| **Test Coverage** | Manual E2E |
| **Performance** | Lighthouse 95+ |
| **Accessibility** | WCAG 2.1 AA |

---

<p align="center">
  <strong>Made with ❤️, ☕, and countless hours of coding</strong>
  <br>
  <em>by <a href="https://erickharlein.com">Erickharlein Pierre</a></em>
</p>

<p align="center">
  <a href="https://erickharlein.com">🌐 Visit Site</a> •
  <a href="docs/guides/LAUNCH-READY.md">📖 Quick Start</a> •
  <a href="docs/guides/SYSTEM-STATUS.md">📊 Documentation</a> •
  <a href="https://github.com/carleintech/erickharlein-monorepo/issues">🐛 Report Bug</a>
</p>

---

<p align="center">
  <sub>Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and modern web technologies</sub>
</p>