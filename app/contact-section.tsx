"use client";

import { ScrollReveal } from "@/app/scroll-reveal";

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
            className="relative overflow-hidden bg-[#232720] px-8 pb-16 pt-24 md:px-14 md:pb-20 md:pt-28"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(200,178,139,0.08)_0%,transparent_50%)]" />

            <div className="relative mx-auto max-w-6xl border-t border-[#e7e1d3]/15 pt-8">
                <ScrollReveal variant="in">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#e7e1d3]/50">
                                Contact
                            </p>
                            <h3 className="mt-2 text-2xl uppercase tracking-[0.06em] text-[#e7e1d3] md:text-3xl">
                                Let&apos;s Build Something Solid
                            </h3>
                        </div>

                        <p className="max-w-md text-[0.68rem] uppercase tracking-[0.14em] text-[#e7e1d3]/55 md:text-right">
                            Open to software engineering opportunities across
                            frontend, backend, and full-stack product work.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                    {contactLinks.map((link, index) => (
                        <ScrollReveal
                            key={link.id}
                            variant="up"
                            delay={index * 80}
                        >
                            <a
                                href={link.href}
                                className="group block border border-[#e7e1d3]/12 bg-[#2a2e27] px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8b28b]/40 hover:bg-[#313530]"
                                {...(link.label === "Resume"
                                    ? { download: true }
                                    : {
                                          target: "_blank",
                                          rel: "noreferrer",
                                      })}
                            >
                                <p className="text-[0.52rem] uppercase tracking-[0.2em] text-[#e7e1d3]/40">
                                    {link.id} / {link.label}
                                </p>
                                <p className="mt-2 text-[0.72rem] uppercase tracking-[0.16em] text-[#e7e1d3]/80 transition-colors duration-200 group-hover:text-[#c8b28b]">
                                    {link.value}
                                </p>
                                <p className="mt-3 text-[0.56rem] uppercase tracking-[0.18em] text-[#e7e1d3]/45 transition-colors duration-200 group-hover:text-[#e7e1d3]/70">
                                    Open →
                                </p>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal variant="in" delay={400}>
                    <div className="mt-10 flex items-center gap-4 border-t border-[#e7e1d3]/10 pt-5">
                        <div className="h-px flex-1 bg-[#c8b28b]/20" />
                        <p className="text-[0.56rem] uppercase tracking-[0.18em] text-[#e7e1d3]/45">
                            Perth, WA / Available for SWE roles and project work
                        </p>
                        <div className="h-px flex-1 bg-[#c8b28b]/20" />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
