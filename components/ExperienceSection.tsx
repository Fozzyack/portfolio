"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const experience = [
    {
        period: "Aug 2025 — Present",
        role: "Software Engineer",
        company: "Equity Solar",
        location: "Remote (Sydney)",
        description:
            "Sole developer of a Virtual Power Plant that enables remote monitoring and control of residential battery systems.",
        skills: "React · TypeScript · Next.js · Golang · PostgreSQL",
    },
    {
        period: "Ongoing",
        role: "Freelance Software Engineer",
        company: "Independent",
        location: "Remote",
        description:
            "Building focused software solutions for businesses, from Python automation scripts and customer-facing websites to lightweight internal tools.",
        skills: "Next.js · Golang · Python · PostgreSQL",
    },
    {
        period: "Sep 2025 — Feb 2026",
        role: "Frontend UI Library Creator",
        company: "Hello Able",
        location: "Perth, WA",
        description:
            "Created a reusable frontend UI library for Hello Able, an L&D platform provider, helping bring consistency and speed to product development.",
        skills: "C# · .NET Framework",
    },
    {
        period: "Seasonal",
        role: "Volunteer Developer",
        company: "Coders for Causes",
        location: "Perth, WA",
        description:
            "Working alongside university students to deliver software for real clients through seasonal winter and summer programs.",
        skills: "Client delivery · Collaboration · Volunteering",
    },
];

export default function ExperienceSection() {
    const root = useRef<HTMLElement>(null);
    useGSAP(
        () => {
            const header = SplitText.create(".header", {
                type: "words",
                mask: "words",
                wordsClass: "header",
            });
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
                yPercent: 200,
                stagger: 0.08,
                duration: 1.5,
                ease: "power3.out",
            });

            tl.from(
                experienceCard,
                {
                    opacity: 0,
                    x: -30,
                    stagger: 0.25,
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
                        Building from the ground up.
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
