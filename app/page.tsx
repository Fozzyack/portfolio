import { ContactSection } from "@/app/contact-section";
import { ExperienceSection } from "@/app/experience-section";
import { HeroSection } from "@/app/hero-section";
import { LandingNavbar } from "@/app/landing-navbar";
import { ProjectsSection } from "@/app/projects-section";
import { SectionDivider } from "@/app/section-divider";
import { ToolsSection } from "@/app/tools-section";
import { VolunteeringSection } from "@/app/volunteering-section";

export default function Portfolio() {
    return (
        <main className="w-full bg-[#f1eee6] text-[#1f2321]">
            <LandingNavbar />
            <HeroSection />
            <ProjectsSection />
            <SectionDivider />
            <ToolsSection />
            <SectionDivider />
            <ExperienceSection />
            <SectionDivider />
            <VolunteeringSection />
            <ContactSection />
        </main>
    );
}
