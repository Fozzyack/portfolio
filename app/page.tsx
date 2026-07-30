import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <WorkSection />
            <div className="min-h-screen"></div>
        </>
    );
}
