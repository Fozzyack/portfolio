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

const techStack = [
    {
        label: "Frontend",
        technologies: [
            {
                name: "React",
                icon: "https://img.icons8.com/color/48/react-native.png",
            },
            {
                name: "TypeScript",
                icon: "https://img.icons8.com/color/48/typescript.png",
            },
            {
                name: "Next.js",
                icon: "https://img.icons8.com/color/48/nextjs.png",
            },
            {
                name: "Tailwind CSS",
                icon: "https://img.icons8.com/color/48/tailwind_css.png",
            },
        ],
    },
    {
        label: "Backend",
        technologies: [
            {
                name: "Go",
                icon: "https://img.icons8.com/color/48/golang.png",
            },
            {
                name: "Python",
                icon: "https://img.icons8.com/color/48/python.png",
            },
            {
                name: "C#",
                icon: "https://img.icons8.com/nolan/64/c-sharp-logo.png",
            },
            {
                name: ".NET",
                icon: "https://img.icons8.com/color/48/net-framework.png",
            },
        ],
    },
    {
        label: "Tools",
        technologies: [
            {
                name: "PostgreSQL",
                icon: "https://img.icons8.com/color/48/postgreesql.png",
            },
            {
                name: "Git",
                icon: "https://img.icons8.com/color/48/git.png",
            },
            {
                name: "Docker",
                icon: "https://img.icons8.com/color/48/docker.png",
            },
            {
                name: "Linux",
                icon: "https://img.icons8.com/color/48/linux.png",
            },
            {
                name: "Vim",
                icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-vim-a-highly-configurable-text-editor-for-efficiently-creating-and-changing-any-kind-of-text-logo-color-tal-revivo.png",
            },
        ],
    },
];

export default function AboutSection() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const heading = SplitText.create(".heading", { type: "words" });
            const iconBadges = gsap.utils.toArray(".icon-badge");

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
            gsap.from(iconBadges, {
                opacity: 0,
                y: 30,
                stagger: 0.08,
                scrollTrigger: {
                    trigger: root.current,
                    start: "30% 40%",
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

                    <div className="mt-16 max-w-2xl border-t border-white/10 pt-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                            Tools I work with
                        </p>
                        <dl className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
                            {techStack.map(({ label, technologies }) => (
                                <div key={label}>
                                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200/70">
                                        {label}
                                    </dt>
                                    <dd className="mt-3 flex flex-wrap gap-2">
                                        {technologies.map(({ name, icon }) => (
                                            <span
                                                className="icon-badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-300"
                                                key={name}
                                            >
                                                <img
                                                    alt=""
                                                    className="h-4 w-4 object-contain"
                                                    src={icon}
                                                />
                                                {name}
                                            </span>
                                        ))}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                            Icons from{" "}
                            <a
                                className="text-zinc-500 transition-colors hover:text-cyan-200"
                                href="https://icons8.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Icons8
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
