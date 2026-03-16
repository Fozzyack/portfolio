"use client";

import { useState } from "react";

type Project = {
    id: string;
    title: string;
    description: string;
    previewLabel: string;
    dark: boolean;
    tools: string[];
    problem: string;
    thoughtProcess: string;
};

const projects: Project[] = [
    {
        id: "01",
        title: "Quote Tool",
        description: "A tool for getting quotes for solar systems in Sydney, AUS.",
        previewLabel: "Quote Tool Preview",
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
        dark: true,
        tools: ["Next.js", "TypeScript", "SQL", "Bun", "Tailwind CSS"],
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
        tools: ["TypeScript", "Node.js", "PostgreSQL", "Google Cloud"],
        problem:
            "Room collisions and unclear ownership created meeting chaos during busy team hours.",
        thoughtProcess:
            "I focused on conflict prevention first: real-time availability, simple booking constraints, and transparent ownership so teams could trust the schedule at a glance.",
    },
    {
        id: "04",
        title: "MVC Boarding Tool",
        description: "A system to manage boarding animals at veterinary clinics.",
        previewLabel: "MVC Preview",
        dark: true,
        tools: ["C#", "ASP.NET Core", "SQL", "PostgreSQL"],
        problem:
            "Clinic staff were juggling paper notes and spreadsheets for boarding logistics, causing avoidable handoff errors.",
        thoughtProcess:
            "I mapped the full boarding lifecycle first, then built around dependable status transitions, medication notes, and clear audit history for safer operations.",
    },
];

export function ProjectsSection() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#ddd8ca_0%,#cfd2c6_100%)] px-8 py-24 md:px-14 md:py-28"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(255,255,255,0.34)_0%,transparent_44%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(35,39,32,0.03)_0%,transparent_45%,rgba(35,39,32,0.02)_100%)]" />

            <div className="relative mx-auto max-w-6xl">
                <div className="flex items-end justify-between gap-6 border-b border-[#232720]/20 pb-6">
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#232720]/70">
                        Selected Projects
                    </p>
                    <p className="max-w-md text-right text-[0.72rem] uppercase tracking-[0.14em] text-[#232720]/65">
                        Product thinking, strong interfaces, and dependable systems.
                    </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {projects.map((project) => (
                        <button
                            key={project.id}
                            type="button"
                            onClick={() => setActiveProject(project)}
                            className={
                                project.dark
                                    ? "group cursor-pointer border border-[#c8b28b]/40 bg-[#232720] p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8b28b]/70 hover:bg-[#262b23]"
                                    : "group cursor-pointer border border-[#232720]/20 bg-[#e9e4d8] p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#232720]/45 hover:bg-[#e5e0d3]"
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
                            <div
                                className={
                                    project.dark
                                        ? "mt-4 flex h-40 items-center justify-center border border-[#e7e1d3]/15 bg-[#1d211b]"
                                        : "mt-4 flex h-40 items-center justify-center border border-[#232720]/15 bg-[#f1eee6]"
                                }
                            >
                                <span
                                    className={
                                        project.dark
                                            ? "text-[0.58rem] uppercase tracking-[0.2em] text-[#e7e1d3]/55"
                                            : "text-[0.58rem] uppercase tracking-[0.2em] text-[#232720]/55"
                                    }
                                >
                                    {project.previewLabel}
                                </span>
                            </div>
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
                                        ? "mt-5 text-[0.58rem] uppercase tracking-[0.2em] text-[#e7e1d3]/70"
                                        : "mt-5 text-[0.58rem] uppercase tracking-[0.2em] text-[#232720]/62"
                                }
                            >
                                View details →
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            <div
                className={`fixed inset-0 z-40 transition-opacity duration-300 ${
                    activeProject ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
            >
                <button
                    type="button"
                    aria-label="Close project details"
                    onClick={() => setActiveProject(null)}
                    className="absolute inset-0 bg-[#11130f]/45"
                />

                <aside
                    className={`absolute right-0 top-0 h-screen w-full max-w-xl border-l border-[#232720]/20 bg-[#f1eee6] p-8 transition-transform duration-300 ${
                        activeProject ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex items-start justify-between border-b border-[#232720]/15 pb-5">
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
                            onClick={() => setActiveProject(null)}
                            className="border border-[#232720]/25 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-[#232720]/78 transition-colors hover:bg-[#e7e1d3]"
                        >
                            Close
                        </button>
                    </div>

                    <div className="mt-6 space-y-6">
                        <section>
                            <p className="text-[0.56rem] uppercase tracking-[0.22em] text-[#232720]/60">
                                Tools / Tech
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {activeProject?.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="border border-[#232720]/20 bg-[#ede8dc] px-3 py-2 text-[0.62rem] uppercase tracking-[0.16em] text-[#232720]/82"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <p className="text-[0.56rem] uppercase tracking-[0.22em] text-[#232720]/60">
                                Problem
                            </p>
                            <p className="mt-3 text-[0.72rem] uppercase tracking-[0.14em] text-[#232720]/80">
                                {activeProject?.problem}
                            </p>
                        </section>

                        <section>
                            <p className="text-[0.56rem] uppercase tracking-[0.22em] text-[#232720]/60">
                                Thought Process
                            </p>
                            <p className="mt-3 text-[0.72rem] uppercase tracking-[0.14em] text-[#232720]/80">
                                {activeProject?.thoughtProcess}
                            </p>
                        </section>
                    </div>
                </aside>
            </div>
        </section>
    );
}
