import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/typewriter-text";

const focusAreas: string[] = [
  "Full-stack product engineering",
  "AI-assisted workflows",
  "Developer experience",
];

const quickStats: Array<{ label: string; value: string }> = [
  { label: "Production launches", value: "12+" },
  { label: "Cross-functional teams", value: "8" },
  { label: "Countries collaborated", value: "4" },
];

type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  { href: "https://github.com/Fozzyack", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/fsundra", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:fsundra@gmail.com", label: "Email", icon: Mail },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/10"
        aria-hidden
      />
      <div
        className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl md:h-96 md:w-96"
        aria-hidden
      />
      <div
        className="absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl md:h-[28rem] md:w-[28rem]"
        aria-hidden
      />

      <div className="container mx-auto px-4 py-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/80 px-4 py-2 text-sm text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>Hi, I'm Frasier</span>
            </div>

            <div className="space-y-4">
              <h1 className="bg-gradient-to-r from-primary via-red-600 to-accent bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                Frasier Sundra
              </h1>
              <p className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-[2.75rem]">
                Engineering resilient products that elevate teams and users
              </p>
              <div className="text-xl text-muted-foreground sm:text-2xl">
                <TypewriterText
                  texts={[
                    "Full-Stack Developer",
                    "University Graduate",
                    "Software Engineer",
                  ]}
                  className="text-xl sm:text-2xl"
                />
              </div>
            </div>

            <p className="max-w-2xl text-lg text-foreground/80 leading-relaxed">
              I design and ship end-to-end solutions across web, cloud, and
              automation. With a strong product mindset and a love for polished
              developer tools, I turn complex requirements into delightful
              experiences that scale.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/*
                            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                                <a href="#book-call">
                                    <ArrowUpRight className="mr-2 h-4 w-4" />
                                    Book a discovery call
                                </a>
                            </Button>
                            */}
              <Button size="lg" variant="outline" asChild>
                <a href="/frasier-sundra-resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download resume
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <Badge
                  key={area}
                  variant="outline"
                  className="border-primary/30 bg-background/60 text-sm text-primary"
                >
                  {area}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-border/50 bg-background/70 p-8 shadow-xl backdrop-blur-xl">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Snapshot
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                Building momentum with thoughtful engineering
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently shaping energy tech and accessible tooling. I partner
                with founders and teams to create products that balance
                performance, accessibility, and maintainability.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {quickStats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm transition-all hover:border-primary/50"
                >
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-5 text-sm text-muted-foreground">
              Let's turn your roadmap into tangible outcomes — from discovery to
              deployment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
