# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Loopin is a new business development support platform. This repository contains the landing page showcasing the platform's features, pricing, and value proposition. The site is built with Next.js 15.5.4 and TypeScript, featuring a modern metallic design with gradient accents and iOS-inspired UI elements.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run Next.js ESLint

### TypeScript
- `npx tsc --noEmit` - Type check without emitting files

## Architecture

### App Structure (Next.js App Router)

The project uses Next.js 15 App Router with the following structure:

- `src/app/layout.tsx` - Root layout with Header component, metadata, and Noto Serif JP font configuration
- `src/app/page.tsx` - Home page composed of 9 sequential landing page sections
- `src/app/contact/page.tsx` - Standalone contact form page
- `src/app/privacy/page.tsx` - Privacy policy page
- `src/app/terms/page.tsx` - Terms of service page

### Component Organization

All components are organized in `src/components/`:

**Landing Page Sections** (rendered in order on home page):
1. HeroSection - Main value proposition
2. ServiceOverview - Platform overview
3. UseCases - Use case scenarios
4. Features - Core features
5. AboutUs - Development background
6. PricingPlans - Pricing tiers (Individual & Team plans)
7. Testimonials - Customer testimonials
8. CTASection - Call-to-action
9. Footer - Site footer with navigation

**UI Components**:
- `Header.tsx` - Fixed navigation header used in root layout
- `Footer.tsx` - Reusable footer component
- `ContactForm.tsx` - Form component for contact page
- `ContactButton.tsx` - Button linking to contact page
- `ui/` - Shared UI components (e.g., aurora-background, interactive-hover-button)

**Utilities**:
- `src/lib/utils.ts` - Contains `cn()` helper for merging Tailwind classes using clsx and tailwind-merge

### Styling System

**Tailwind Configuration** (`tailwind.config.ts`):
- Custom color palette: gradient-blue, gradient-green, gradient-purple
- Custom animations: pulse-slow, shimmer, aurora
- Extended border radius: xl, 2xl, 3xl
- Custom gradient backgrounds: gradient-primary, gradient-secondary, metal-texture

**Global CSS Classes** (`src/app/globals.css`):
- `.glass-effect` - Backdrop blur with transparency
- `.metal-gradient` - Metallic gradient surface
- `.gradient-text` - Text with gradient color
- `.metal-button` - Button with metallic gradient and hover effects
- `.metal-surface` - Surface with inset shadows for depth
- `.glass-panel` - Glassmorphism panel effect
- `.section-padding` - Responsive horizontal padding

**Font Stack**:
- Primary: SF Pro Display/Text (Apple system fonts)
- Fallback: BlinkMacSystemFont, Helvetica Neue, Arial
- Japanese: Noto Serif JP (loaded via next/font/google)

### Path Aliases

TypeScript paths are configured in `tsconfig.json`:
- `@/*` maps to `./src/*` for clean imports

### Image Assets

All images are stored in `public/images/`:
- Logo files: `Loopin_logoType_light.png`, `Loopin_symbolMarc.png`
- Illustration SVGs: undraw_*.svg files for various sections
- Notebook mockups: image 8.png, 9.png, 10.png

## Design System

**Theme**: Dark metallic with glassmorphism effects
**Color Scheme**: Blue (#3b82f6), Green (#10b981), Purple (#8b5cf6) gradients
**Visual Style**: iOS-inspired, modern, clean, trustworthy

## Key Technical Details

- **React Version**: 19.0.0
- **Next.js Features**: App Router, Server Components, next/font optimization
- **TypeScript**: Strict mode enabled
- **Path Resolution**: Uses `@/` prefix for src imports
- **SEO**: Metadata configured in layout.tsx with OpenGraph and Twitter cards
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Development Notes

- The site is primarily Japanese language (`lang="ja"` in root HTML)
- All main landing page sections are rendered in a single page (`app/page.tsx`)
- Header is fixed at top with `pt-16` padding on main content
- Contact, Privacy, and Terms pages are separate routes under `/app`
- Images should be placed in `public/images/` and referenced as `/images/filename`
