import type { ReactNode } from "react";

type ToolItem = {
    name: string;
    svg: ReactNode;
};

type ToolGroup = {
    id: string;
    title: string;
    description: string;
    direction: "left" | "right";
    speedSeconds: number;
    tools: ToolItem[];
};

const toolGroups: ToolGroup[] = [
    {
        id: "01",
        title: "Languages",
        description: "Core languages for product, systems, and performance work.",
        direction: "left",
        speedSeconds: 34,
        tools: [
            {
                name: "Golang",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/golang.png" alt="golang" />
                ),
            },
            {
                name: "TypeScript",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript" />
                ),
            },
            {
                name: "SQL",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/sql.png" alt="sql" />
                ),
            },
            {
                name: "C++",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/c-plus-plus-logo.png"
                        alt="c-plus-plus-logo"
                    />
                ),
            },
            { name: "C", svg: null },
            {
                name: "C#",
                svg: (
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/c-sharp-logo.png" alt="c-sharp-logo" />
                ),
            },
            {
                name: "Python",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python" />
                ),
            },
            {
                name: "JavaScript",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript" />
                ),
            },
            {
                name: "Bash",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/bash.png" alt="bash" />
                ),
            },
        ],
    },
    {
        id: "02",
        title: "Frameworks",
        description: "Frontend and backend frameworks used to ship quickly and safely.",
        direction: "right",
        speedSeconds: 30,
        tools: [
            {
                name: "Next.js",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/nextjs.png" alt="nextjs" />
                ),
            },
            {
                name: "React",
                svg: (
                    <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
                        alt="react"
                    />
                ),
            },
            {
                name: "Tailwind CSS",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind" />
                ),
            },
            {
                name: "ASP.NET Core",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/net-framework.png" alt="aspnet" />
                ),
            },
            {
                name: "Node.js",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs" />
                ),
            },
            {
                name: "Express",
                svg: (
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/express-js.png" alt="express" />
                ),
            },
            {
                name: "Django",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/django.png" alt="django" />
                ),
            },
        ],
    },
    {
        id: "03",
        title: "Data & Cloud",
        description: "Databases, infrastructure, and deployment services used in production.",
        direction: "left",
        speedSeconds: 36,
        tools: [
            {
                name: "PostgreSQL",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/postgreesql.png" alt="postgresql" />
                ),
            },
            { name: "Supabase", svg: null },
            {
                name: "Redis",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/redis--v2.png" alt="redis" />
                ),
            },
            {
                name: "Vercel",
                svg: (
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/vercel.png" alt="vercel" />
                ),
            },
            {
                name: "Google Cloud",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/google-cloud.png" alt="google-cloud" />
                ),
            },
            {
                name: "Docker",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/docker.png" alt="docker" />
                ),
            },
            { name: "CI/CD", svg: null },
        ],
    },
    {
        id: "04",
        title: "Tooling",
        description: "Daily workflow stack for coding, review, testing, and delivery.",
        direction: "right",
        speedSeconds: 28,
        tools: [
            {
                name: "npm",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/npm.png" alt="npm" />
                ),
            },
            { name: "Bun", svg: null },
            {
                name: "Linux",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/linux--v1.png" alt="linux" />
                ),
            },
            {
                name: "Git",
                svg: (
                    <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git" />
                ),
            },
            {
                name: "GitHub",
                svg: (
                    <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/github.png" alt="github" />
                ),
            },
            {
                name: "Neovim",
                svg: (
                    <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-vim-a-highly-configurable-text-editor-for-efficiently-creating-and-changing-any-kind-of-text-logo-color-tal-revivo.png"
                        alt="neovim"
                    />
                ),
            },
            { name: "Yaak", svg: null },
        ],
    },
];

export function ToolsSection() {
    return (
        <section
            id="tools"
            className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ddd5c4_0%,#d5ccba_100%)] px-8 pb-24 pt-14 md:px-14 md:pb-28 md:pt-16"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.35)_0%,transparent_40%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(35,39,32,0.03)_0%,transparent_45%,rgba(35,39,32,0.02)_100%)]" />

            <div className="relative mx-auto max-w-6xl border border-[#232720]/20 bg-[#e8e1d2] p-6 md:p-8">
                <div className="border-b border-[#232720]/15 pb-6">
                    <div>
                        <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#232720]/60">
                            Tools / Tech
                        </p>
                        <h3 className="mt-2 text-2xl uppercase tracking-[0.06em] text-[#232720] md:text-3xl">
                            Current Stack
                        </h3>
                        <p className="mt-3 max-w-2xl text-[0.7rem] uppercase tracking-[0.14em] text-[#232720]/70">
                            A moving snapshot of the technologies I use most across frontend
                            interfaces, backend systems, cloud deployment, and developer
                            workflow.
                        </p>
                    </div>
                </div>

                <div className="mt-6 space-y-5">
                    {toolGroups.map((group) => (
                        <section key={group.id} className="border border-[#232720]/15 bg-[#f1eee6] p-4">
                            <div className="grid gap-2 border-b border-[#232720]/12 pb-3 md:grid-cols-[auto_auto_1fr] md:items-center md:gap-3">
                                <p className="text-[0.52rem] uppercase tracking-[0.2em] text-[#232720]/52">
                                    {group.id}
                                </p>
                                <h4 className="text-[0.72rem] uppercase tracking-[0.16em] text-[#232720]/84">
                                    {group.title}
                                </h4>
                                <p className="text-[0.58rem] uppercase tracking-[0.14em] text-[#232720]/60 md:text-right">
                                    {group.description}
                                </p>
                            </div>

                            <div className="relative mt-3 overflow-hidden border border-[#232720]/10 bg-[#e5dece] px-2 py-2">
                                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(90deg,#e5dece_0%,rgba(229,222,206,0)_100%)]" />
                                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(270deg,#e5dece_0%,rgba(229,222,206,0)_100%)]" />

                                <div
                                    className={`flex w-max gap-2 hover:[animation-play-state:paused] ${
                                        group.direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
                                    }`}
                                    style={{ animationDuration: `${group.speedSeconds}s` }}
                                >
                                    {[...group.tools, ...group.tools, ...group.tools].map((tool, index) => (
                                        <article
                                            key={`${group.id}-${tool.name}-${index}`}
                                            className="flex min-w-52 items-center gap-3 border border-[#232720]/12 bg-[#ede8dc] px-4 py-3 transition-colors hover:bg-[#f3eee4]"
                                        >
                                            {tool.svg ? (
                                                <span className="flex h-6 w-6 items-center justify-center text-[#232720]/70">
                                                    {tool.svg}
                                                </span>
                                            ) : null}
                                            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[#232720]/82">
                                                {tool.name}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
