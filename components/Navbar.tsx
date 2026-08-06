"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const updateScrollState = () => setHasScrolled(window.scrollY > 0);

        updateScrollState();
        window.addEventListener("scroll", updateScrollState, { passive: true });

        return () => window.removeEventListener("scroll", updateScrollState);
    }, []);

    useGSAP(
        () => {
            gsap.from(navRef.current, {
                opacity: 0,
                x: 1000,
                delay: 3.0,
                duration: 1.5,
                ease: "power3.out",
            });
        },
        { scope: navRef },
    );

    return (
        <nav
            className="fixed z-1000 flex w-full items-center justify-center py-4"
            aria-label="Primary navigation"
        >
            <div
                className={`flex w-fit items-center gap-6 rounded-full border border-white/10 px-4 py-4 backdrop-blur-md transition-colors sm:gap-8 sm:px-8 ${hasScrolled ? "bg-[#0a0b0d]" : "bg-white/4"}`}
                ref={navRef}
            >
                <a
                    className="font-mono text-base font-bold tracking-[-0.08em] text-white"
                    href="#top"
                    aria-label="Home"
                >
                    FS<span className="text-cyan-200">.</span>
                </a>
                <div className="hidden items-center gap-5 text-xs text-zinc-400 sm:flex">
                    <a
                        className="transition-colors hover:text-white"
                        href="#work"
                    >
                        Projects
                    </a>
                    <a
                        className="transition-colors hover:text-white"
                        href="#about"
                    >
                        About
                    </a>
                    <a
                        className="transition-colors hover:text-white"
                        href="#experience"
                    >
                        Experience
                    </a>
                    <a
                        className="transition-colors hover:text-white"
                        href="#contact"
                    >
                        Contact
                    </a>
                    <a
                        className="group inline-flex items-center gap-2 border-b border-cyan-200 px-1 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-200 transition-colors hover:text-cyan-200"
                        href="/FrasierSundra.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                        <span
                            className="transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
