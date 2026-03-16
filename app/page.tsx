import { LandingNavbar } from "@/app/landing-navbar";
import { ProjectsSection } from "@/app/projects-section";

export default function Portfolio() {
    return (
        <main className="w-full bg-[#f1eee6] text-[#1f2321]">
            <LandingNavbar />

            <section className="group relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                    <div className="h-full w-full bg-[#e7e1d3]" />
                    <div className="h-full w-full bg-[#232720]" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,transparent_0%,transparent_34%,rgba(0,0,0,0.1)_100%)]" />
                <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-full w-px -translate-x-1/2 bg-[#c8b28b]/40 transition-all duration-500 group-hover:w-[3px] group-hover:bg-[#c8b28b]/90" />
                <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-full w-8 -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(200,178,139,0.2)_50%,transparent_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 grid h-full w-full grid-cols-2 items-center px-8 pt-16 pb-20 md:px-14">
                    <section className="space-y-4 p-8 text-start md:space-y-6">
                        <h1
                            className="animate-fade-up text-[clamp(3.2rem,10vw,8.5rem)] font-semibold uppercase tracking-[0.08em] leading-none text-[#232720]"
                            style={{ animationDelay: "260ms" }}
                        >
                            Frasier
                        </h1>
                        <p
                            className="animate-fade-in uppercase tracking-[0.18em] text-[#232720]/85"
                            style={{ animationDelay: "360ms" }}
                        >
                            Visual thinker.
                            <br /> Frontend engineer. <br />
                            Building with intent.
                        </p>
                    </section>

                    <section className="space-y-4 text-right">
                        <p
                            className="animate-fade-in uppercase tracking-[0.18em] text-[#e7e1d3]/88"
                            style={{ animationDelay: "420ms" }}
                        >
                            Systems minded.
                            <br /> Backend and logic focused.
                            <br /> Solving hard problems.
                        </p>
                        <h1
                            className="animate-fade-up text-[clamp(3.2rem,10vw,8.5rem)] font-semibold uppercase tracking-[0.08em] leading-none text-[#e7e1d3]"
                            style={{ animationDelay: "300ms" }}
                        >
                            Sundra
                        </h1>
                    </section>
                </div>

                <div
                    className="pointer-events-none absolute bottom-8 left-1/2 z-10 h-px w-[min(90vw,36rem)] -translate-x-1/2 bg-[#c8b28b]/80 animate-fade-in"
                    style={{ animationDelay: "480ms" }}
                />

                <a
                    href="#projects"
                    className="animate-fade-in absolute bottom-12 left-1/2 z-20 -translate-x-1/2 text-[0.62rem] uppercase tracking-[0.18em] text-[#c8b28b] transition-opacity hover:opacity-65"
                    style={{ animationDelay: "560ms" }}
                >
                    Selected work ↓
                </a>
            </section>

            <ProjectsSection />
        </main>
    );
}
