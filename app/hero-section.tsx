"use client";

import { useEffect, useState } from "react";

function StaggeredName({
    text,
    baseDelay,
    className,
}: {
    text: string;
    baseDelay: number;
    className: string;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <span className={className} aria-label={text}>
            {text.split("").map((char, i) => (
                <span
                    key={`${char}-${i}`}
                    className={mounted ? "animate-letter" : "opacity-0"}
                    style={{
                        animationDelay: `${baseDelay + i * 50}ms`,
                    }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
}

const LEFT_STATS = [
    { label: "Focus", value: "Full-Stack" },
    { label: "Based", value: "Perth, WA" },
    { label: "Status", value: "Available" },
] as const;

const RIGHT_STATS = [
    { label: "Projects", value: "10+" },
    { label: "Stack", value: "TS / Go / C#" },
    { label: "Education", value: "BSc CS" },
] as const;

export function HeroSection() {
    return (
        <section className="group relative h-screen w-full overflow-hidden">
            {/* ── Two-tone background ──────────────────────── */}
            <div className="absolute inset-0 grid grid-cols-2">
                <div className="h-full w-full bg-[#e7e1d3]" />
                <div className="h-full w-full bg-[#232720]" />
            </div>

            {/* ── Subtle vignette ──────────────────────────── */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,transparent_0%,transparent_34%,rgba(0,0,0,0.1)_100%)]" />

            {/* ── Center divider line ─────────────────────── */}
            <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-full w-px -translate-x-1/2 bg-[#c8b28b]/40 transition-all duration-500 group-hover:w-[3px] group-hover:bg-[#c8b28b]/90" />
            <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-full w-8 -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(200,178,139,0.2)_50%,transparent_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* ── Corner brackets ─────────────────────────── */}
            {/* Top-left */}
            <div
                className="pointer-events-none absolute left-6 top-20 z-10 h-12 w-px bg-[#c8b28b]/30 animate-draw-v md:left-10 lg:left-16 lg:h-16 xl:left-20"
                style={{ animationDelay: "600ms" }}
            />
            <div
                className="pointer-events-none absolute left-6 top-20 z-10 h-px w-12 bg-[#c8b28b]/30 animate-draw-h md:left-10 lg:left-16 lg:w-16 xl:left-20"
                style={{ animationDelay: "650ms" }}
            />
            {/* Top-right */}
            <div
                className="pointer-events-none absolute right-6 top-20 z-10 h-12 w-px bg-[#c8b28b]/30 animate-draw-v md:right-10 lg:right-16 lg:h-16 xl:right-20"
                style={{ animationDelay: "700ms" }}
            />
            <div
                className="pointer-events-none absolute right-6 top-20 z-10 h-px w-12 origin-right bg-[#c8b28b]/30 animate-draw-h-right md:right-10 lg:right-16 lg:w-16 xl:right-20"
                style={{ animationDelay: "750ms" }}
            />
            {/* Bottom-left */}
            <div
                className="pointer-events-none absolute bottom-24 left-6 z-10 h-12 w-px bg-[#c8b28b]/30 animate-draw-v-bottom md:bottom-28 md:left-10 lg:bottom-20 lg:left-16 lg:h-16 xl:left-20"
                style={{ animationDelay: "800ms" }}
            />
            <div
                className="pointer-events-none absolute bottom-24 left-6 z-10 h-px w-12 bg-[#c8b28b]/30 animate-draw-h md:bottom-28 md:left-10 lg:bottom-20 lg:left-16 lg:w-16 xl:left-20"
                style={{ animationDelay: "850ms" }}
            />
            {/* Bottom-right */}
            <div
                className="pointer-events-none absolute bottom-24 right-6 z-10 h-12 w-px bg-[#c8b28b]/30 animate-draw-v-bottom md:bottom-28 md:right-10 lg:bottom-20 lg:right-16 lg:h-16 xl:right-20"
                style={{ animationDelay: "900ms" }}
            />
            <div
                className="pointer-events-none absolute bottom-24 right-6 z-10 h-px w-12 origin-right bg-[#c8b28b]/30 animate-draw-h-right md:bottom-28 md:right-10 lg:bottom-20 lg:right-16 lg:w-16 xl:right-20"
                style={{ animationDelay: "950ms" }}
            />

            {/* ── Horizontal ruled lines ─────────────────── */}
            {/* Upper pair */}
            <div
                className="pointer-events-none absolute left-6 right-1/2 top-[38%] z-10 h-px bg-[#232720]/8 animate-draw-h md:left-10 lg:left-16 lg:top-[35%] xl:left-20"
                style={{ animationDelay: "500ms" }}
            />
            <div
                className="pointer-events-none absolute left-1/2 right-6 top-[38%] z-10 h-px bg-[#e7e1d3]/8 animate-draw-h md:right-10 lg:right-16 lg:top-[35%] xl:right-20"
                style={{ animationDelay: "520ms" }}
            />
            {/* Lower pair */}
            <div
                className="pointer-events-none absolute bottom-[36%] left-6 right-1/2 z-10 h-px bg-[#232720]/8 animate-draw-h md:left-10 lg:bottom-[33%] lg:left-16 xl:left-20"
                style={{ animationDelay: "540ms" }}
            />
            <div
                className="pointer-events-none absolute bottom-[36%] left-1/2 right-6 z-10 h-px bg-[#e7e1d3]/8 animate-draw-h md:right-10 lg:bottom-[33%] lg:right-16 xl:right-20"
                style={{ animationDelay: "560ms" }}
            />

            {/* ── Extra vertical ruled lines (lg+ only) ──── */}
            <div
                className="pointer-events-none absolute left-[15%] top-[35%] z-10 hidden h-[32%] w-px bg-[#232720]/5 animate-draw-v lg:block"
                style={{ animationDelay: "580ms" }}
            />
            <div
                className="pointer-events-none absolute right-[15%] top-[35%] z-10 hidden h-[32%] w-px bg-[#e7e1d3]/5 animate-draw-v lg:block"
                style={{ animationDelay: "600ms" }}
            />

            {/* ── Vertical side annotations (lg+ only) ───── */}
            <div
                className="animate-fade-in pointer-events-none absolute left-1 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap text-[0.42rem] uppercase tracking-[0.35em] text-[#232720]/20 xl:block xl:left-2 xl:text-[0.46rem]"
                style={{ animationDelay: "1000ms" }}
            >
                Portfolio / 2025
            </div>
            <div
                className="animate-fade-in pointer-events-none absolute right-1 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 whitespace-nowrap text-[0.42rem] uppercase tracking-[0.35em] text-[#e7e1d3]/15 xl:block xl:right-2 xl:text-[0.46rem]"
                style={{ animationDelay: "1050ms" }}
            >
                Frasier Sundra / Software Engineer
            </div>

            {/* ── Center cross-mark at the divider (lg+ only) ── */}
            <div
                className="animate-fade-in pointer-events-none absolute left-1/2 top-[26%] z-10 hidden -translate-x-1/2 lg:block"
                style={{ animationDelay: "700ms" }}
            >
                <div className="h-3 w-px bg-[#c8b28b]/30" />
                <div className="mt-[-7px] ml-[-5px] h-px w-3 bg-[#c8b28b]/30" />
            </div>
            <div
                className="animate-fade-in pointer-events-none absolute bottom-[24%] left-1/2 z-10 hidden -translate-x-1/2 lg:block"
                style={{ animationDelay: "750ms" }}
            >
                <div className="h-3 w-px bg-[#c8b28b]/30" />
                <div className="mt-[-7px] ml-[-5px] h-px w-3 bg-[#c8b28b]/30" />
            </div>

            {/* ── Main content ────────────────────────────── */}
            <div className="relative z-10 flex h-full w-full flex-col justify-between px-8 pt-24 pb-8 md:px-14 md:pt-28 md:pb-10 lg:px-24 lg:pt-32 lg:pb-14 xl:px-32">
                {/* ── Top: Role label bar ────────────────── */}
                <div className="grid grid-cols-2 items-start gap-4">
                    <div
                        className="animate-fade-in space-y-1.5"
                        style={{ animationDelay: "180ms" }}
                    >
                        <p className="text-[0.5rem] uppercase tracking-[0.25em] text-[#232720]/45 md:text-[0.54rem] lg:text-[0.58rem]">
                            Software Engineer
                        </p>
                        <div className="h-px w-16 bg-[#232720]/15 lg:w-20" />
                        <p className="hidden text-[0.44rem] uppercase tracking-[0.25em] text-[#232720]/25 lg:block lg:text-[0.48rem]">
                            Frontend / Backend / Systems
                        </p>
                    </div>
                    <div
                        className="animate-fade-in space-y-1.5 text-right"
                        style={{ animationDelay: "220ms" }}
                    >
                        <p className="text-[0.5rem] uppercase tracking-[0.25em] text-[#e7e1d3]/40 md:text-[0.54rem] lg:text-[0.58rem]">
                            Perth, Western Australia
                        </p>
                        <div className="ml-auto h-px w-16 bg-[#e7e1d3]/15 lg:w-20" />
                        <p className="hidden text-[0.44rem] uppercase tracking-[0.25em] text-[#e7e1d3]/20 lg:block lg:text-[0.48rem]">
                            Available for Opportunities
                        </p>
                    </div>
                </div>

                {/* ── Center: Name block ─────────────────── */}
                <div className="grid grid-cols-2 items-center">
                    {/* Left side */}
                    <div className="space-y-5 pr-4 text-left md:space-y-7 md:pr-8 lg:space-y-8 lg:pr-12">
                        <h1 className="text-[clamp(3rem,9vw,8rem)] font-semibold uppercase leading-[0.85] tracking-[0.06em] lg:text-[clamp(4rem,8vw,9rem)]">
                            <StaggeredName
                                text="Frasier"
                                baseDelay={260}
                                className="text-[#232720]"
                            />
                        </h1>
                        <div
                            className="animate-fade-in space-y-2 lg:space-y-2.5"
                            style={{ animationDelay: "600ms" }}
                        >
                            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#232720]/70 md:text-[0.72rem] lg:text-[0.78rem]">
                                Visual thinker.
                            </p>
                            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#232720]/55 md:text-[0.72rem] lg:text-[0.78rem]">
                                Frontend engineer.
                            </p>
                            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#232720]/40 md:text-[0.72rem] lg:text-[0.78rem]">
                                Building with intent.
                            </p>
                        </div>
                        {/* Inline marker -- lg+ only */}
                        <div
                            className="animate-fade-in hidden items-center gap-3 lg:flex"
                            style={{ animationDelay: "750ms" }}
                        >
                            <div className="h-px w-8 bg-[#c8b28b]/30" />
                            <p className="text-[0.46rem] uppercase tracking-[0.3em] text-[#232720]/30">
                                Est. 2024
                            </p>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="space-y-5 pl-4 text-right md:space-y-7 md:pl-8 lg:space-y-8 lg:pl-12">
                        {/* Inline marker -- lg+ only */}
                        <div
                            className="animate-fade-in hidden items-center justify-end gap-3 lg:flex"
                            style={{ animationDelay: "780ms" }}
                        >
                            <p className="text-[0.46rem] uppercase tracking-[0.3em] text-[#e7e1d3]/25">
                                Perth, WA
                            </p>
                            <div className="h-px w-8 bg-[#c8b28b]/30" />
                        </div>
                        <div
                            className="animate-fade-in space-y-2 lg:space-y-2.5"
                            style={{ animationDelay: "650ms" }}
                        >
                            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#e7e1d3]/60 md:text-[0.72rem] lg:text-[0.78rem]">
                                Systems minded.
                            </p>
                            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#e7e1d3]/45 md:text-[0.72rem] lg:text-[0.78rem]">
                                Backend and logic focused.
                            </p>
                            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#e7e1d3]/32 md:text-[0.72rem] lg:text-[0.78rem]">
                                Solving hard problems.
                            </p>
                        </div>
                        <h1 className="text-[clamp(3rem,9vw,8rem)] font-semibold uppercase leading-[0.85] tracking-[0.06em] lg:text-[clamp(4rem,8vw,9rem)]">
                            <StaggeredName
                                text="Sundra"
                                baseDelay={310}
                                className="text-[#e7e1d3]"
                            />
                        </h1>
                    </div>
                </div>

                {/* ── Bottom: Stats bar + scroll anchor ──── */}
                <div className="space-y-5 lg:space-y-6">
                    {/* Stats strip */}
                    <div className="grid grid-cols-2 gap-0">
                        {/* Left stats */}
                        <div className="flex items-center gap-4 border-t border-[#232720]/12 pt-4 md:gap-6 lg:gap-8 lg:pt-5">
                            {LEFT_STATS.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`animate-fade-in ${i === 2 ? "hidden lg:block" : ""}`}
                                    style={{
                                        animationDelay: `${800 + i * 80}ms`,
                                    }}
                                >
                                    <p className="text-[0.44rem] uppercase tracking-[0.25em] text-[#232720]/40 md:text-[0.48rem] lg:text-[0.5rem]">
                                        {stat.label}
                                    </p>
                                    <p className="mt-0.5 text-[0.58rem] uppercase tracking-[0.18em] text-[#232720]/75 md:text-[0.64rem] lg:text-[0.68rem]">
                                        {stat.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Right stats */}
                        <div className="flex items-center justify-end gap-4 border-t border-[#e7e1d3]/12 pt-4 md:gap-6 lg:gap-8 lg:pt-5">
                            {RIGHT_STATS.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`animate-fade-in text-right ${i === 2 ? "hidden lg:block" : ""}`}
                                    style={{
                                        animationDelay: `${960 + i * 80}ms`,
                                    }}
                                >
                                    <p className="text-[0.44rem] uppercase tracking-[0.25em] text-[#e7e1d3]/35 md:text-[0.48rem] lg:text-[0.5rem]">
                                        {stat.label}
                                    </p>
                                    <p className="mt-0.5 text-[0.58rem] uppercase tracking-[0.18em] text-[#e7e1d3]/65 md:text-[0.64rem] lg:text-[0.68rem]">
                                        {stat.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom horizontal rule */}
                    <div
                        className="pointer-events-none h-px w-full bg-[#c8b28b]/50 animate-draw-h-center"
                        style={{ animationDelay: "1000ms" }}
                    />

                    {/* Scroll anchor */}
                    <div className="flex justify-center">
                        <a
                            href="#projects"
                            className="animate-fade-in text-[0.56rem] uppercase tracking-[0.22em] text-[#c8b28b]/80 transition-opacity hover:opacity-60 lg:text-[0.6rem]"
                            style={{ animationDelay: "1100ms" }}
                        >
                            Selected work ↓
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
