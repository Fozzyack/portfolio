import type { ReactNode } from "react";

type ToolItem = {
    name: string;
    svg: ReactNode;
};

type ToolGroup = {
    id: string;
    title: string;
    direction: "left" | "right";
    tools: ToolItem[];
};

const toolGroups: ToolGroup[] = [
    {
        id: "01",
        title: "Languages",
        direction: "left",
        tools: [
            {
                name: "Golang",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/golang.png"
                        alt="golang"
                    />
                ),
            },
            {
                name: "TypeScript",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/typescript.png"
                        alt="typescript"
                    />
                ),
            },
            {
                name: "SQL",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/sql.png"
                        alt="sql"
                    />
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
                    <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/nolan/64/c-sharp-logo.png"
                        alt="c-sharp-logo"
                    />
                ),
            },
            {
                name: "Python",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/python--v1.png"
                        alt="python--v1"
                    />
                ),
            },
            {
                name: "JavaScript",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/javascript--v1.png"
                        alt="javascript--v1"
                    />
                ),
            },
            {
                name: "Bash",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/bash.png"
                        alt="bash"
                    />
                ),
            },
        ] satisfies ToolItem[],
    },
    {
        id: "02",
        title: "Frameworks",
        direction: "right",
        tools: [
            {
                name: "Next.js",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/nextjs.png"
                        alt="nextjs"
                    />
                ),
            },
            {
                name: "React",
                svg: (
                    <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
                        alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"
                    />
                ),
            },
            {
                name: "Tailwind CSS",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/tailwind_css.png"
                        alt="tailwind_css"
                    />
                ),
            },
            {
                name: "ASP.NET Core",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/net-framework.png"
                        alt="net-framework"
                    />
                ),
            },
            {
                name: "Node.js",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/nodejs.png"
                        alt="nodejs"
                    />
                ),
            },
            {
                name: "Express",
                svg: (
                    <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios/50/express-js.png"
                        alt="express-js"
                    />
                ),
            },
            {
                name: "Django",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/django.png"
                        alt="django"
                    />
                ),
            },
        ] satisfies ToolItem[],
    },
    {
        id: "03",
        title: "Data & Cloud",
        direction: "left",
        tools: [
            {
                name: "PostgreSQL",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/postgreesql.png"
                        alt="postgreesql"
                    />
                ),
            },
            { name: "Supabase", svg: null },
            {
                name: "Redis",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/redis--v2.png"
                        alt="redis--v2"
                    />
                ),
            },
            {
                name: "Vercel",
                svg: (
                    <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/vercel.png"
                        alt="vercel"
                    />
                ),
            },
            {
                name: "Google Cloud",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/google-cloud.png"
                        alt="google-cloud"
                    />
                ),
            },
            {
                name: "Docker",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/docker.png"
                        alt="docker"
                    />
                ),
            },
            { name: "CI/CD", svg: null },
        ] satisfies ToolItem[],
    },
    {
        id: "04",
        title: "Tooling",
        direction: "right",
        tools: [
            {
                name: "npm",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/npm.png"
                        alt="npm"
                    />
                ),
            },
            { name: "Bun", svg: null },
            {
                name: "Linux",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/linux--v1.png"
                        alt="linux--v1"
                    />
                ),
            },
            {
                name: "Git",
                svg: (
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/git.png"
                        alt="git"
                    />
                ),
            },
            {
                name: "GitHub",
                svg: (
                    <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/material-rounded/24/github.png"
                        alt="github"
                    />
                ),
            },
            {
                name: "Neovim",
                svg: (
                    <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-vim-a-highly-configurable-text-editor-for-efficiently-creating-and-changing-any-kind-of-text-logo-color-tal-revivo.png"
                        alt="external-vim-a-highly-configurable-text-editor-for-efficiently-creating-and-changing-any-kind-of-text-logo-color-tal-revivo"
                    />
                ),
            },
            { name: "Yaak", svg: null },
        ] satisfies ToolItem[],
    },
] as const;

export function ToolsSection() {
    return (
        <section
            id="tools"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#ddd5c4_0%,#d5ccba_100%)] px-8 pb-24 pt-4 md:px-14 md:pb-28"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.35)_0%,transparent_40%)]" />

            <div className="relative mx-auto max-w-6xl border border-[#232720]/20 bg-[#e8e1d2] p-6 md:p-8">
                <div className="flex flex-col gap-3 border-b border-[#232720]/15 pb-5 md:flex-row md:items-end md:justify-between">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#232720]/60">
                        Tools / Tech
                    </p>
                    <h3 className="text-2xl uppercase tracking-[0.06em] text-[#232720] md:text-3xl">
                        Current Stack
                    </h3>
                </div>

                <div className="mt-6 space-y-4">
                    {toolGroups.map((group) => (
                        <section
                            key={group.id}
                            className="border border-[#232720]/15 bg-[#f1eee6] p-4"
                        >
                            <div className="flex items-center gap-3 border-b border-[#232720]/12 pb-3">
                                <p className="text-[0.52rem] uppercase tracking-[0.2em] text-[#232720]/52">
                                    {group.id}
                                </p>
                                <h4 className="text-[0.68rem] uppercase tracking-[0.16em] text-[#232720]/84">
                                    {group.title}
                                </h4>
                            </div>

                            <div className="mt-3 overflow-hidden">
                                <div
                                    className={`flex w-max gap-2 ${
                                        group.direction === "left"
                                            ? "animate-marquee-left"
                                            : "animate-marquee-right"
                                    }`}
                                >
                                    {[
                                        ...group.tools,
                                        ...group.tools,
                                        ...group.tools,
                                    ].map((tool, index) => (
                                        <article
                                            key={`${group.id}-${tool.name}-${index}`}
                                            className="flex min-w-44 items-center gap-3 border border-[#232720]/10 bg-[#ede8dc] px-3 py-2"
                                        >
                                            {tool.svg ? (
                                                <span className="flex h-6 w-6 items-center justify-center text-[#232720]/70">
                                                    {tool.svg}
                                                </span>
                                            ) : null}
                                            <p className="text-[0.66rem] uppercase tracking-[0.16em] text-[#232720]/82">
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
