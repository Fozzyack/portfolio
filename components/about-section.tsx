import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate computer science professional with a strong foundation in software development and
                  problem-solving. My journey began with curiosity about how technology works and has evolved into a
                  career focused on creating innovative solutions that make a real impact.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and staying current with emerging technologies. My
                  approach combines technical expertise with creative problem-solving to deliver solutions that are both
                  functional and user-friendly.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Interests</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🚀</span>
                    <span className="text-muted-foreground">Space Technology & Innovation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🤖</span>
                    <span className="text-muted-foreground">Artificial Intelligence & Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🎮</span>
                    <span className="text-muted-foreground">Game Development & Interactive Media</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🌱</span>
                    <span className="text-muted-foreground">Sustainable Technology Solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Goals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently focused on expanding my expertise in cloud architecture and contributing to open-source
                  projects. I'm always looking for opportunities to collaborate on meaningful projects that push the
                  boundaries of what's possible with technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
