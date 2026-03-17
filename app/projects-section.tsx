"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";

import { ScrollReveal } from "@/app/scroll-reveal";

const toolIconSrcByName: Record<string, string> = {
    "Next.js": "https://img.icons8.com/color/48/nextjs.png",
    TypeScript: "https://img.icons8.com/color/48/typescript.png",
    "Node.js": "https://img.icons8.com/color/48/nodejs.png",
    PostgreSQL: "https://img.icons8.com/color/48/postgreesql.png",
    Vercel: "https://img.icons8.com/ios-filled/50/vercel.png",
    SQL: "https://img.icons8.com/fluency/48/sql.png",
    Bun: "https://img.icons8.com/fluency/48/bun.png",
    "Tailwind CSS": "https://img.icons8.com/color/48/tailwind_css.png",
    "C#": "https://img.icons8.com/nolan/64/c-sharp-logo.png",
    "ASP.NET Core": "https://img.icons8.com/color/48/net-framework.png",
    "Google Cloud": "https://img.icons8.com/color/48/google-cloud.png",
};

function getToolIcon(toolName: string): ReactNode | null {
    const src = toolIconSrcByName[toolName];

    if (!src) {
        return null;
    }

    return (
        <img
            src={src}
            alt={`${toolName} icon`}
            className="h-4 w-4 object-contain"
        />
    );
}

type Project = {
    id: string;
    title: string;
    description: string;
    previewLabel: string;
    imageSrc?: string;
    dark: boolean;
    tools: string[];
    problem: string;
    thoughtProcess: string;
};

const projects: Project[] = [
    {
        id: "01",
        title: "Quote Tool",
        description:
            "A tool for getting quotes for solar systems in Sydney, AUS.",
        previewLabel: "Quote Tool Preview",
        imageSrc: "/projects/quote-tool.png",
        dark: false,
        tools: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
        problem:
            "Sales teams were losing qualified solar leads because quoting was manual and response times were inconsistent.",
        thoughtProcess:
            "I designed the flow to capture just enough information for an accurate quote quickly, then validated location and system fit early so users stayed in a fast, guided path.",
    },
    {
        id: "02",
        title: "Kaneyo",
        description:
            "A minimalistic finance tracking app built for clarity and control.",
        previewLabel: "Kaneyo Preview",
        imageSrc: "/projects/kaneyo.png",
        dark: true,
        tools: ["golang", "SQL", "Bun", "Tailwind CSS"],
        problem:
            "Most finance tools felt cluttered, which made daily tracking hard to maintain over time.",
        thoughtProcess:
            "I prioritized single-purpose screens, lightweight interactions, and clear category logic so users could add and review transactions with minimal cognitive load.",
    },
    {
        id: "03",
        title: "Bloom Booking System",
        description: "An internal room booking system for Bloom meeting rooms.",
        previewLabel: "Bloom Preview",
        dark: false,
        tools: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "django",
            "Google Cloud",
        ],
        problem:
            "Room collisions and unclear ownership created meeting chaos during busy team hours.",
        thoughtProcess:
            "I focused on conflict prevention first: real-time availability, simple booking constraints, and transparent ownership so teams could trust the schedule at a glance.",
    },
    {
        id: "04",
        title: "MVC Boarding Tool",
        description:
            "A system to manage boarding animals at veterinary clinics.",
        previewLabel: "MVC Preview",
        imageSrc: "/projects/mvc.png",
        dark: true,
        tools: ["Next.js", "TypeScript", "SQL", "PostgreSQL"],
        problem:
            "Clinic staff were juggling paper notes and spreadsheets for boarding logistics, causing avoidable handoff errors.",
        thoughtProcess:
            "I mapped the full boarding lifecycle first, then built around dependable status transitions, medication notes, and clear audit history for safer operations.",
    },
];

