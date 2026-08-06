"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const projects = [
    {
        number: "01",
        name: "VPP Studio",
        type: "Web app · Software tool",
        description:
            "A remote control centre for monitoring and managing residential solar batteries at Equity Solar.",
        className: "bg-[#17191c] text-zinc-100",
        github: "",
        website: "https://vppstudio.equitysolar.com.au",
        stack: "",
    },
    {
        number: "02",
        name: "Solar Quote Tool",
        type: "Product · Web app",
        description:
            "A guided quoting tool for helping customers price the right solar system for their home.",
        className: "bg-[#d6e7ff] text-[#10233c]",
        github: "",
        website: "https://solar.frasier.dev",
        stack: "",
    },
    {
        number: "03",
        name: "Hera's Arena",
        type: "Tournament · Tracking tool",
        description:
            "A lightweight tool for tracking Age of Empires II tournament participants throughout the competition.",
        className: "bg-[#f3d4bf] text-[#351b15]",
        github: "",
        website: "https://heras-arena.vercel.app/",
        stack: "",
    },
    {
        number: "04",
        name: "Payroll Aggregator",
        type: "CLI · Python",
        description:
            "A command-line tool for quickly aggregating payroll data into an ATO-ready document.",
        className: "bg-[#dfe4e8] text-[#172027]",
        github: "",
        website: "",
        stack: "",
    },
    {
        number: "05",
        name: "ACICIS Program Dashboard",
        type: "Dashboard · Operations",
        description:
            "An operations dashboard for managing overseas student programs to Indonesia and monitoring participant progress.",
        className: "bg-[#e8e3d8] text-[#20231f]",
        github: "",
        website: "",
        stack: "Python · Flask",
    },
];

