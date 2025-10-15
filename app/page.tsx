import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { BookMeetingSection } from "@/components/book-meeting-section"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AnimatedSection animation="fade-in" delay={200}>
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={150}>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <ProjectsSection />
        </AnimatedSection>

        <AnimatedSection animation="slide-left" delay={200}>
          <SkillsSection />
        </AnimatedSection>

        <AnimatedSection animation="slide-right" delay={150}>
          <ExperienceSection />
        </AnimatedSection>

        <AnimatedSection animation="scale-up" delay={100}>
          <ContactSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={150}>
          <BookMeetingSection />
        </AnimatedSection>
      </main>

      <AnimatedSection animation="fade-up" delay={50}>
        <Footer />
      </AnimatedSection>
    </div>
  )
}
