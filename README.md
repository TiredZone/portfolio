# Bechara El Maalouf - Portfolio

A modern, high-performance portfolio website built with Next.js 15, showcasing professional experience, case studies, and technical expertise. Features a royal blue & gold design aesthetic with dark mode support.

## 🚀 Live Demo

[becharaelmaalouf.dev](https://becharaelmaalouf.dev)

## ✨ Features

- **Modern Stack**: Next.js 15, React 19, TypeScript
- **Content Management**: Contentlayer for type-safe MDX content
- **Design System**: Tailwind CSS with royal blue/gold theme
- **Animations**: Framer Motion for smooth interactions
- **Contact Form**: Server actions with Resend email integration
- **Booking System**: Cal.com embed for easy scheduling
- **SEO Optimized**: Dynamic metadata, JSON-LD schema, sitemap
- **Analytics**: GA4 and Cloudflare Web Analytics ready
- **Performance**: Optimized for Core Web Vitals
- **Dark Mode**: System-aware theme switching

## 📦 Tech Stack

### Core
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI (via shadcn/ui)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation

### Content & Data
- **Content Layer**: Contentlayer for MDX processing
- **Validation**: Zod schemas
- **Type Safety**: Full TypeScript coverage

### Integrations
- **Email**: Resend API
- **Booking**: Cal.com
- **Analytics**: Google Analytics 4, Cloudflare Web Analytics

### DevOps
- **Deployment**: Vercel
- **Version Control**: Git + GitHub
- **CI/CD**: GitHub Actions (optional)

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bechara-portfolio.git
   cd bechara-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   ```env
   # Email (Resend)
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=contact@becharaelmaalouf.dev
   
   # Analytics
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_CF_ANALYTICS=xxxxxxxxxxxxxxxxx
   
   # Site Config
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_CAL_USERNAME=becharaelmaalouf
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
bechara-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── actions/           # Server actions
│   │   ├── (routes)/          # Route groups
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── features/          # Feature components
│   │   │   ├── hero.tsx
│   │   │   ├── timeline.tsx
│   │   │   ├── skills-grid.tsx
│   │   │   └── cal-embed.tsx
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       ├── config.ts          # Site configuration
│       ├── seo.ts             # SEO utilities
│       └── utils.ts           # Utility functions
├── content/
│   ├── case-studies/          # MDX case studies
│   └── blog/                  # MDX blog posts
├── public/                    # Static assets
├── contentlayer.config.ts     # Contentlayer configuration
├── tailwind.config.ts         # Tailwind configuration
└── package.json
```

## 📝 Content Management

### Adding a Case Study

Create a new `.mdx` file in `content/case-studies/`:

```mdx
---
title: "Your Project Title"
description: "Brief description"
client: "Client Name"
duration: "Month YYYY - Month YYYY"
role: "Your Role"
tech: ["React", "Node.js", "TypeScript"]
image: "/images/projects/your-project.jpg"
featured: true
metrics:
  - label: "Metric Name"
    value: "32%"
publishedAt: 2024-01-15
---

## Your content here...
```

### Adding a Blog Post

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Blog Post Title"
description: "Brief description"
tags: ["react", "typescript", "web-dev"]
publishedAt: 2024-01-15
author: "Bechara El Maalouf"
---

## Your content here...
```

## 🎨 Customization

### Colors

The theme uses a royal blue and gold color palette. Customize in `tailwind.config.ts`:

```typescript
colors: {
  royal: {
    700: '#4338ca',  // Primary royal blue
    // ...other shades
  },
  gold: {
    400: '#ffc23d',  // Primary gold
    // ...other shades
  },
}
```

### Fonts

Using Playfair Display (serif) and Inter (sans-serif). Configure in `src/app/layout.tsx`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy!

Vercel will automatically:
- Install dependencies
- Build the project
- Deploy to production
- Set up preview deployments for PRs

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📊 Analytics Setup

### Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   ```

### Cloudflare Web Analytics

1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com)
2. Add your site
3. Get your analytics token
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_CF_ANALYTICS=xxxxxxxxxxxxxxxxx
   ```

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Verify your sending domain
3. Generate an API key
4. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=contact@becharaelmaalouf.dev
   ```

## 📅 Cal.com Setup

1. Sign up at [cal.com](https://cal.com)
2. Create your booking page
3. Note your username
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_CAL_USERNAME=yourusername
   ```

## 🧪 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run type-check   # Check TypeScript errors
npm run lint         # Lint code

# Production
npm run build        # Build for production
npm run start        # Start production server

# Formatting
npm run format       # Format code with Prettier
```

### Code Quality

- **TypeScript**: Full type coverage
- **ESLint**: Enforces code standards
- **Prettier**: Auto-formatting

## 🎯 Performance

Target metrics:
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.8s

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! This is primarily a personal portfolio but feel free to fork and adapt for your own use.

## 👤 Author

**Bechara El Maalouf**
- Website: [becharaelmaalouf.dev](https://becharaelmaalouf.dev)
- LinkedIn: [bechara-el-maalouf-920645200](https://www.linkedin.com/in/bechara-el-maalouf-920645200/)
- GitHub: [@TiredZone](https://github.com/TiredZone)
- Email: contact@becharaelmaalouf.dev

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
