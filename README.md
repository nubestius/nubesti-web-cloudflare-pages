# Nubesti - AI-Powered Cybersecurity Platform

<p align="center">
  <img src="public/images/logo-nubesti.svg" alt="Nubesti Logo" width="200"/>
</p>

<p align="center">
  <strong>Autonomous AI Red Team Platform for Enterprise Security</strong>
</p>

<p align="center">
  <a href="https://nubesti.com">Website</a> •
  <a href="https://nubesti.com/demo">Demo</a> •
  <a href="https://nubesti.com/pricing">Pricing</a> •
  <a href="https://nubesti.com/contact">Contact</a>
</p>

---

## 🚀 Overview

Nubesti is an AI-powered cybersecurity platform that provides autonomous red team capabilities for enterprise security testing. Our platform uses advanced AI agents to identify vulnerabilities, conduct penetration testing, and provide actionable security insights.

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build) | 5.5.4 | Static Site Generator |
| [React](https://react.dev) | 19.x | UI Components |
| [TailwindCSS](https://tailwindcss.com) | 4.x | Styling |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type Safety |
| [Cloudflare Pages](https://pages.cloudflare.com) | - | Hosting & CDN |

## 📁 Project Structure

```
web-nubesti/
├── public/                 # Static assets
│   ├── fonts/             # Custom fonts (Satoshi)
│   ├── images/            # Images & favicons
│   ├── _headers           # Cloudflare security headers
│   └── _redirects         # URL redirects
├── src/
│   ├── components/        # Reusable UI components
│   ├── config/            # Site configuration
│   │   ├── config.toml    # Main config (analytics, settings)
│   │   ├── menu.*.json    # Navigation menus (per language)
│   │   └── theme.json     # Theme colors & styles
│   ├── content/           # Markdown content (Astro Content Collections)
│   │   ├── blog/          # Blog posts
│   │   ├── homepage/      # Homepage content
│   │   ├── pricing/       # Pricing plans
│   │   └── ...            # Other content types
│   ├── i18n/              # Translations (en, es, fr, pt)
│   ├── layouts/           # Page layouts
│   │   └── components/    # Layout-specific components
│   │       ├── analytics/ # Analytics integrations
│   │       ├── seo/       # SEO & Schema.org
│   │       └── global/    # Global components (Head, etc.)
│   ├── lib/               # Utilities & helpers
│   ├── pages/             # Astro pages & routes
│   └── styles/            # CSS stylesheets
├── scripts/               # Build & utility scripts
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind configuration
├── wrangler.toml          # Cloudflare Workers config
└── package.json           # Dependencies & scripts
```

## 🌍 Internationalization (i18n)

The site supports 4 languages:

| Language | Code | URL Path |
|----------|------|----------|
| English | `en` | `/` (default) |
| Spanish | `es` | `/es/` |
| French | `fr` | `/fr/` |
| Portuguese | `pt` | `/pt/` |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/nubestius/web-nubesti.git
cd web-nubesti

# Install dependencies
yarn install
```

### Development

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

### Deployment

The site is deployed to **Cloudflare Pages**:

```bash
# Deploy to Cloudflare Pages
yarn deploy:cf

# Or manually with wrangler
npx wrangler pages deploy dist --project-name=nubesti-web
```

## 📊 Analytics

- **Cloudflare Web Analytics** - Privacy-friendly, no cookies, automatically injected by Cloudflare Pages

## 🔒 Security Features

### HTTP Headers (via `_headers`)

- **Content-Security-Policy** - Strict CSP with nonces
- **X-Frame-Options** - DENY (clickjacking protection)
- **X-Content-Type-Options** - nosniff
- **Strict-Transport-Security** - HSTS enabled
- **Referrer-Policy** - strict-origin-when-cross-origin
- **Permissions-Policy** - Restricted browser features

### DNS & Email Security

- **DMARC** - `p=quarantine` with reporting
- **SPF** - Configured for Google Workspace & Zeptomail
- **DKIM** - Enabled for all email services

## 📝 Content Management

Content is managed via **Astro Content Collections** using Markdown/MDX files:

```bash
src/content/
├── blog/           # Blog posts
│   ├── english/
│   ├── spanish/
│   ├── french/
│   └── portuguese/
├── homepage/       # Homepage sections
├── pricing/        # Pricing plans
├── faq/            # FAQ items
└── ...
```

### Adding a Blog Post

1. Create a new `.md` file in `src/content/blog/{language}/`
2. Add frontmatter with required fields:

```yaml
---
title: "Your Post Title"
description: "Brief description"
date: 2025-12-05
image: "/images/blog/your-image.webp"
author: "author-slug"
categories: ["cybersecurity", "ai"]
tags: ["red-team", "automation"]
draft: false
---

Your content here...
```

## 🧪 Testing

```bash
# Run tests
yarn test

# Run tests with coverage
yarn test:coverage
```

## 📦 Build Output

The production build generates:
- **114 static pages** across 4 languages
- Optimized images (WebP format)
- Minified CSS/JS bundles
- Sitemap (`sitemap-index.xml`, `sitemap-enhanced.xml`)

## 🔗 URLs

| Environment | URL |
|-------------|-----|
| Production | https://nubesti.com |
| Production (www) | https://www.nubesti.com |
| Preview | https://nubesti-web.pages.dev |

## 📄 License

Copyright © 2025 Nubesti. All Rights Reserved.

---

<p align="center">
  Made with ❤️ by the Nubesti Team
</p>
