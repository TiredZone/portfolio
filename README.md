# 🎯 Bechara El Maalouf - Professional Portfolio

A modern, high-performance portfolio website built with Next.js 15, showcasing professional experience, case studies, and technical expertise as a Full-Stack Developer specializing in React, Node.js, and Shopify Plus development.

## 🚀 Live Demo

**🌐 [becharaelmaalouf.dev](https://becharaelmaalouf.dev)**

## ⭐ About

This portfolio showcases my work as a Senior Web Architect with expertise in:
- **E-commerce Optimization**: Delivered 32% revenue increase for $2M/mo brands
- **Lead Automation**: Built systems processing 50K+ monthly leads
- **Full-Stack Development**: React, Node.js, TypeScript, Shopify Plus
- **Performance Engineering**: Core Web Vitals optimization and scalable architectures

## ✨ Key Features

### 🎨 Design & UX
- **Premium Design**: Royal blue & gold aesthetic with sophisticated typography
- **Responsive**: Mobile-first design optimized for all devices
- **Dark Mode**: System-aware theme switching with smooth transitions
- **Animations**: Framer Motion for engaging user interactions
- **Accessibility**: WCAG 2.1 compliant with semantic HTML

### 🚀 Performance & SEO
- **Core Web Vitals**: Optimized for 95+ Lighthouse scores
- **SEO Ready**: Dynamic metadata, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schema for rich snippets
- **Sitemap & RSS**: Auto-generated for search engines
- **Analytics**: GA4 and Cloudflare Web Analytics integration

### 📝 Content Management
- **MDX Support**: Type-safe content with frontmatter validation
- **Case Studies**: Detailed project showcases with metrics
- **Blog System**: Technical articles and insights
- **Dynamic Routes**: Auto-generated pages from content
- **Image Optimization**: Next.js Image component with lazy loading

### 💼 Business Features
- **Contact Forms**: Server actions with email notifications
- **Cal.com Integration**: Embedded booking system
- **Newsletter**: Resend-powered email subscriptions
- **Lead Generation**: Optimized conversion funnels
- **Social Proof**: Client testimonials and metrics

## 📦 Tech Stack

### Frontend
- **Framework**: Next.js 15.5.4 (App Router)
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: Radix UI primitives via shadcn/ui
- **Animations**: Framer Motion 12.23
- **Forms**: React Hook Form 7.64 + Hookform Resolvers
- **Icons**: Lucide React

### Content & Validation
- **Content Processing**: Next MDX Remote + @next/mdx
- **Frontmatter**: Gray Matter for metadata parsing
- **Validation**: Zod 4.1 schemas for type safety
- **Typography**: @tailwindcss/typography for rich text

### Integrations & APIs
- **Email Service**: Resend 6.1 for transactional emails
- **Booking System**: Cal.com Embed React 1.5
- **Analytics**: Google Analytics 4 + Cloudflare Web Analytics
- **Notifications**: Sonner 2.0 for toast messages

### Developer Experience
- **Code Quality**: ESLint 9 + Next.js config
- **Type Safety**: Full TypeScript coverage
- **Styling**: PostCSS + Tailwind CSS utilities
- **Performance**: Bundle analyzer and optimization tools

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: Version 20.0 or higher
- **npm/yarn/pnpm**: Latest stable version
- **Git**: For version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/TiredZone/portfolio.git
   cd portfolio
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
   
   Configure your `.env.local` file:
   ```env
   # Required - Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Required - Email Service (Resend)
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=contact@becharaelmaalouf.dev
   
   # Optional - Analytics
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_CF_ANALYTICS=xxxxxxxxxxxxxxxxx
   
   # Optional - Booking System
   NEXT_PUBLIC_CAL_USERNAME=becharaelmaalouf
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view the site.

### Development Commands

```bash
# Development
npm run dev          # Start development server
npm run type-check   # TypeScript type checking
npm run lint         # ESLint code linting
npm run format       # Prettier code formatting

# Production
npm run build        # Build for production
npm run start        # Start production server
npm run analyze      # Bundle size analysis
```

## 📁 Project Architecture

```
bechara-portfolio/
├── 📁 src/                     # Source code
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📁 (marketing)/     # Marketing pages group
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── about/          # About page
│   │   │   ├── blog/           # Blog listing & posts
│   │   │   ├── contact/        # Contact page
│   │   │   ├── services/       # Services page
│   │   │   └── work/           # Portfolio & case studies
│   │   ├── 📁 actions/         # Server actions
│   │   │   ├── contact.ts      # Contact form handler
│   │   │   └── newsletter.ts   # Newsletter subscription
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   ├── robots.txt/         # SEO robots
│   │   ├── sitemap.xml/        # Dynamic sitemap
│   │   └── rss.xml/           # RSS feed
│   ├── 📁 components/          # React components
│   │   ├── 📁 common/          # Shared components
│   │   │   ├── badge.tsx
│   │   │   ├── floating-elements.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── 📁 features/        # Feature components
│   │   │   ├── hero.tsx        # Homepage hero
│   │   │   ├── skills-grid.tsx # Skills showcase
│   │   │   ├── testimonials.tsx
│   │   │   ├── contact-form.tsx
│   │   │   └── cal-embed.tsx   # Calendar booking
│   │   ├── 📁 layout/          # Layout components
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── container.tsx
│   │   ├── 📁 mdx/             # MDX components
│   │   └── 📁 ui/              # shadcn/ui components
│   ├── 📁 lib/                 # Utilities & config
│   │   ├── config.ts           # Site configuration
│   │   ├── mdx.ts              # MDX processing
│   │   ├── seo.ts              # SEO utilities
│   │   ├── email.ts            # Email service
│   │   └── utils.ts            # Helper functions
│   └── 📁 styles/              # Styling
│       └── fonts.ts            # Font configurations
├── 📁 content/                 # Content files
│   ├── 📁 blog/                # Blog posts (MDX)
│   └── 📁 case-studies/        # Portfolio case studies (MDX)
│       ├── kalyxl-lead-automation.mdx
│       ├── sunday-golf-theme-migration.mdx
│       └── bad-marketing-shopify-optimization.mdx
├── 📁 public/                  # Static assets
│   ├── 📁 images/              # Image assets
│   │   ├── 📁 clients/         # Client logos
│   │   ├── 📁 projects/        # Project screenshots
│   │   └── 📁 og/              # Open Graph images
│   └── 📁 favicon/             # Favicon variants
├── 📄 components.json          # shadcn/ui config
├── 📄 next.config.ts           # Next.js configuration
├── 📄 tailwind.config.ts       # Tailwind CSS config
├── 📄 tsconfig.json            # TypeScript config
└── 📄 package.json             # Dependencies & scripts
```

### Key Directories Explained

- **`src/app/`**: Next.js 15 App Router with route groups for organization
- **`src/components/`**: Modular React components organized by purpose
- **`content/`**: MDX files for blog posts and case studies with frontmatter
- **`public/images/`**: Optimized images organized by category
- **`src/lib/`**: Utility functions, configurations, and business logic

## 📝 Content Management

### Adding Case Studies

Create a new `.mdx` file in `content/case-studies/` with the following frontmatter structure:

```mdx
---
title: "Project Title: Key Achievement"
description: "Brief description highlighting the main outcome"
client: "Client Name"
duration: "Month YYYY - Month YYYY"
role: "Your Role (e.g., Full-Stack Developer)"
tech: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
image: "/images/projects/project-name.jpg"
featured: true
metrics:
  - label: "Revenue Increase"
    value: "32%"
  - label: "Performance Improvement"
    value: "85%"
  - label: "Processing Speed"
    value: "<5 min"
publishedAt: 2024-01-15
---

## The Challenge

Describe the problem you solved...

## The Solution

Explain your approach and implementation...

## Results & Impact

Quantify the outcomes with specific metrics...
```

### Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Blog Post Title"
description: "Engaging description for SEO and social sharing"
tags: ["react", "typescript", "performance", "web-dev"]
publishedAt: 2024-01-15
author: "Bechara El Maalouf"
---

## Introduction

Your content here with proper headings and structure...
```

### Content Guidelines

- **Images**: Store in `public/images/` with descriptive names
- **SEO**: Include descriptive titles and meta descriptions
- **Tags**: Use consistent tags for better categorization
- **Metrics**: Always include quantifiable results in case studies
- **Structure**: Use proper heading hierarchy (H2, H3, etc.)

## 🎨 Design System & Customization

### Color Palette

The portfolio uses a sophisticated royal blue and gold color scheme:

```typescript
// tailwind.config.ts
colors: {
  // Royal Blue Palette
  royal: {
    50: '#f0f4ff',
    100: '#e0e9ff', 
    200: '#c7d7fe',
    300: '#a5bbfc',
    400: '#8195f8',
    500: '#6366f1',   // Primary
    600: '#4f46e5',
    700: '#4338ca',   // Brand primary
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  // Gold Accent
  gold: {
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',   // Primary gold
    500: '#f59e0b',
    600: '#d97706',
  }
}
```

### Typography

The portfolio uses a carefully selected font stack:

- **Display Font**: Playfair Display (serif) for headings and hero text
- **Body Font**: Geist Sans (modern sans-serif) for readable content
- **Code Font**: Geist Mono for code blocks and technical content

### Component Customization

All UI components are built with Radix UI primitives and can be customized in `src/components/ui/`. Key components include:

- **Buttons**: Multiple variants (default, secondary, ghost, outline)
- **Cards**: Project showcases and content containers
- **Forms**: Contact forms with validation
- **Dialogs**: Modal interactions
- **Accordions**: FAQ sections

### Dark Mode

The theme system supports:
- **System preference detection**
- **Manual toggle**
- **Persistent user preference**
- **Smooth transitions between themes**

### Responsive Design

Mobile-first approach with breakpoints:
```typescript
// Tailwind breakpoints
sm: '640px',   // Small devices
md: '768px',   // Medium devices  
lg: '1024px',  // Large devices
xl: '1280px',  // Extra large devices
2xl: '1536px', // 2X large devices
```

## 🚀 Deployment & Production

### Vercel Deployment (Recommended)

This portfolio is optimized for Vercel deployment:

1. **Connect Repository**
   - Push your code to GitHub
   - Import project in Vercel dashboard
   - Configure build settings (auto-detected)

2. **Environment Variables**
   ```env
   # Production Environment Variables
   NEXT_PUBLIC_SITE_URL=https://becharaelmaalouf.dev
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=contact@becharaelmaalouf.dev
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_CF_ANALYTICS=xxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_CAL_USERNAME=becharaelmaalouf
   ```

3. **Automatic Features**
   - ✅ Automatic deployments on git push
   - ✅ Preview deployments for pull requests
   - ✅ Edge functions for server actions
   - ✅ Image optimization
   - ✅ Performance monitoring

### Alternative Deployment Options

#### Netlify
```bash
# Build command
npm run build

# Publish directory  
out/

# Environment variables: Same as Vercel
```

#### Self-Hosted (Docker)
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Production Optimization

#### Performance Monitoring
- **Core Web Vitals**: Monitored via Vercel Analytics
- **Lighthouse CI**: Automated performance testing
- **Bundle Analysis**: Use `npm run analyze` to check bundle size

#### SEO Configuration
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **RSS Feed**: Available at `/rss.xml`
- **Robots.txt**: Configured for optimal crawling
- **Meta Tags**: Dynamic for all pages

## 🔗 Integrations & Services

### Email Service (Resend)

**Setup Steps:**
1. Sign up at [resend.com](https://resend.com)
2. Add and verify your sending domain
3. Generate API key from dashboard
4. Configure environment variables

**Features:**
- Contact form email notifications
- Newsletter subscription management  
- Transactional email templates
- Delivery tracking and analytics

### Calendar Booking (Cal.com)

**Setup Steps:**
1. Create account at [cal.com](https://cal.com)
2. Set up your availability and booking types
3. Customize booking page appearance
4. Note your username for environment config

**Integration:**
- Embedded booking widget
- Custom styling to match portfolio theme
- Automatic timezone detection
- Calendar sync with Google/Outlook

### Analytics Setup

#### Google Analytics 4
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Install Global Site Tag (automatically handled)
3. Configure conversion tracking
4. Set up custom events for form submissions

#### Cloudflare Web Analytics
1. Add site to [Cloudflare dashboard](https://dash.cloudflare.com)
2. Enable Web Analytics
3. Copy analytics token
4. Zero client-side performance impact

### Email Newsletter

**Resend Integration:**
- Automated welcome emails
- Monthly newsletter campaigns
- Subscriber management
- Email template system

**Features:**
- Double opt-in confirmation
- Unsubscribe handling
- Delivery analytics
- A/B testing capabilities

## 🧪 Development & Testing

### Code Quality Standards

**TypeScript Configuration:**
- Strict mode enabled
- Path mapping for clean imports
- Incremental compilation
- Full type coverage

**ESLint Rules:**
- Next.js recommended config
- React best practices
- TypeScript strict rules
- Custom rules for consistency

**Prettier Configuration:**
- Consistent code formatting
- Automatic on save
- Integration with ESLint
- Import sorting

### Performance Optimization

#### Target Metrics
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.0s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 2.5s
- **First Input Delay**: < 100ms

#### Optimization Techniques
- **Image Optimization**: Next.js Image component with WebP
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Regular size monitoring
- **Critical CSS**: Inlined for above-the-fold content
- **Lazy Loading**: Components and images
- **Font Optimization**: Preloaded Google Fonts

### Testing Strategy

#### Unit Testing (Future Enhancement)
```bash
# Recommended testing stack
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm install --save-dev @types/jest jest-environment-jsdom
```

#### E2E Testing (Future Enhancement)
```bash
# Recommended E2E testing
npm install --save-dev playwright @playwright/test
```

### Debugging Tools

**Development Environment:**
- React Developer Tools
- Next.js DevTools
- TypeScript error reporting
- Hot module replacement

**Production Monitoring:**
- Vercel Analytics
- Error boundary implementation
- Performance monitoring
- User feedback collection

## 📄 License & Contributing

### License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details. You're free to use this code as a template for your own portfolio with attribution.

### Using as a Template

If you'd like to use this portfolio as a template:

1. **Fork the repository**
2. **Update personal information** in `src/lib/config.ts`
3. **Replace content** in `content/` directory
4. **Update images** in `public/images/`
5. **Customize colors** in `tailwind.config.ts`
6. **Configure integrations** with your own API keys

### Contributing

While this is primarily a personal portfolio, contributions are welcome for:

- **Bug fixes**
- **Performance improvements** 
- **Accessibility enhancements**
- **Documentation updates**
- **New component features**

**How to contribute:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## 🆘 Support & Troubleshooting

### Common Issues

**Build Errors:**
- Ensure Node.js version 20+
- Clear `.next` folder and rebuild
- Check environment variables

**Styling Issues:**
- Verify Tailwind CSS configuration
- Check for conflicting CSS classes
- Ensure proper import order

**Content Not Showing:**
- Verify MDX frontmatter format
- Check file naming conventions
- Ensure proper date formats

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/TiredZone/portfolio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/TiredZone/portfolio/discussions)
- **Email**: [contact@becharaelmaalouf.dev](mailto:contact@becharaelmaalouf.dev)

## 👤 About the Developer

**Bechara El Maalouf** - Senior Web Architect & Full-Stack Developer

🏆 **Expertise:**
- **E-commerce Optimization**: Delivered 32% revenue increase for $2M+/month brands
- **Lead Automation**: Built systems processing 50,000+ monthly leads  
- **Performance Engineering**: Specialized in Core Web Vitals optimization
- **Full-Stack Development**: React, Node.js, TypeScript, Shopify Plus

📍 **Location**: Zouk Mosbeh, Lebanon (GMT+2)  
📧 **Email**: [contact@becharaelmaalouf.dev](mailto:contact@becharaelmaalouf.dev)  
🗓️ **Schedule a Call**: [cal.com/becharaelmaalouf](https://cal.com/becharaelmaalouf)

### Connect With Me

- 🌐 **Portfolio**: [becharaelmaalouf.dev](https://becharaelmaalouf.dev)
- 💼 **LinkedIn**: [bechara-el-maalouf-920645200](https://www.linkedin.com/in/bechara-el-maalouf-920645200/)
- 👨‍💻 **GitHub**: [@TiredZone](https://github.com/TiredZone) 
- 🐦 **Twitter**: [@becharaelm](https://twitter.com/becharaelm)

### Featured Projects

**🚀 Kalyxl Lead Automation** - AI-powered lead processing system handling 50K+ monthly leads with 85% manual work reduction

**⚡ Sunday Golf Performance** - Shopify Plus theme migration resulting in 32% revenue increase and improved Core Web Vitals

**🛍️ Bad Marketing Optimization** - E-commerce optimization delivering significant performance improvements for high-traffic Shopify stores

## 🙏 Acknowledgments & Credits

### Technologies & Frameworks
- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[Vercel](https://vercel.com/)** - Platform for frontend developers
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Radix UI](https://www.radix-ui.com/)** - Low-level UI primitives

### Design & UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful & consistent icons
- **[Google Fonts](https://fonts.google.com/)** - Playfair Display & Geist fonts

### Services & Integrations
- **[Resend](https://resend.com/)** - Modern email API for developers
- **[Cal.com](https://cal.com/)** - Open source scheduling infrastructure
- **[Cloudflare](https://www.cloudflare.com/)** - Web performance & security

### Development Tools
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[ESLint](https://eslint.org/)** - Find and fix problems in JavaScript code
- **[Prettier](https://prettier.io/)** - Opinionated code formatter

---

**⭐ If this project helped you, please consider giving it a star on GitHub!**

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
