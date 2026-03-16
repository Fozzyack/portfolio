const tools = [
    { id: "13", name: "Golang" },
    { id: "01", name: "Next.js" },
    { id: "02", name: "TypeScript" },
    { id: "03", name: "Tailwind CSS" },
    { id: "04", name: "Node.js" },
    { id: "05", name: "npm" },
    { id: "06", name: "Bun" },
    { id: "07", name: "SQL" },
    { id: "08", name: "PostgreSQL" },
    { id: "09", name: "Vercel" },
    { id: "10", name: "Google Cloud" },
    { id: "14", name: "C++" },
    { id: "15", name: "C" },
    { id: "11", name: "C#" },
    { id: "12", name: "ASP.NET Core" },
] as const;

export function ToolsSection() {
    return (
        <section id="tools" className="relative px-8 pb-24 md:px-14 md:pb-28">
            <div className="mx-auto max-w-6xl border border-[#232720]/20 bg-[#ede8dc] p-6 md:p-8">
                <div className="flex flex-col gap-3 border-b border-[#232720]/15 pb-5 md:flex-row md:items-end md:justify-between">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#232720]/60">
                        Tools / Tech
                    </p>
                    <h3 className="text-2xl uppercase tracking-[0.06em] text-[#232720] md:text-3xl">
                        Current Stack
                    </h3>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool) => (
                        <article
                            key={tool.id}
                            className="flex items-center gap-3 border border-[#232720]/15 bg-[#f1eee6] px-4 py-3"
                        >
                            <span className="flex h-7 w-7 items-center justify-center border border-[#232720]/20 text-[0.5rem] uppercase tracking-[0.14em] text-[#232720]/55">
                                icon
                            </span>
                            <div>
                                <p className="text-[0.52rem] uppercase tracking-[0.2em] text-[#232720]/52">
                                    {tool.id}
                                </p>
                                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[#232720]/82">
                                    {tool.name}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
