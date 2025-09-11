import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { TypewriterText } from "./typewriter-text"

export function HeroSection() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/10"
        >
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <img
                            src="/placeholder-usvb5.png"
                            alt="Frasier Sundra - Computer Science Professional"
                            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary/20"
                        />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Frasier Sundra
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-4 h-8">
                        <TypewriterText
                            texts={["Full-Stack Developer", "University Graduate", "Software Engineer"]}
                            className="text-xl md:text-2xl"
                        />
                    </p>

                    <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Passionate about creating innovative solutions through clean code and modern technologies. Specializing in
                        web development, machine learning, and system architecture.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            <Mail className="mr-2 h-4 w-4" />
                            Get In Touch
                        </Button>
                        <Button size="lg" variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Button>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:john@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
