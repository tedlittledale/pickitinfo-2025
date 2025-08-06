# Litter-Picking Community App Website

## Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript 5.2
- Styling: Tailwind CSS 4.1
- UI Components: shadcn/ui
- Maps: Google Maps JavaScript API
- Analytics: Google Analytics 4
- Deployment: Vercel

## Project Structure

- `src/app`: Next.js App Router pages and layouts
- `src/components`: Reusable React components
- `src/lib`: Core utilities, API clients, and configurations
- `src/types`: TypeScript type definitions
- `public`: Static assets and images

## Key Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint with accessibility rules
- `npm run type-check`: TypeScript validation

## Code Standards

- Use TypeScript strict mode for all files
- Implement WCAG 2.2 AA accessibility standards
- Follow mobile-first responsive design principles
- Use semantic HTML and proper ARIA labels
- Optimize for Core Web Vitals (LCP <2.5s, INP <200ms, CLS <0.1)

## Legal Compliance Requirements

- UK GDPR compliance for location data
- Google Play Store companion website requirements
- Privacy policy and terms of service pages
- Cookie consent and data protection measures
- Accessibility compliance with disability rights

## Environment Variables

- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: Google Maps API key
- NEXT_PUBLIC_GA_ID: Google Analytics measurement ID
- DATABASE_URL: Database connection string
- NEXTAUTH_SECRET: Authentication secret key

## Workflow Guidelines

- Always implement accessibility features from the start
- Include meta tags and structured data for SEO
- Test on mobile devices first
- Validate legal compliance requirements
- Optimize images and performance automatically