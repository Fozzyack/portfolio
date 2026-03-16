"use client";

import { useEffect, useState } from "react";

export function LandingNavbar() {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav className="fixed inset-x-0 top-0 z-30 grid w-full grid-cols-3 items-center px-6 py-5 text-[0.72rem] uppercase tracking-[0.22em] md:px-10 md:text-[0.78rem]">
            <div
                className={`absolute inset-0 -z-10 border-b backdrop-blur-sm transition-opacity duration-300 ${
                    scrolled
                        ? "border-[#232720]/20 bg-[#f1eee6]/92 opacity-100"
                        : "border-transparent bg-transparent opacity-0"
                }`}
            />
            <a
                href="#projects"
                className="animate-fade-in justify-self-start text-[#232720]/88 transition-opacity hover:opacity-65"
            >
                Projects
            </a>
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
            <span
                className={`animate-fade-in justify-self-end border px-3 py-1 text-[0.6rem] tracking-[0.18em] ${
                    scrolled
                        ? "border-[#232720]/30 bg-[#e9e4d8] text-[#232720]/86"
                        : "border-[#e7e1d3]/40 bg-[#e7e1d3]/8 text-[#e7e1d3]/92"
                }`}
                style={{ animationDelay: "220ms" }}
            >
                Available 2026
            </span>
        </nav>
    );
}
