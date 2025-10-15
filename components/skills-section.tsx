"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillIcons = {
  // Programming Languages
  "JavaScript/TypeScript": "⚡",
  Python: "🐍",
  Java: "☕",
  "C++": "⚙️",
  Go: "🔷",

  // Frontend Technologies
  "React/Next.js": "⚛️",
  "Vue.js": "💚",
  "HTML/CSS": "🎨",
  "Tailwind CSS": "🎭",
  "Three.js": "🎲",

  // Backend & Database
  "Node.js/Express": "🟢",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  Redis: "🔴",
  GraphQL: "🔗",

  // Tools & Technologies
  "Git/GitHub": "🐙",
  Docker: "🐳",
  "AWS/Cloud": "☁️",
  "CI/CD": "🔄",
  Kubernetes: "⚓",
}

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C++", level: 80 },
      { name: "Go", level: 75 },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TailwindCSS", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js/Express", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS/Cloud", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "Kubernetes", level: 70 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-border/50 card-hover transition-all duration-300 hover:border-primary/50"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{skillIcons[skill.name as keyof typeof skillIcons]}</span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
