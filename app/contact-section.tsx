const contactLinks = [
    {
        id: "01",
        label: "Email",
        value: "fsundra@gmail.com",
        href: "mailto:fsundra@gmail.com",
    },
    {
        id: "02",
        label: "LinkedIn",
        value: "linkedin.com/in/fsundra",
        href: "https://www.linkedin.com/in/fsundra",
    },
    {
        id: "03",
        label: "GitHub",
        value: "github.com/Fozzyack",
        href: "https://github.com/Fozzyack",
    },
    {
        id: "04",
        label: "Resume",
        value: "Download PDF",
        href: "/frasier-sundra.pdf",
    },
] as const;

export function ContactSection() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#ddd5c4_0%,#d5ccba_100%)] px-8 pb-24 pt-4 md:px-14 md:pb-28"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.35)_0%,transparent_40%)]" />

            <div className="relative mx-auto max-w-6xl border-t border-[#232720]/18 pt-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#232720]/60">
                            Contact
                        </p>
                        <h3 className="mt-2 text-2xl uppercase tracking-[0.06em] text-[#232720] md:text-3xl">
                            Let&apos;s Build Something Solid
                        </h3>
                    </div>

                    <p className="max-w-md text-[0.68rem] uppercase tracking-[0.14em] text-[#232720]/68 md:text-right">
                        Open to software engineering opportunities across frontend,
                        backend, and full-stack product work.
                    </p>
                </div>

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                    {contactLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="group border border-[#232720]/15 bg-[#f1eee6] px-4 py-4 transition-colors hover:bg-[#e8e2d6]"
                            {...(link.label === "Resume"
                                ? { download: true }
                                : {
                                      target: "_blank",
                                      rel: "noreferrer",
                                  })}
                        >
                            <p className="text-[0.52rem] uppercase tracking-[0.2em] text-[#232720]/52">
                                {link.id} / {link.label}
                            </p>
                            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.16em] text-[#232720]/84">
                                {link.value}
                            </p>
                            <p className="mt-3 text-[0.56rem] uppercase tracking-[0.18em] text-[#232720]/58">
                                Open →
                            </p>
                        </a>
                    ))}
                </div>

                <div className="mt-8 border-t border-[#232720]/12 pt-4">
                    <p className="text-[0.56rem] uppercase tracking-[0.18em] text-[#232720]/58">
                        Perth, WA / Available for SWE roles and project work
                    </p>
                </div>
            </div>
        </section>
    );
}
