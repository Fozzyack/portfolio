"use client";

import { useEffect, useState } from "react";

const NAV_SECTIONS = ["projects", "tools", "experience", "contact"] as const;

export function LandingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        for (const id of NAV_SECTIONS) {
            const el = document.getElementById(id);
            if (!el) continue;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
            );

            observer.observe(el);
            observers.push(observer);
        }

        return () => {
            for (const obs of observers) obs.disconnect();
        };
    }, []);

    return (
        <nav className="fixed inset-x-0 top-0 z-30 grid w-full grid-cols-3 items-center px-6 py-5 text-[0.72rem] uppercase tracking-[0.22em] md:px-10 md:text-[0.78rem]">
            <div
                className={`absolute inset-0 -z-10 border-b backdrop-blur-sm transition-opacity duration-300 ${
                    scrolled
                        ? "border-[#232720]/20 bg-[#f1eee6]/92 opacity-100"
                        : "border-transparent bg-transparent opacity-0"
                }`}
            />
            <div className="flex items-center gap-4 justify-self-start">
                <a
                    href="#projects"
                    className={`animate-fade-in transition-opacity hover:opacity-65 ${
                        activeSection === "projects"
                            ? "text-[#232720]"
                            : "text-[#232720]/88"
                    }`}
                >
                    Projects
                </a>
                {scrolled && activeSection ? (
                    <span className="hidden text-[0.48rem] tracking-[0.2em] text-[#c8b28b]/80 md:inline">
                        /
                    </span>
                ) : null}
                {scrolled && activeSection ? (
                    <span className="hidden text-[0.48rem] tracking-[0.2em] text-[#232720]/50 md:inline">
                        {activeSection}
                    </span>
                ) : null}
            </div>
            <a
                href="#"
                className={`animate-fade-in justify-self-center bg-clip-text text-transparent transition-opacity hover:opacity-75 ${
                    scrolled
                        ? "bg-[linear-gradient(90deg,#8f764d_0%,#8f764d_50%,#232720_50%,#232720_100%)]"
                        : "bg-[linear-gradient(90deg,#c8b28b_0%,#c8b28b_50%,#e7e1d3_50%,#e7e1d3_100%)]"
                }`}
                style={{ animationDelay: "120ms" }}
            >
                Frasier Sundra
            </a>
            <a
                href="/frasier-sundra.pdf"
                download
                className={`animate-fade-in justify-self-end border px-3 py-1 text-[0.6rem] tracking-[0.18em] transition-all duration-200 ${
                    scrolled
                        ? "border-[#232720]/30 bg-[#e9e4d8] text-[#232720]/86 hover:border-[#232720]/50 hover:bg-[#e1dbce]"
                        : "border-[#e7e1d3]/40 bg-[#e7e1d3]/8 text-[#e7e1d3]/92 hover:border-[#e7e1d3]/60 hover:bg-[#e7e1d3]/18"
                }`}
                style={{ animationDelay: "220ms" }}
            >
                Download Resume
            </a>
        </nav>
    );
}