export function ProjectsSection() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    const closeDrawer = useCallback(() => setActiveProject(null), []);

    useEffect(() => {
        if (!activeProject) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeDrawer();
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [activeProject, closeDrawer]);

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#ddd8ca_0%,#cfd2c6_100%)] px-8 py-24 md:px-14 md:py-28"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(255,255,255,0.34)_0%,transparent_44%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(35,39,32,0.03)_0%,transparent_45%,rgba(35,39,32,0.02)_100%)]" />

            <div className="relative mx-auto max-w-6xl">
                <ScrollReveal variant="in">
                    <div className="flex items-end justify-between gap-6 border-b border-[#232720]/20 pb-6">
                        <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#232720]/70">
                            Selected Projects
                        </p>
                        <p className="max-w-md text-right text-[0.72rem] uppercase tracking-[0.14em] text-[#232720]/65">
                            Product thinking, strong interfaces, and dependable
                            systems.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ScrollReveal
                            key={project.id}
                            variant="up"
                            delay={index * 100}
                        >
                            <button
                                type="button"
                                onClick={() => setActiveProject(project)}
                                className={
                                    project.dark
                                        ? "group w-full cursor-pointer border border-[#c8b28b]/40 bg-[#232720] p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8b28b]/70 hover:bg-[#262b23]"
                                        : "group w-full cursor-pointer border border-[#232720]/20 bg-[#e9e4d8] p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#232720]/45 hover:bg-[#e5e0d3]"
                                }
                            >
                                <p
                                    className={
                                        project.dark
                                            ? "text-[0.58rem] uppercase tracking-[0.22em] text-[#e7e1d3]/55"
                                            : "text-[0.58rem] uppercase tracking-[0.22em] text-[#232720]/60"
                                    }
                                >
                                    {project.id}
                                </p>
                                <h3
                                    className={
                                        project.dark
                                            ? "mt-3 text-3xl uppercase tracking-[0.06em] text-[#e7e1d3]"
                                            : "mt-3 text-3xl uppercase tracking-[0.06em] text-[#232720]"
                                    }
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className={
                                        project.dark
                                            ? "mt-4 text-[0.72rem] uppercase tracking-[0.14em] text-[#e7e1d3]/75"
                                            : "mt-4 text-[0.72rem] uppercase tracking-[0.14em] text-[#232720]/70"
                                    }
                                >
                                    {project.description}
                                </p>
                                <p
                                    className={
                                        project.dark
                                            ? "mt-5 text-[0.58rem] uppercase tracking-[0.2em] text-[#e7e1d3]/70 transition-colors duration-200 group-hover:text-[#c8b28b]"
                                            : "mt-5 text-[0.58rem] uppercase tracking-[0.2em] text-[#232720]/62 transition-colors duration-200 group-hover:text-[#232720]/90"
                                    }
                                >
                                    View details →
                                </p>
                            </button>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            <div
                className={`fixed inset-0 z-40 transition-opacity duration-300 ${
                    activeProject
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
            >
                <button
                    type="button"
                    aria-label="Close project details"
                    onClick={closeDrawer}
                    className="absolute inset-0 bg-[#11130f]/45"
                />

                <aside
                    className={`absolute right-0 top-0 flex h-screen w-full max-w-xl flex-col border-l border-[#232720]/20 bg-[#f1eee6] transition-transform duration-300 ${
                        activeProject ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex items-start justify-between border-b border-[#232720]/15 p-8 pb-5">
                        <div>
                            <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#232720]/60">
                                {activeProject?.id}
                            </p>
                            <h3 className="mt-2 text-3xl uppercase tracking-[0.06em] text-[#232720]">
                                {activeProject?.title}
                            </h3>
                        </div>
                        <button
                            type="button"
                            onClick={closeDrawer}
                            className="border border-[#232720]/25 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-[#232720]/78 transition-colors hover:bg-[#e7e1d3]"
                        >
                            Close
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-8 py-6">
                        <div className="space-y-6">
                            <section
                                className={`transition-all duration-500 ${activeProject ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                                style={{ transitionDelay: "100ms" }}
                            >
                                <p className="text-[0.56rem] uppercase tracking-[0.22em] text-[#232720]/60">
                                    Preview
                                </p>
                                <div className="mt-3 aspect-[16/9] w-full overflow-hidden border border-[#232720]/15 bg-[#ede8dc]">
                                    {activeProject?.imageSrc ? (
                                        <div className="relative h-full w-full">
                                            <Image
                                                src={activeProject.imageSrc}
                                                alt={`${activeProject.title} project preview`}
                                                fill
                                                className="object-cover"
                                                sizes="(min-width: 1024px) 40vw, 100vw"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex h-full items-center justify-center">
                                            <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[#232720]/55">
                                                {activeProject?.previewLabel ??
                                                    "Project Preview"}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </section>

                            <section
                                className={`transition-all duration-500 ${activeProject ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                                style={{ transitionDelay: "200ms" }}
                            >
                                <p className="text-[0.56rem] uppercase tracking-[0.22em] text-[#232720]/60">
                                    Tools / Tech
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {activeProject?.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="flex items-center gap-2 border border-[#232720]/20 bg-[#ede8dc] px-3 py-2 text-[0.62rem] uppercase tracking-[0.16em] text-[#232720]/82"
                                        >
                                            {getToolIcon(tool)}
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section
                                className={`transition-all duration-500 ${activeProject ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                                style={{ transitionDelay: "300ms" }}
                            >
                                <p className="text-[0.56rem] uppercase tracking-[0.22em] text-[#232720]/60">
                                    Problem
                                </p>
                                <p className="mt-3 text-[0.72rem] uppercase tracking-[0.14em] text-[#232720]/80">
                                    {activeProject?.problem}
                                </p>
                            </section>

                            <section
                                className={`transition-all duration-500 ${activeProject ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                                style={{ transitionDelay: "400ms" }}
                            >
                                <p className="text-[0.56rem] uppercase tracking-[0.22em] text-[#232720]/60">
                                    Thought Process
                                </p>
                                <p className="mt-3 text-[0.72rem] uppercase tracking-[0.14em] text-[#232720]/80">
                                    {activeProject?.thoughtProcess}
                                </p>
                            </section>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
