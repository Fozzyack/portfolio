import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
    {
        title: "Password Manager",
        description:
            "A Password manager that locally stores passwords using GPG encyption",
        image: "/modern-ecommerce-interface.png",
        technologies: ["Go", "GPG", "AES", "TUI"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "AI Chat Application",
        description:
            "Real-time chat application with AI integration using OpenAI API. Built with Next.js, Socket.io, and MongoDB for seamless communication.",
        image: "/ai-chat-interface.png",
        technologies: ["Next.js", "OpenAI API", "Socket.io", "MongoDB", "TypeScript"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Task Management System",
        description:
            "Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
        image: "/task-management-kanban-dashboard.png",
        technologies: ["Vue.js", "Express.js", "MySQL", "WebSocket", "Docker"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "ASICIS Student Scholarship Dashboard",
        description:
            "Data visualization dashboard for managing scholarhsip programs with interactive charts, and data preprocessing tools.",
        image: "/machine-learning-dashboard.png",
        technologies: ["Python", "Flask", "TensorFlow", "D3.js", "Pandas"],
        demo: "https://demo.com",
    },
]

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work, demonstrating proficiency in various technologies and problem-solving
                        approaches.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="group card-hover transition-all duration-300 border-border/50 hover:border-primary/50"
                        >
                            <div className="relative overflow-hidden rounded-t-lg">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <CardHeader>
                                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                            </CardHeader>

                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="secondary" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    {project.github &&
                                        <Button size="sm" variant="outline" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </a>
                                        </Button>
                                    }
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
