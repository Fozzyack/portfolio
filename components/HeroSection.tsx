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

const roles = [
    "Software Engineer",
    "Tech Enthusiast",
    "Hackathon Enjoyer",
    "PC Builder",
];

export default function HeroSection() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const motion = gsap.matchMedia();

            motion.add("(prefers-reduced-motion: no-preference)", () => {
                const firstName = SplitText.create(".hero-first-name", {
                    type: "chars",
                    aria: "none",
                });

                const roleLabels =
                    root.current?.querySelectorAll(".hero-role-label") ?? [];
                const rotation = gsap.timeline({ paused: true, repeat: -1 });

                roleLabels.forEach((label, index) => {
                    const nextLabel =
                        roleLabels[(index + 1) % roleLabels.length];
                    const transitionAt = index * 3.7 + 3;

                    rotation
                        .to(
                            label,
                            {
                                opacity: 0,
                                y: -8,
                                duration: 0.25,
                                ease: "power2.in",
                            },
                            transitionAt,
                        )
                        .fromTo(
                            nextLabel,
                            { opacity: 0, y: 8 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.45,
                                ease: "power2.out",
                                immediateRender: false,
                            },
                            transitionAt + 0.25,
                        );
                });

                const entrance = gsap.timeline({
                    paused: true,
                    defaults: { ease: "power3.out" },
                    onComplete: () => {
                        rotation.play();
                    },
                });

                entrance
                    .from(
                        firstName.chars,
                        {
                            yPercent: 115,
                            opacity: 0,
                            filter: "blur(6px)",
                            duration: 1.25,
                            stagger: 0.065,
                        },
                        0.12,
                    )
                    .from(
                        ".hero-last-name",
                        {
                            yPercent: 115,
                            rotation: 1.5,
                            transformOrigin: "15% 100%",
                            duration: 1.65,
                        },
                        0.48,
                    )
                    .from(
                        ".hero-role",
                        { opacity: 0, y: 10, duration: 0.8 },
                        1.5,
                    );

                // Follow the loader's actual exit rather than guessing a delay.
                const loader = document.querySelector(
                    '[role="status"][aria-label="Loading portfolio"]',
                );
                let observer: MutationObserver | undefined;

                const startEntrance = () => {
                    if (!loader || loader.classList.contains("opacity-0")) {
                        observer?.disconnect();
                        entrance.delay(0.15).play();
                    }
                };

                if (loader) {
                    observer = new MutationObserver(startEntrance);
                    observer.observe(loader, {
                        attributes: true,
                        attributeFilter: ["class"],
                    });
                }
                startEntrance();

                return () => {
                    observer?.disconnect();
                    // Keep character spacing stable until the effect cleans up.
                    firstName.revert();
                };
            });

            return () => motion.revert();
        },
        { scope: root },
    );

    return (
        <section
            className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0a0b0d] px-6 text-zinc-100 sm:px-10 lg:px-16"
            aria-labelledby="hero-title"
            ref={root}
        >
            <div
                className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center justify-center pb-16 pt-32 sm:pb-20 sm:pt-36"
                id="top"
            >
                <div className="w-full text-center">
                    <h1
                        className="hero-name text-[#f2f0eb]"
                        id="hero-title"
                        aria-label={profile.name}
                    >
                        <span className="hero-name-mask" aria-hidden="true">
                            <span className="hero-first-name inline-block">
                                Frasier
                            </span>
                        </span>
                        <span className="hero-name-mask" aria-hidden="true">
                            <span className="hero-last-name inline-block">
                                Sundra
                            </span>
                        </span>
                    </h1>
                    <p className="hero-role mt-8 flex items-center justify-center gap-3 font-mono text-[10px] tracking-[0.08em] text-zinc-400 sm:mt-10 sm:text-xs">
                        <span
                            className="text-zinc-500"
                            aria-hidden="true"
                        >
                            &gt;
                        </span>
                        <span className="sr-only">{roles.join(", ")}.</span>
                        <span
                            className="inline-grid overflow-hidden py-1 text-left"
                            aria-hidden="true"
                        >
                            {roles.map((role, index) => (
                                <span
                                    key={role}
                                    className={`hero-role-label col-start-1 row-start-1 ${index === 0 ? "opacity-100" : "opacity-0"}`}
                                >
                                    {role}
                                    <span className="ml-1 inline-block text-zinc-200 motion-safe:animate-[terminal-cursor_1s_steps(1)_infinite]">
                                        _
                                    </span>
                                </span>
                            ))}
                        </span>
                    </p>
                </div>
            </div>

            <div className="relative z-10 hero-footer w-full">
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
