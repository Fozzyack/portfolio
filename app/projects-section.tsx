const projects = [
    {
        id: "01",
        title: "Quote Tool",
        description: "A tool for getting quotes for solar systems in Sydney, AUS.",
        previewLabel: "Quote Tool Preview",
        dark: false,
    },
    {
        id: "02",
        title: "Kaneyo",
        description:
            "A minimalistic finance tracking app built for clarity and control.",
        previewLabel: "Kaneyo Preview",
        dark: true,
    },
    {
        id: "03",
        title: "Bloom Booking System",
        description: "An internal room booking system for Bloom meeting rooms.",
        previewLabel: "Bloom Preview",
        dark: false,
    },
    {
        id: "04",
        title: "MVC Boarding Tool",
        description: "A system to manage boarding animals at veterinary clinics.",
        previewLabel: "MVC Preview",
        dark: true,
    },
] as const;

export function ProjectsSection() {
    return (
        <section id="projects" className="relative px-8 py-24 md:px-14 md:py-28">
            <div className="mx-auto max-w-6xl">
                <div className="flex items-end justify-between gap-6 border-b border-[#232720]/20 pb-6">
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#232720]/70">
                        Selected Projects
                    </p>
                    <p className="max-w-md text-right text-[0.72rem] uppercase tracking-[0.14em] text-[#232720]/65">
                        Product thinking, strong interfaces, and dependable systems.
                    </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className={
                                project.dark
                                    ? "border border-[#c8b28b]/40 bg-[#232720] p-6"
                                    : "border border-[#232720]/20 bg-[#e9e4d8] p-6"
                            }
                        >
                            <p
                                className={
                                    project.dark
                                        ? "text-[0.58rem] uppercase tracking-[0.22em] text-[#e7e1d3]/55"
                                        : "text-[0.58rem] uppercase tracking-[0.22em] text-[#232720]/60"
                                }
                            >
                                {project.id}
                            </p>
                            <h3
                                className={
                                    project.dark
                                        ? "mt-3 text-3xl uppercase tracking-[0.06em] text-[#e7e1d3]"
                                        : "mt-3 text-3xl uppercase tracking-[0.06em] text-[#232720]"
                                }
                            >
                                {project.title}
                            </h3>
                            <div
                                className={
                                    project.dark
                                        ? "mt-4 flex h-40 items-center justify-center border border-[#e7e1d3]/15 bg-[#1d211b]"
                                        : "mt-4 flex h-40 items-center justify-center border border-[#232720]/15 bg-[#f1eee6]"
                                }
                            >
                                <span
                                    className={
                                        project.dark
                                            ? "text-[0.58rem] uppercase tracking-[0.2em] text-[#e7e1d3]/55"
                                            : "text-[0.58rem] uppercase tracking-[0.2em] text-[#232720]/55"
                                    }
                                >
                                    {project.previewLabel}
                                </span>
                            </div>
                            <p
                                className={
                                    project.dark
                                        ? "mt-4 text-[0.72rem] uppercase tracking-[0.14em] text-[#e7e1d3]/75"
                                        : "mt-4 text-[0.72rem] uppercase tracking-[0.14em] text-[#232720]/70"
                                }
                            >
                                {project.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
