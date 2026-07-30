"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const details = [
    ["Based in", "Perth, WA"],
    ["Role", "Software Engineer"],
    ["Stage", "Early career"],
];

export default function AboutSection() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const heading = SplitText.create(".heading", { type: "words" });

            gsap.from(heading.words, {
                opacity: 0,
                y: 30,
                stagger: 0.2,
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
            className="border-t border-white/10 bg-[#0d0f11] px-6 py-28 text-zinc-100 sm:px-10 sm:py-36 lg:px-16"
            id="about"
            aria-labelledby="about-title"
            ref={root}
        >
            <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                <div>
                    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                        <span
                            className="h-px w-8 bg-cyan-300/70"
                            aria-hidden="true"
                        />
                        01 / About
                    </p>
                </div>

                <div>
                    <h2
                        className="heading max-w-4xl text-[clamp(2.75rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.07em] text-white"
                        id="about-title"
                    >
                        Learning by building thoughtful software.
                    </h2>
                    <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                        I&apos;m Frasier, a software engineer based in Perth,
                        WA. As I begin my career, I&apos;m focused on growing
                        through the process of making useful, well-crafted
                        digital experiences.
                    </p>

                    <dl className="mt-16 grid max-w-2xl gap-6 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-8">
                        {details.map(([label, value]) => (
                            <div key={label}>
                                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                                    {label}
                                </dt>
                                <dd className="mt-2 text-sm text-zinc-200">
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
