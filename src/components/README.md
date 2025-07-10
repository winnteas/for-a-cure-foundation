# Components Directory Structure

This directory contains all React components organized by their purpose and functionality.

## Directory Structure

```
components/
├── layout/           # Layout components (Navigation, Footer, etc.)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── index.ts
├── sections/         # Main content sections
│   ├── HeroSection.tsx
│   ├── VisionMissionValues.tsx
│   ├── ImpactStats.tsx
│   ├── NewsSection.tsx
│   ├── PartnersSection.tsx
│   └── index.ts
├── features/         # Interactive features
│   ├── DonationSection.tsx
│   ├── NewsletterSection.tsx
│   └── index.ts
├── content/          # Content display components
│   └── index.ts
└── index.ts          # Main export file
```

## Component Categories

### Layout Components (`/layout`)
Components that define the overall structure and navigation of the application.
- **Navbar**: Main navigation bar
- **Footer**: Site footer with links and contact information

### Section Components (`/sections`)
Main content sections that make up the page layout.
- **HeroSection**: Hero banner with main call-to-action
- **VisionMissionValues**: Vision, mission, and values cards
- **ImpactStats**: Statistics and impact metrics
- **NewsSection**: Latest news and updates
- **PartnersSection**: Partnership information and logos

### Feature Components (`/features`)
Interactive components that provide specific functionality.
- **DonationSection**: Donation form and payment processing
- **NewsletterSection**: Newsletter subscription form

### Content Components (`/content`)
Reusable content display components (ready for future expansion).
- Future components: ArticleCard, TestimonialCard, etc.

## Usage

### Importing Components

You can import components in several ways:

1. **Individual imports** (recommended for specific components):
```typescript
import { Navbar, Footer } from './components/layout';
import { HeroSection } from './components/sections';
```

2. **Main index import** (for multiple components):
```typescript
import {
  Navbar,
  Footer,
  HeroSection,
  DonationSection
} from './components';
```

3. **Direct file import** (if needed):
```typescript
import Navbar from './components/layout/Navbar';
```

## Adding New Components

When adding new components:

1. **Choose the appropriate directory** based on the component's purpose
2. **Follow the naming convention**: PascalCase for component names
3. **Export from the directory's index.ts** file
4. **Update the main index.ts** if it's a commonly used component
5. **Add TypeScript interfaces** for props and data structures

## TypeScript

All components are written in TypeScript with:
- Proper React.FC typing
- Interface definitions for props and data
- Type-safe event handlers
- Strict type checking enabled 