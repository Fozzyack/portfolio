"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const profile = {
    name: "Frasier Sundra",
    email: "fsundra@gmail.com",
    github: "https://github.com/Fozzyack",
    linkedin: "https://linkedin.com/in/fsundra",
};

export default function HeroSection() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const heroText = SplitText.create(".hero-header", {
                type: "chars",
            });

            gsap.from(heroText.chars, {
                display: "inline-block",
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.02,
                ease: "power3.out",
            });
        },
        { scope: root },
    );

    return (
        <section
            className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#0a0b0d] px-6 text-zinc-100 sm:px-10 lg:px-16"
            aria-labelledby="hero-title"
            ref={root}
        >
            <div
                className="hero-glow absolute -right-32 top-24 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
                aria-hidden="true"
            />

            <div
                className="mx-auto flex w-full max-w-7xl flex-1 items-center py-20 lg:py-24"
                id="top"
            >
                <div className="w-full text-center">
                    <h1
                        className="hero-header text-[clamp(4rem,13vw,12rem)] font-medium leading-[0.82] tracking-[-0.09em] text-white"
                        id="hero-title"
                    >
                        Frasier Sundra
                        <br />
                        <em className="font-serif text-[0.72em] font-normal tracking-[-0.08em] text-zinc-400">
                            Software Engineer.
                        </em>
                    </h1>
                </div>
            </div>

            <div className="hero-footer w-full border-t border-white/10">
                <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-5 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    <span className="hidden items-center gap-3 sm:flex">
                        Scroll to explore
                        <span
                            className="h-px w-12 bg-zinc-600"
                            aria-hidden="true"
                        />
                    </span>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <a
                            className="transition-colors hover:text-white"
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub ↗
                        </a>
                        <a
                            className="transition-colors hover:text-white"
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn ↗
                        </a>
                        <a
                            className="transition-colors hover:text-white"
                            href={`mailto:${profile.email}`}
                        >
                            {profile.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
