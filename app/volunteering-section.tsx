type VolunteeringItem = {
    id: string;
    role: string;
    organization: string;
    period: string;
    focus: string;
    impact: string;
};

const volunteeringItems: VolunteeringItem[] = [
    {
        id: "01",
        role: "Volunteer Tech Lead",
        organization: "Coders for Causes",
        period: "Nov 2025 - Present",
        focus: "Architecture and mentoring",
        impact:
            "Co-led planning for a Django + Next.js booking platform and supported junior developers through weekly technical pairing.",
    },
    {
        id: "02",
        role: "Web Project Contributor",
        organization: "Happiness Co.",
        period: "Jun 2025 - Aug 2025",
        focus: "Campaign website design and delivery",
        impact:
            "Helped build a fundraising web presence for mental health initiatives, contributing to a clear and trust-focused donation journey.",
    },
];

export function VolunteeringSection() {
    return (
        <section
            id="volunteering"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#d7cebc_0%,#c8cdbf_100%)] px-8 py-24 md:px-14 md:py-28"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_14%,rgba(255,255,255,0.34)_0%,transparent_42%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(35,39,32,0.03)_0%,transparent_42%,rgba(35,39,32,0.02)_100%)]" />

            <div className="relative mx-auto max-w-6xl">
                <div className="flex flex-col gap-3 border-b border-[#232720]/16 pb-6 md:flex-row md:items-end md:justify-between">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#232720]/60">
                        Volunteering
                    </p>
                    <h3 className="text-2xl uppercase tracking-[0.06em] text-[#232720] md:text-3xl">
                        Community Work
                    </h3>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {volunteeringItems.map((item) => (
                        <article
                            key={item.id}
                            className="border border-[#232720]/16 bg-[#f1eee6] p-5 transition-colors hover:bg-[#ebe5d8]"
                        >
                            <p className="text-[0.52rem] uppercase tracking-[0.2em] text-[#232720]/54">
                                {item.id}
                            </p>
                            <h4 className="mt-2 text-[0.84rem] uppercase tracking-[0.16em] text-[#232720]/90">
                                {item.role}
                            </h4>
                            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-[#232720]/64">
                                {item.organization}
                            </p>
                            <p className="mt-2 border-b border-[#232720]/10 pb-3 text-[0.56rem] uppercase tracking-[0.18em] text-[#232720]/56">
                                {item.period} / {item.focus}
                            </p>
                            <p className="mt-3 text-[0.68rem] uppercase tracking-[0.14em] text-[#232720]/80">
                                {item.impact}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
