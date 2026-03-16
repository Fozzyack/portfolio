type ExperienceItem = {
    id: string;
    role: string;
    organization: string;
    location: string;
    dates: string;
    impact: string;
    stack: string;
};

const experiences: ExperienceItem[] = [
    {
        id: "01",
        role: "Software Engineering Intern",
        organization: "Equity Solar",
        location: "Perth, WA",
        dates: "Aug 2025 - Nov 2025",
        impact:
            "Developed secure internal tools for a solar brokerage, reducing reliance on outsourced workflows by 50%.",
        stack: "ReactJS, NextJS, AspNetCore, C#, TypeScript",
    },
    {
        id: "02",
        role: "Software Engineering Intern",
        organization: "ABLE",
        location: "Perth, WA",
        dates: "Sep 2025 - Present",
        impact:
            "Built backend integrations for scheduling and supported testing and deployment across modern Agile workflows.",
        stack: "Dotnet Framework, C#, HTML, CSS, REST APIs",
    },
    {
        id: "03",
        role: "Volunteer Tech Lead",
        organization: "Coders for Causes",
        location: "Perth, WA",
        dates: "Nov 2025 - Present",
        impact:
            "Helped define Django-Next.js architecture for Bloom Booking System and mentored junior developers through weekly pairing.",
        stack: "ReactJS, NextJS, Django, TypeScript, Python",
    },
    {
        id: "04",
        role: "Web Project Contributor",
        organization: "Happiness Co.",
        location: "Perth, WA",
        dates: "Jun 2025 - Aug 2025",
        impact:
            "Designed a charity website supporting a $100,000 mental health fundraising target, with $20,000 raised to date.",
        stack: "Frontend UI, content architecture, campaign landing pages",
    },
];

export function ExperienceSection() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#ddd8ca_0%,#cfd2c6_100%)] px-8 pb-24 pt-4 md:px-14 md:pb-28"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(255,255,255,0.34)_0%,transparent_44%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(35,39,32,0.03)_0%,transparent_45%,rgba(35,39,32,0.02)_100%)]" />

            <div className="relative mx-auto max-w-6xl p-6 md:p-8">
                <div className="flex flex-col gap-3 border-b border-[#232720]/15 pb-5 md:flex-row md:items-end md:justify-between">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#232720]/60">
                        Experience
                    </p>
                    <h3 className="text-2xl uppercase tracking-[0.06em] text-[#232720] md:text-3xl">
                        Timeline
                    </h3>
                </div>

                <div className="relative mt-8">
                    <div className="pointer-events-none absolute bottom-0 left-[1.05rem] top-0 w-px bg-[#232720]/18 md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-6">
                    {experiences.map((item, index) => {
                        const isSecondSide = index % 2 === 1;

                        return (
                        <article
                            key={item.id}
                            className="relative grid gap-3 pl-10 md:grid-cols-2 md:gap-10 md:pl-0"
                        >
                            <span className="absolute left-[1.05rem] top-3 h-2.5 w-2.5 -translate-x-1/2 border border-[#232720]/40 bg-[#c8b28b] md:left-1/2" />

                            <div
                                className={`md:row-start-1 ${
                                    isSecondSide
                                        ? "md:col-start-2 md:text-left"
                                        : "md:col-start-1 md:text-right"
                                }`}
                            >
                                <p className="text-[0.52rem] uppercase tracking-[0.2em] text-[#232720]/52">
                                    {item.id}
                                </p>
                                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.18em] text-[#232720]/62">
                                    {item.dates}
                                </p>
                                <p className="mt-2 text-[0.58rem] uppercase tracking-[0.16em] text-[#232720]/56">
                                    {item.location}
                                </p>
                            </div>

                            <div
                                className={`border border-[#232720]/15 bg-[#f1eee6] p-4 md:row-start-1 ${
                                    isSecondSide ? "md:col-start-1" : "md:col-start-2"
                                }`}
                            >
                                <p className="text-[0.74rem] uppercase tracking-[0.16em] text-[#232720]/84">
                                    {item.role}
                                </p>
                                <p className="mt-1 border-b border-[#232720]/10 pb-3 text-[0.66rem] uppercase tracking-[0.14em] text-[#232720]/66">
                                    {item.organization}
                                </p>
                                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.14em] text-[#232720]/78">
                                    {item.impact}
                                </p>
                                <p className="mt-3 text-[0.58rem] uppercase tracking-[0.16em] text-[#232720]/58">
                                    {item.stack}
                                </p>
                            </div>
                        </article>
                    );
                    })}
                    </div>
                </div>
            </div>
        </section>
    );
}