function ProjectVisual({ index }: { index: number }) {
    if (index === 0) {
        return (
            <div className="relative flex h-full flex-col overflow-hidden border border-white/4 bg-[#090a0b] p-5 text-zinc-100 sm:p-8">
                <iframe
                    className="absolute inset-0 z-10 h-full w-full border-0 bg-white"
                    src="https://vppstudio.equitysolar.com.au"
                    title="VPP Studio live preview"
                    loading="lazy"
                />{" "}
                <div
                    className="flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[10px] uppercase
            tracking-[0.16em] text-zinc-500"
                >
                    <div className="flex items-center gap-3">
                        <span
                            className="flex items-center gap-1.5"
                            aria-hidden="true"
                        >
                            <span className="h-2 w-2 rounded-full bg-red-400" />
                            <span className="h-2 w-2 rounded-full bg-yellow-300" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        <span>VPP Studio / Overview</span>
                    </div>
                    <span className="text-emerald-300">System live</span>
                </div>
                <div className="mt-6 grid flex-1 gap-3 sm:grid-cols-2">
                    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111315] p-4 sm:p-5">
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                                Battery SOC
                            </p>
                            <p className="mt-3 text-4xl font-medium tracking-[-0.08em] sm:text-6xl">
                                84%
                            </p>
                        </div>
                        <div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                                <div className="h-full w-[84%] rounded-full bg-cyan-200" />
                            </div>
                            <p className="mt-3 text-xs text-zinc-500">
                                Average across fleet
                            </p>
                        </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-[#111315] p-4 sm:p-5">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                                    SOC trend
                                </p>
                                <p className="mt-2 text-2xl font-medium tracking-[-0.06em] sm:text-4xl">
                                    84{" "}
                                    <span className="text-sm text-zinc-500">
                                        %
                                    </span>
                                </p>
                            </div>
                            <span className="rounded-full bg-cyan-300/10 px-2 py-1 font-mono text-[10px] text-cyan-200">
                                Current
                            </span>
                        </div>
                        <svg
                            className="mt-8 h-20 w-full"
                            viewBox="0 0 420 60"
                            fill="none"
                            preserveAspectRatio="none"
                            aria-label="Current battery state of charge graph"
                            role="img"
                        >
                            <path
                                d="M0 48H420"
                                stroke="white"
                                strokeOpacity=".1"
                            />
                            <path
                                d="M0 35 C35 30, 50 38, 84 27 S132 31, 166 22 S214 25, 248 16 S300 22, 332 15 S382 19, 420 9"
                                stroke="#a5f3fc"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111315] p-4 sm:p-5">
                        <div className="flex items-start justify-between">
                            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                                Current running schedule
                            </p>
                            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]" />
                        </div>
                        <div>
                            <p className="mt-5 text-3xl font-medium tracking-[-0.08em] sm:text-5xl">
                                Import Focus
                            </p>
                            <p className="mt-3 text-xs text-zinc-500">
                                Active schedule
                            </p>
                        </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-[#111315] p-4 sm:p-5">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                                    Recent change
                                </p>
                                <p className="mt-2 text-2xl font-medium tracking-[-0.06em] sm:text-4xl">
                                    +4.8{" "}
                                    <span className="text-sm text-zinc-500">
                                        kW
                                    </span>
                                </p>
                            </div>
                            <span className="rounded-full bg-emerald-300/10 px-2 py-1 font-mono text-[10px] text-emerald-300">
                                Last 24 hrs
                            </span>
                        </div>
                        <svg
                            className="mt-8 h-28 w-full"
                            viewBox="0 0 420 60"
                            fill="none"
                            preserveAspectRatio="none"
                            aria-label="Recent change in kilowatts graph"
                            role="img"
                        >
                            <path
                                d="M0 48H420"
                                stroke="white"
                                strokeOpacity=".1"
                            />
                            <path
                                d="M0 30H420"
                                stroke="white"
                                strokeOpacity=".1"
                            />
                            <path
                                d="M0 42 C35 38, 48 46, 82 34 S132 38, 164 26 S212 30, 246 18 S292 27, 325 20 S380 23, 420 8"
                                stroke="#c084fc"
                                strokeWidth="3"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                        <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-600">
                            <span>06:00</span>
                            <span>12:00</span>
                            <span>18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (index === 1) {
        return (
            <div className="relative h-full overflow-hidden bg-[#eaf2ff] p-5 sm:p-8">
                <iframe
                    className="absolute inset-0 z-10 h-full w-full border-0 bg-white"
                    src="https://equity-solar-quote-tool-nine.vercel.app/"
                    title="Solar quote tool live preview"
                    loading="lazy"
                />
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

    if (index === 3) {
        return (
            <div className="h-full overflow-hidden bg-[#101214] p-5 font-mono text-zinc-100 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    <span>payroll-aggregator</span>
                    <span>Python CLI</span>
                </div>
                <div className="mt-8 text-xs leading-7 sm:text-sm sm:leading-8">
                    <p className="text-zinc-500">
                        <span className="text-emerald-300">frasier@dev</span>:
                        <span className="text-cyan-200">~/payroll</span>$
                        <span className="ml-2 text-zinc-200">
                            python aggregate.py --financial-year 2025
                        </span>
                    </p>
                    <div className="mt-6 space-y-1 text-zinc-400">
                        <p>
                            <span className="text-emerald-300">OK</span> Loading
                            payroll records...
                        </p>
                        <p>
                            <span className="text-emerald-300">OK</span>{" "}
                            Aggregating 28 employee entries...
                        </p>
                        <p>
                            <span className="text-emerald-300">OK</span>{" "}
                            Validating Super, totals and deductions...
                        </p>
                    </div>
                    <div className="mt-8 rounded-lg border border-cyan-200/20 bg-cyan-200/5 p-4 text-cyan-100 sm:p-5">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-cyan-200/60">
                            Output generated
                        </p>
                        <p className="mt-3 text-lg tracking-[-0.04em] sm:text-2xl">
                            ato_payroll_2025.pdf
                        </p>
                        <p className="mt-2 text-xs text-cyan-200/60">
                            Ready for review · 1.8 MB
                        </p>
                    </div>
                    <p className="mt-6 text-zinc-500">
                        <span className="text-emerald-300">frasier@dev</span>:
                        <span className="text-cyan-200">~/payroll</span>$
                        <span className="ml-2 inline-block h-4 w-2 bg-cyan-200 align-middle" />
                    </p>
                </div>
            </div>
        );
    }

    if (index === 4) {
        return (
            <div className="flex h-full items-center justify-center bg-[#f1f0ec] p-5 text-[#20231f] sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#20231f]/50">
                    No preview available
                </p>
            </div>
        );
    }

    return (
        <div className="relative h-full overflow-hidden bg-[#edc5aa] p-5 sm:p-8">
            <iframe
                className="absolute inset-0 z-10 h-full w-full border-0 bg-white"
                src="https://heras-arena.vercel.app/"
                title="Hera's Arena live preview"
                loading="lazy"
            />
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
            const header = SplitText.create(".header", {
                type: "words",
                mask: "words",
                wordsClass: "header",
            });

            gsap.from(header.words, {
                yPercent: 200,
                stagger: 0.1,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: root.current,
                    start: "30% 80%",
                    toggleActions: "play none none reverse",
                },
            });
            gsap.from(cards, {
                opacity: 0,
                y: 30,
                stagger: 0.8,
                scrollTrigger: {
                    trigger: root.current,
                    start: "40% 70%",
                    toggleActions: "play none none reverse",
                },
            });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    start: "center center",
                    end: "+=3500",
                    snap: 1 / (cards.length - 1),
                },
            });

            tl.to(cards, {
                xPercent: -100 * (cards.length - 1),
                ease: "none",
            });
        },
        { scope: root },
    );

    return (
        <section
            className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0a0b0d] px-6 py-20 text-zinc-100 sm:px-10 sm:py-24 lg:px-16"
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
                        interfaces.
                    </p>
                </div>

                <div className="mt-16 flex w-max gap-6" ref={track}>
                    {projects.map((project, index) => (
                        <article
                            className="card group flex h-[36rem] w-[calc(100vw-3rem)] max-w-[58rem] shrink-0 flex-col overflow-hidden rounded-[1.5rem] sm:h-[39rem] sm:w-[70vw] lg:w-[58vw]"
                            key={project.name}
                        >
                            <div
                                className={`relative h-[25rem] shrink-0 overflow-hidden ${project.className} sm:h-[32rem]`}
                            >
                                <ProjectVisual index={index} />
                                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 font-mono text-xs backdrop-blur-sm sm:right-8 sm:top-8">
                                    {project.number}
                                </span>
                            </div>
                            <div className="flex min-h-0 flex-1 flex-col gap-5 border-b border-white/15 py-5 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-[-0.05em] text-white">
                                        {project.name}
                                    </h3>
                                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-200/70">
                                        {project.type}
                                    </p>
                                    {project.stack && (
                                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                                            {project.stack}
                                        </p>
                                    )}
                                </div>
                                <div className="flex items-end justify-between gap-6 sm:max-w-sm">
                                    <p className="text-sm leading-6 text-zinc-500">
                                        {project.description}
                                    </p>
                                    {(project.github || project.website) && (
                                        <div className="flex shrink-0 gap-4">
                                            {project.website && (
                                                <a
                                                    className="text-sm text-zinc-300 transition-colors hover:text-cyan-200"
                                                    href={project.website}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Website ↗
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    className="text-sm text-zinc-300 transition-colors hover:text-cyan-200"
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    GitHub ↗
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
