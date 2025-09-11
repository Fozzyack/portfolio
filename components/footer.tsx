import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Brand */}
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-4">Frasier Sundra</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Full-Stack Developer passionate about creating innovative solutions and building exceptional user
                                experiences.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <div className="space-y-2">
                                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                                    About
                                </a>
                                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                                    Projects
                                </a>
                                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                                    Skills
                                </a>
                                <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                                    Experience
                                </a>
                                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </div>
                        </div>

                        {/* Connect */}
                        <div>
                            <h4 className="font-semibold mb-4">Connect</h4>
                            <div className="flex space-x-4 mb-4">
                                <a
                                    href="https://github.com/Fozzyack"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://linkedin.com/fsund"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href="mailto:fsundra@gmail.com"
                                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <Mail className="h-5 w-5" />
                                </a>
                            </div>
                            <p className="text-sm text-muted-foreground">fsundra@gmail.com</p>
                        </div>
                    </div>

                    <div className="border-t border-border mt-8 pt-8 text-center">
                        <p className="text-muted-foreground flex items-center justify-center gap-1">
                            Made with <Heart className="h-4 w-4 text-red-500" /> by Frasier Sundra © 2024
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
