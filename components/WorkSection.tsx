"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const projects = [
    {
        number: "01",
        name: "Orbit",
        type: "Product · Web app",
        description: "A calmer way to plan, track, and share ambitious work.",
        className: "bg-[#d9f99d] text-[#16210d]",
    },
    {
        number: "02",
        name: "Field Notes",
        type: "Editorial · Identity",
        description: "A digital garden for collecting ideas in public.",
        className: "bg-[#d6e7ff] text-[#10233c]",
    },
    {
        number: "03",
        name: "Common Ground",
        type: "Community · Mobile",
        description: "Helping local people find more reasons to meet nearby.",
        className: "bg-[#f3d4bf] text-[#351b15]",
    },
];

function ProjectVisual({ index }: { index: number }) {
    if (index === 0) {
        return (
            <div className="flex h-full flex-col justify-between bg-[#17220f] p-5 text-[#d9f99d] sm:p-8">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
                    <span>Orbit / Dashboard</span>
                    <span>09:41</span>
                </div>
                <div>
                    <p className="max-w-[11rem] text-3xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-5xl">
                        Make room for good work.
                    </p>
                    <div className="mt-7 flex items-end gap-2">
                        <div className="h-20 w-1/3 rounded-t-full bg-[#d9f99d]" />
                        <div className="h-12 w-1/3 rounded-t-full bg-[#90b661]" />
                        <div className="h-28 w-1/3 rounded-t-full bg-[#d9f99d]" />
                    </div>
                </div>
            </div>
        );
    }

    if (index === 1) {
        return (
            <div className="relative h-full overflow-hidden bg-[#eaf2ff] p-5 sm:p-8">
                <div className="absolute -right-12 top-10 h-40 w-40 rounded-full border-[20px] border-[#75a6e8] sm:h-64 sm:w-64" />
                <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[#b6d1f5] sm:h-64 sm:w-64" />
                <div className="relative flex h-full flex-col justify-between text-[#10233c]">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
                        <span>Vol. 04</span>
                        <span>Read / Think / Make</span>
                    </div>
                    <div>
                        <p className="font-serif text-5xl italic leading-none tracking-[-0.08em] sm:text-7xl">
                            Field
                            <br />
                            Notes
                        </p>
                        <div className="mt-6 h-px w-full bg-[#10233c]/30" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative h-full overflow-hidden bg-[#edc5aa] p-5 sm:p-8">
            <div className="absolute -right-16 top-12 h-48 w-48 rounded-full bg-[#c45d48] sm:h-72 sm:w-72" />
            <div className="absolute bottom-0 left-1/2 h-3/5 w-px bg-[#351b15]/35" />
            <div className="relative flex h-full flex-col justify-between text-[#351b15]">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]">
                    <span>Common Ground</span>
                    <span>Perth / WA</span>
                </div>
                <div className="flex items-end justify-between">
                    <p className="max-w-[10rem] text-3xl font-medium leading-[0.9] tracking-[-0.07em] sm:text-5xl">
                        Meet where you are.
                    </p>
                    <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-[#351b15] text-xl">
                        ↗
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function WorkSection() {
    const root = useRef<HTMLElement>(null);
    const track = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray(".card");
            const header = SplitText.create(".header", { type: "words" });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    pin: true,
                    scrub: 1,
                    start: "center center",
                    end: "bottom center",
                    snap: 1 / (cards.length - 1),
                },
            });

            tl.to(cards, {
                xPercent: -100 * (cards.length - 1),
                ease: "none",
            });

            gsap.from(header.words, {
                opacity: 0,
                y: 30,
                stagger: 0.04,
                scrollTrigger: {
                    trigger: root.current,
                    start: "top center",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: root },
    );

    return (
        <section
            className="flex min-h-screen flex-col justify-center overflow-hidden border-t border-white/10 bg-[#0a0b0d] px-6 py-20 text-zinc-100 sm:px-10 sm:py-24 lg:px-16"
            id="work"
            aria-labelledby="work-title"
            ref={root}
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
                    <div>
                        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                            <span
                                className="h-px w-8 bg-cyan-300/70"
                                aria-hidden="true"
                            />
                            03 / Selected work
                        </p>
                        <h2
                            className="header mt-8 max-w-3xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.08em] text-white"
                            id="work-title"
                        >
                            Things I&apos;ve built.
                        </h2>
                    </div>
                    <p className="header max-w-xs text-sm leading-6 text-zinc-500 sm:pb-2">
                        A small selection of experiments, products, and
                        interfaces made with curiosity and care.
                    </p>
                </div>

                <div className="mt-16 flex w-max gap-6" ref={track}>
                    {projects.map((project, index) => (
                        <article
                            className="card group w-[calc(100vw-3rem)] max-w-[58rem] shrink-0 overflow-hidden rounded-[1.5rem] sm:w-[70vw] lg:w-[58vw]"
                            key={project.name}
                        >
                            <div
                                className={`relative h-[25rem] overflow-hidden ${project.className} sm:h-[32rem]`}
                            >
                                <ProjectVisual index={index} />
                                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 font-mono text-xs backdrop-blur-sm sm:right-8 sm:top-8">
                                    {project.number}
                                </span>
                            </div>
                            <div className="flex flex-col gap-5 border-b border-white/15 py-5 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-[-0.05em] text-white">
                                        {project.name}
                                    </h3>
                                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-200/70">
                                        {project.type}
                                    </p>
                                </div>
                                <div className="flex items-end justify-between gap-6 sm:max-w-sm">
                                    <p className="text-sm leading-6 text-zinc-500">
                                        {project.description}
                                    </p>
                                    <a
                                        className="shrink-0 text-sm text-zinc-300 transition-colors hover:text-cyan-200"
                                        href="#"
                                        aria-label={`View ${project.name} project`}
                                    >
                                        View ↗
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
