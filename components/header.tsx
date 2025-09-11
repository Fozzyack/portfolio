"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
                }`}
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-primary">Frasier Sundra</div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection("skills")}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection("experience")}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Experience
                        </button>
                        <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
                            Contact
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-border">
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-left text-foreground hover:text-primary transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="text-left text-foreground hover:text-primary transition-colors"
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection("skills")}
                                className="text-left text-foreground hover:text-primary transition-colors"
                            >
                                Skills
                            </button>
                            <button
                                onClick={() => scrollToSection("experience")}
                                className="text-left text-foreground hover:text-primary transition-colors"
                            >
                                Experience
                            </button>
                            <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary hover:bg-primary/90">
                                Contact
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
