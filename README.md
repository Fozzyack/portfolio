# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, a dark/light theme toggle, and a clean professional design.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Custom animated sections with various effects
- **Theme Support**: Dark/light mode toggle with next-themes
- **Component Library**: Radix UI components for accessibility
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Next.js App Router for optimal loading

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15** - React framework for production
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme switching

### Forms & Validation
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation

### Additional Libraries
- **Framer Motion** (via tailwindcss-animate) - Animations
- **class-variance-authority** - Component variants
- **clsx** & **tailwind-merge** - Conditional classes

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── animated-section.tsx
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   ├── experience-section.tsx
│   ├── contact-section.tsx
│   ├── header.tsx
│   ├── footer.tsx
│   └── typewriter-text.tsx
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Components Overview

### Core Sections
- **HeroSection**: Landing area with profile image, typewriter effect, and social links
- **AboutSection**: Personal introduction and background
- **ProjectsSection**: Showcase of projects and work
- **SkillsSection**: Technical skills and expertise
- **ExperienceSection**: Professional experience timeline
- **ContactSection**: Contact form and information

### UI Components
- **AnimatedSection**: Wrapper for smooth scroll animations
- **TypewriterText**: Animated text effect for dynamic content
- **Header**: Navigation with theme toggle
- **Footer**: Site footer with additional links

### Animation Types
The AnimatedSection component supports various animations:
- `fade-in` - Fade in effect
- `fade-up` - Fade in from bottom
- `slide-left` - Slide in from right
- `slide-right` - Slide in from left  
- `scale-up` - Scale up effect

## 🎨 Customization

### Personal Information
Update personal details in:
- `components/hero-section.tsx` - Name, titles, profile image
- `components/about-section.tsx` - Bio and background
- Social media links and contact information

### Styling
- Edit `app/globals.css` for global styles
- Modify Tailwind classes in components
- Update theme colors in CSS variables

### Content
- Add projects in `components/projects-section.tsx`
- Update skills in `components/skills-section.tsx`
- Modify experience in `components/experience-section.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
Build the application:
```bash
npm run build
```
Then deploy the `out` directory to your hosting platform.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request