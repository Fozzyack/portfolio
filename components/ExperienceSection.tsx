"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const experience = [
    {
        period: "2024 — Now",
        role: "Software Engineer",
        company: "Independent",
        location: "Perth, WA",
        description:
            "Designing and building useful digital experiences while growing through real projects, thoughtful systems, and continuous practice.",
        skills: "React · TypeScript · Next.js",
    },
    {
        period: "2023 — 2024",
        role: "Developer in progress",
        company: "Personal projects",
        location: "Remote",
        description:
            "Turning ideas into working products, from first sketches and data models through to polished, accessible interfaces.",
        skills: "JavaScript · CSS · Git",
    },
    {
        period: "Ongoing",
        role: "Always learning",
        company: "Open source & community",
        location: "Everywhere",
        description:
            "Exploring new tools, sharing what I learn, and looking for better ways to make software clear, friendly, and reliable.",
        skills: "Curiosity · Collaboration · Craft",
    },
];

export default function ExperienceSection() {
    const root = useRef<HTMLHtmlElement>(null);
    useGSAP(
        () => {
            const header = SplitText.create(".header", { type: "words" });
            const experienceCard = gsap.utils.toArray(".experience-card");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 80%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                },
            });
            tl.from(header.words, {
                opacity: 0,
                y: 30,
                stagger: 0.08,
            });

            tl.from(
                experienceCard,
                {
                    opacity: 0,
                    x: -30,
                    stagger: 0.5,
                },
                ">",
            );
        },
        { scope: root },
    );
    return (
        <section
            className="border-t border-white/10 bg-[#0d0f11] px-6 py-28 text-zinc-100 sm:px-10 sm:py-36 lg:px-16"
            id="experience"
            aria-labelledby="experience-title"
            ref={root}
        >
            <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                <div>
                    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                        <span
                            className="h-px w-8 bg-cyan-300/70"
                            aria-hidden="true"
                        />
                        02 / Experience
                    </p>
                    <p className="header mt-8 max-w-xs text-sm leading-6 text-zinc-500">
                        The places, practices, and projects shaping how I build.
                    </p>
                </div>

                <div>
                    <h2
                        className="header max-w-3xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.08em] text-white"
                        id="experience-title"
                    >
                        A work in progress.
                    </h2>

                    <div className="mt-16 border-t border-white/15">
                        {experience.map((item, index) => (
                            <article
                                className="experience-card grid gap-8 border-b border-white/15 py-8 sm:grid-cols-[8rem_1fr] sm:gap-10 sm:py-10"
                                key={item.company}
                            >
                                <div className="flex justify-between gap-4 sm:block">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                                        {item.period}
                                    </p>
                                    <span className="font-mono text-[10px] text-cyan-200/70 sm:mt-5 sm:block">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
                                    <div>
                                        <h3 className="text-2xl font-medium tracking-[-0.05em] text-white sm:text-3xl">
                                            {item.role}
                                        </h3>
                                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-zinc-400">
                                            <span>{item.company}</span>
                                            <span className="text-zinc-600">
                                                /
                                            </span>
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm leading-6 text-zinc-400">
                                            {item.description}
                                        </p>
                                        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-200/70">
                                            {item.skills}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
