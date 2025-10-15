"use client"

import type { LucideIcon } from "lucide-react"
import { Calendar, Clock, Sparkles, Video } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const bookingHighlights: Array<{ title: string; description: string; icon: LucideIcon }> = [
    {
        title: "Flexible Scheduling",
        description: "Pick a time that works across time zones and commitments.",
        icon: Calendar,
    },
    {
        title: "Clear Agenda",
        description: "We'll focus on your goals, challenges, and next steps.",
        icon: Clock,
    },
    {
        title: "Remote Ready",
        description: "Join via Google Meet, Zoom, or whichever tool you prefer.",
        icon: Video,
    },
]

export function BookMeetingSection() {
    const handleBookCall = () => {
        // Placeholder for booking functionality
        alert("Booking functionality coming soon! For now, please send me an email to schedule a call.")
    }

    return (
        <section id="book-call" className="relative py-24">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/10" aria-hidden />
            <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-primary/5 blur-[120px] opacity-40" aria-hidden />

            <div className="container mx-auto px-4">
                <Card className="relative overflow-hidden border-border/60 bg-background/80 backdrop-blur-xl card-hover">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
                    <CardContent className="relative p-8 md:p-12">
                        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">
                            <div>
                                <Badge variant="outline" className="mb-6 border-primary/40 text-primary">
                                    Book a call
                                </Badge>
                                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                                    Let's build something remarkable together
                                </h2>
                                <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
                                    Whether you're planning a new product, refining an existing experience, or exploring an idea,
                                    I'd love to collaborate. Our call will be focused, action-oriented, and tailored to your goals.
                                </p>

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {bookingHighlights.map(({ title, description, icon: Icon }) => (
                                        <div
                                            key={title}
                                            className="group rounded-2xl border border-border/60 bg-background/60 p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-primary/10"
                                        >
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6 rounded-3xl border border-border/50 bg-background/70 p-6 shadow-lg backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                                        <Sparkles className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">What to expect</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            We'll align on your vision, unpack the technical landscape, and chart a clear path forward.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-primary" />
                                        <span>Weekday availability with select weekend slots on request.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="h-5 w-5 text-primary" />
                                        <span>30-minute discovery calls or 60-minute deep dives.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Video className="h-5 w-5 text-primary" />
                                        <span>Google Meet, Zoom, or your preferred platform.</span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full bg-primary hover:bg-primary/90" onClick={handleBookCall}>
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Schedule a meeting
                                </Button>

                                <p className="text-xs text-muted-foreground">
                                    Need to coordinate a specific time? Email me at{' '}
                                    <a
                                        href="mailto:fsundra@gmail.com"
                                        className="font-medium text-primary transition-colors hover:text-primary/80"
                                    >
                                        fsundra@gmail.com
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
