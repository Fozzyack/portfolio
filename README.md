# Frasier Sundra - Portfolio

Personal portfolio for Frasier Sundra, a software engineer based in Perth,
Western Australia.

The site presents selected work, experience, technical skills, and contact
details in a dark editorial layout with responsive sections and scroll-based
animation.

## Built With

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS
- GSAP and ScrollTrigger
- Geist and Geist Mono fonts
- Icons8 technology icons

## Sections

- Hero introduction and social links
- About and technical stack
- Professional experience
- Selected projects with live previews
- Contact details

## Getting Started

Install dependencies with Bun:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
bun run dev      # Start the development server
bun run lint     # Run ESLint
bun run build    # Create a production build
bun run start    # Serve the production build
```

## Project Structure

```text
app/
  page.tsx       Main page composition
  layout.tsx     Root layout and metadata
  globals.css    Global styles and theme values
components/     Portfolio sections and navigation
public/         Static assets, including the hero video
```

## Editing Content

Most portfolio content is defined near the top of its component:

- `components/HeroSection.tsx` for profile links and hero copy
- `components/AboutSection.tsx` for personal details and technologies
- `components/ExperienceSection.tsx` for work history
- `components/WorkSection.tsx` for selected projects
- `components/ContactSection.tsx` for contact links

Technology icons are provided by [Icons8](https://icons8.com).

## Animation Notes

The About section uses GSAP and ScrollTrigger for its scroll-based reveals.
Headings use SplitText word masks, while technology badges use an
`overflow-hidden` wrapper to clip each badge as it animates upward from below.
The badge reveal is configured in `components/AboutSection.tsx` through the
`.icon-badge` selector.
