# Components Documentation

This directory contains all React components used in the portfolio application.

## Component Architecture

The components are organized into two main categories:
- **UI Components** (`/ui/`) - Reusable, base components from Radix UI
- **Section Components** - Page-specific components for different portfolio sections

## Section Components

### `hero-section.tsx`
The main landing section featuring:
- Profile image display
- Name and title with typewriter animation
- Call-to-action buttons (Contact, Resume)
- Social media links (GitHub, LinkedIn, Email)

**Props**: None (self-contained)

### `about-section.tsx`
Personal introduction section with biographical information.

**Props**: None (self-contained)

### `projects-section.tsx`
Showcase section for projects and portfolio work.

**Props**: None (self-contained)

### `skills-section.tsx`
Technical skills and expertise display.

**Props**: None (self-contained)

### `experience-section.tsx`
Professional experience timeline.

**Props**: None (self-contained)

### `contact-section.tsx`
Contact form and information section.

**Props**: None (self-contained)

### `header.tsx`
Navigation header component with:
- Site navigation menu
- Theme toggle (dark/light mode)
- Mobile responsive design

**Props**: None (self-contained)

### `footer.tsx`
Site footer with additional links and information.

**Props**: None (self-contained)

## Utility Components

### `animated-section.tsx`
Wrapper component that adds scroll-triggered animations to child elements.

**Props**:
- `animation`: Animation type (`fade-in`, `fade-up`, `slide-left`, `slide-right`, `scale-up`)
- `delay`: Animation delay in milliseconds (optional, default: 0)
- `children`: React children to animate

**Usage**:
```tsx
<AnimatedSection animation="fade-up" delay={200}>
  <YourComponent />
</AnimatedSection>
```

### `typewriter-text.tsx`
Animated text component that cycles through different text strings with a typewriter effect.

**Props**:
- `texts`: Array of strings to cycle through
- `className`: Additional CSS classes (optional)

**Usage**:
```tsx
<TypewriterText
  texts={["Full-Stack Developer", "Software Engineer"]}
  className="text-xl"
/>
```

## UI Components (`/ui/`)

These components are based on Radix UI primitives and styled with Tailwind CSS. They follow the shadcn/ui pattern for consistency and accessibility.

Key UI components include:
- `button.tsx` - Styled button variants
- `input.tsx` - Form input components  
- `textarea.tsx` - Text area inputs
- `switch.tsx` - Toggle switches
- And many more Radix UI components

## Styling Conventions

All components use:
- **Tailwind CSS** for styling
- **CSS variables** for theme colors
- **Responsive design** with mobile-first approach
- **Accessibility** standards via Radix UI

## Animation System

Components use a consistent animation system:
- Animations trigger on scroll using Intersection Observer
- Configurable delays and animation types
- CSS-based animations for performance
- Respects user's motion preferences

## Theme Support

All components support dark/light themes through:
- CSS custom properties for colors
- `next-themes` for theme switching
- Automatic system theme detection