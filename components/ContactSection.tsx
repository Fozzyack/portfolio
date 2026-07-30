"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const contactLinks = [
    {
        label: "GitHub",
        href: "https://github.com/Fozzyack",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/fsundra",
    },
];

export default function ContactSection() {
    const root = useRef<HTMLHtmlElement>(null);

    useGSAP(
        () => {
            const header = SplitText.create(".header", { type: "words" });
            gsap.from(header.words, {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 10%",
                    toggleActions: "play none none reverse",
                    markers: true,
                },
            });
        },
        { scope: root },
    );
    return (
        <section
            className="border-t border-white/10 bg-[#0a0b0d] px-6 py-24 text-zinc-100 sm:px-10 sm:py-32 lg:px-16"
            id="contact"
            aria-labelledby="contact-title"
            ref={root}
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    <span>04 / Contact</span>
                    <span>Perth, WA · Australia</span>
                </div>

                <div className="grid gap-16 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24 lg:py-28">
                    <div>
                        <p className="header font-mono text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                            Have a project in mind?
                        </p>
                        <h2
                            className="header mt-8 max-w-4xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.1em]"
                            id="contact-title"
                        >
                            Let&apos;s make something useful.
                        </h2>
                    </div>

                    <div className="flex flex-col justify-end lg:pb-2">
                        <p className="max-w-sm text-lg leading-7 text-zinc-400">
                            I&apos;m always open to thoughtful conversations,
                            interesting problems, and opportunities to build
                            better things together.
                        </p>
                        <a
                            className="group mt-10 flex w-fit items-center gap-4 border-b border-cyan-200 pb-3 text-xl tracking-[-0.04em] text-cyan-200 transition-opacity hover:opacity-60 sm:text-2xl"
                            href="mailto:fsundra@gmail.com"
                        >
                            fsundra@gmail.com
                            <span
                                className="transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-8 border-t border-white/10 pt-5 text-sm sm:flex-row sm:items-end">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                            Find me online
                        </p>
                        <div className="mt-4 flex gap-6">
                            {contactLinks.map((link) => (
                                <a
                                    className="text-zinc-300 transition-colors hover:text-cyan-200"
                                    href={link.href}
                                    key={link.label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.label} ↗
                                </a>
                            ))}
                        </div>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                        Frasier Sundra © 2026
                    </p>
                </div>
            </div>
        </section>
    );
}
