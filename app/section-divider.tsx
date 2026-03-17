"use client";

import { ScrollReveal } from "@/app/scroll-reveal";

export function SectionDivider() {
    return (
        <div className="relative bg-[linear-gradient(180deg,#d5d0c2_0%,#d2cdc0_100%)] px-8 py-1 md:px-14">
            <ScrollReveal variant="in" className="mx-auto max-w-6xl">
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-[#232720]/10" />
                    <div className="h-1.5 w-1.5 rotate-45 border border-[#c8b28b]/60 bg-transparent" />
                    <div className="h-px flex-1 bg-[#232720]/10" />
                </div>
            </ScrollReveal>
        </div>
    );
}
