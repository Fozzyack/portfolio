"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#work" },
    { label: "Smaller builds", href: "#smaller-builds" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateScrollState = () => setHasScrolled(window.scrollY > 0);

        updateScrollState();
        window.addEventListener("scroll", updateScrollState, { passive: true });

        return () => window.removeEventListener("scroll", updateScrollState);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const desktop = window.matchMedia("(min-width: 768px)");
        const closeOnDesktop = () => {
            if (desktop.matches) setIsMenuOpen(false);
        };

        const closeOnOutsideClick = (event: PointerEvent) => {
            if (!navRef.current?.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        document.addEventListener("pointerdown", closeOnOutsideClick);
        document.addEventListener("keydown", closeOnEscape);
        desktop.addEventListener("change", closeOnDesktop);

        return () => {
            document.removeEventListener("pointerdown", closeOnOutsideClick);
            document.removeEventListener("keydown", closeOnEscape);
            desktop.removeEventListener("change", closeOnDesktop);
        };
    }, [isMenuOpen]);

    useGSAP(
        () => {
            const motion = gsap.matchMedia();

            motion.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.from(navRef.current, {
                    opacity: 0,
                    y: -12,
                    delay: 1.5,
                    duration: 0.8,
                    ease: "power3.out",
                });
            });

            return () => motion.revert();
        },
        { scope: navRef },
    );

    return (
        <nav
            className="fixed inset-x-0 top-0 z-100 px-6 pt-4 sm:px-10 sm:pt-6 lg:px-16"
            aria-label="Primary navigation"
        >
            <div
                className={`mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-8 border px-5 backdrop-blur-md transition-colors duration-300 motion-reduce:transition-none sm:px-6 ${hasScrolled || isMenuOpen ? "border-white/15 bg-[#0a0b0d]/95" : "border-white/8 bg-[#0a0b0d]/70"}`}
                ref={navRef}
            >
                <a
                    className="inline-flex min-h-16 items-center text-2xl font-semibold tracking-[-0.08em] text-[#f2f0eb] outline-offset-4 focus-visible:outline focus-visible:outline-zinc-300"
                    href="#top"
                    aria-label="Home"
                    onClick={() => setIsMenuOpen(false)}
                >
                    FS
                    <span
                        className="ml-0.5 font-mono text-lg font-normal text-zinc-500"
                        aria-hidden="true"
                    >
                        _
                    </span>
                </a>
                <button
                    ref={menuButtonRef}
                    type="button"
                    className="flex min-h-11 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300 outline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-zinc-300 md:hidden"
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation-links"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? "Close" : "Menu"}
                    <span aria-hidden="true">{isMenuOpen ? "[−]" : "[+]"}</span>
                </button>
                <ul
                    id="primary-navigation-links"
                    className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col border-t border-white/10 pb-4 pt-2 text-sm text-zinc-400 md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:py-0 md:text-xs lg:gap-8`}
                >
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                className="flex min-h-11 items-center underline-offset-8 transition-colors hover:text-[#f2f0eb] hover:underline focus-visible:text-white focus-visible:outline focus-visible:outline-zinc-300 motion-reduce:transition-none"
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="mt-2 border-t border-white/10 pt-2 md:mt-0 md:border-l md:border-t-0 md:pl-5 md:pt-0 lg:pl-8">
                        <a
                            className="inline-flex min-h-11 items-center gap-2 text-[#f2f0eb] underline-offset-8 hover:underline focus-visible:outline focus-visible:outline-zinc-300"
                            href="/FrasierSundra.pdf"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resume
                            <span className="text-zinc-500" aria-hidden="true">
                                ↗
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
