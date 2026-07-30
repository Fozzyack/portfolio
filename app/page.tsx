import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";

export default function Home() {
    return (
        <>
            <LoadingScreen />
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <WorkSection />
            <ContactSection />
        </>
    );
}
