import type { ReactNode } from "react";

type ToolItem = {
    name: string;
    svg: ReactNode;
};

const toolGroups = [
    {
        id: "01",
        title: "Languages",
        tools: [
            { name: "Golang", svg: null },
            { name: "TypeScript", svg: null },
            { name: "SQL", svg: null },
            { name: "C++", svg: null },
            { name: "C", svg: null },
            { name: "C#", svg: null },
        ] satisfies ToolItem[],
    },
    {
        id: "02",
        title: "Frameworks",
        tools: [
            { name: "Next.js", svg: null },
            { name: "Tailwind CSS", svg: null },
            { name: "ASP.NET Core", svg: null },
            { name: "Node.js", svg: null },
        ] satisfies ToolItem[],
    },
    {
        id: "03",
        title: "Data & Cloud",
        tools: [
            { name: "PostgreSQL", svg: null },
            { name: "Vercel", svg: null },
            { name: "Google Cloud", svg: null },
        ] satisfies ToolItem[],
    },
    {
        id: "04",
        title: "Tooling",
        tools: [
            { name: "npm", svg: null },
            { name: "Bun", svg: null },
            { name: "Docker", svg: null },
            { name: "Linux", svg: null },
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

                <div className="mt-6 grid gap-6 md:grid-cols-2">
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

                            <div className="mt-3 grid gap-2">
                                {group.tools.map((tool) => (
                                    <article
                                        key={tool.name}
                                        className="flex items-center gap-3 border border-[#232720]/10 bg-[#ede8dc] px-3 py-2"
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center border border-[#232720]/20 text-[0.44rem] uppercase tracking-[0.14em] text-[#232720]/55">
                                            {tool.svg ?? "icon"}
                                        </span>
                                        <p className="text-[0.66rem] uppercase tracking-[0.16em] text-[#232720]/82">
                                            {tool.name}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
