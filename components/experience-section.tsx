import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Hello Able",
    location: "Perth WA and Remote",
    period: "2025 - Present",
    description:
      "Moving and automating the work of offshoring teams, recreating tools internal, reducing offshore costs.",
    achievements: [
      "Reduced the need for offshore teams by 40% through optimization",
      "Moved Multiple tools inhouse increasing efficiency by 20%, reducing processing times and costs",
      "Building tools to increase marketing team efficiency by 50%",
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    title: "Software Engineering Intern",
    company: "Equity Solar",
    location: "Remote",
    period: "2025 - Present",
    description:
      "Spearheading the development of a Virtual Power Plant to optimize distributed energy resources and grid stability. Leading technical architecture and implementation of energy management systems.",
    achievements: [
      "Leading Virtual Power Plant development to aggregate and optimize distributed energy resources",
      "Architecting scalable energy management platform for grid integration",
      "Developing real-time monitoring and control systems for renewable energy assets",
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    title: "Freelance Software Engineer",
    company: "Freelance",
    location: "Perth WA and Remote",
    period: "2024 - 2025",
    description:
      "Developed and maintained full-stack applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Built a webapplication that tracks 100+ users through their studying journey",
      "Integrated payment processing with 99.9% uptime",
      "Developed mobile-responsive UI components",
    ],
    technologies: ["NextJS", "Golang", "PostgreSQL", "Dotnet", "C#", "Stripe", "C++", "Docker"],
  },
  {
    title: "University Graduate",
    company: "University of Western Australia",
    location: "Perth WA",
    period: "2018 - 2024",
    description:
      "Developed a foundation in Computer Science, Software Engineering and Cyber Security",
    achievements: [
      "Developed a dashboard for a student scholarship program reducing the need for offshore teams by 80%",
      "Improved website performance scores by average of 10%",
      "Collaborated with design team to implement pixel-perfect UIs",
    ],
    technologies: ["HTML/CSS", "Python", "Typescript", "C", "C++", "JavaScript", "Flask", "MySQL", "PostgreSQL"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development, highlighting key achievements and growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20"></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="border-border/50 card-hover transition-all duration-300 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-xl font-bold">{experience.title}</CardTitle>
                          <CardDescription className="text-primary font-semibold text-base">
                            {experience.company}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-foreground/80 mb-4 leading-relaxed">{experience.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
