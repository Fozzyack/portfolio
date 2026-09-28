"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const projects = [
    {
        name: "password-charm",
        language: "Go",
        description:
            "A terminal password manager built with Bubble Tea and Lipgloss, using GPG encryption.",
        href: "https://github.com/Fozzyack/password-charm",
    },
    {
        name: "http-server",
        language: "C",
        description:
            "A work-in-progress HTTP server exploring TCP networking, HTTP parsing, and POSIX threads.",
        href: "https://github.com/Fozzyack/http-server",
    },
    {
        name: "simple-fuzzy-finder",
        language: "C++",
        description:
            "A small terminal fuzzy finder built with the ncurses library.",
        href: "https://github.com/Fozzyack/simple-fuzzy-finder",
    },
    {
        name: "cpu-cache-latency",
        language: "C",
        description:
            "A small script comparing CPU cache and RAM memory access latency.",
        href: "https://github.com/Fozzyack/cpu-cache-latency",
    },
    {
        name: "dotfiles",
        language: "Lua",
        description:
            "My development environment configuration for Hyprland, Neovim, tmux, Ghostty, and more.",
        href: "https://github.com/Fozzyack/dotfiles",
    },
    {
        name: "price-watch",
        language: "Zig",
        description:
            "A price checker that fetches product pages and extracts formatted prices.",
        href: "https://github.com/Fozzyack/price-watch",
    },
];

export default function SmallerProjectsSection() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const heading = SplitText.create(".smaller-projects-heading", {
                type: "words",
                mask: "words",
                wordsClass: "smaller-projects-word",
            });

            gsap.from(heading.words, {
                yPercent: 150,
                duration: 1.1,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(".smaller-project-card", {
                autoAlpha: 0,
                y: 32,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".smaller-projects-grid",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: root },
    );

    return (
        <section
            className="border-t border-white/10 bg-[#0a0b0d] px-6 py-20 text-zinc-100 sm:px-10 sm:py-24 lg:px-16"
            aria-labelledby="smaller-projects-title"
            ref={root}
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                            04 / From GitHub
                        </p>
                        <h2
                            className="smaller-projects-heading mt-5 text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.86] tracking-[-0.08em]"
                            id="smaller-projects-title"
                        >
                            Smaller builds.
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-6 text-zinc-500">
                        Experiments, tools, and works in progress from my pinned
                        GitHub repositories.
                    </p>
                </div>

                <div className="smaller-projects-grid grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <a
                            className="smaller-project-card group flex min-h-64 flex-col justify-between border-b border-r border-white/10 p-6 transition-colors hover:bg-cyan-200 hover:text-[#0a0b0d] sm:p-8"
                            href={project.href}
                            key={project.name}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex items-start justify-between gap-5">
                                <h3 className="font-mono text-sm font-medium tracking-[-0.03em]">
                                    {project.name}
                                </h3>
                                <span className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    -&gt;
                                </span>
                            </div>
                            <div>
                                <p className="text-sm leading-6 text-zinc-500 transition-colors group-hover:text-[#0a0b0d]/65">
                                    {project.description}
                                </p>
                                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 transition-colors group-hover:text-[#0a0b0d]/55">
                                    {project.language}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
