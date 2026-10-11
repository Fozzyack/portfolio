"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

const RetroComputer = dynamic(() => import("@/components/RetroComputer"), {
    ssr: false,
});

const profile = {
    name: "Frasier Sundra",
    email: "fsundra@gmail.com",
    github: "https://github.com/Fozzyack",
    linkedin: "https://linkedin.com/in/fsundra",
};

export default function HeroSection() {
    const [sceneReady, setSceneReady] = useState(false);
    const handleReady = useCallback((ready: boolean) => {
        setSceneReady(ready);
    }, []);

    return (
        <section
            className="retro-hero relative isolate flex min-h-svh flex-col overflow-hidden bg-background px-4 text-foreground sm:px-10 lg:px-16"
            aria-labelledby="hero-title"
        >
            <div
                className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center pb-6 pt-28 sm:pt-32"
                id="top"
            >
                <div className="computer-scene w-full">
                    <RetroComputer onReady={handleReady} />

                    {/* Keep real text available to assistive technology and
                        browsers without WebGL, not just pixels in a canvas. */}
                    <div
                        className={sceneReady ? "sr-only" : "computer-fallback"}
                    >
                        <div className="computer-case">
                            <div className="computer-bezel">
                                <div className="terminal-screen px-6 py-6 font-mono sm:px-10 sm:py-8">
                                    <p className="mb-6 text-[10px] uppercase tracking-[0.14em] text-teal sm:text-xs">
                                        Frasier.OS / Personal terminal
                                    </p>
                                    <p className="mb-4 text-xs text-teal sm:text-sm">
                                        visitor@frasier:~
                                        <span className="text-accent">
                                            $
                                        </span>{" "}
                                        whoami
                                    </p>
                                    <h1 className="hero-name" id="hero-title">
                                        <span>Frasier</span>
                                        <span>
                                            Sundra
                                            <span className="text-accent">
                                                .
                                            </span>
                                        </span>
                                    </h1>
                                    <p className="mt-6 text-xs uppercase tracking-[0.1em] text-teal sm:text-sm">
                                        Software engineer · Perth, WA
                                    </p>
                                    <p className="mt-5 max-w-md text-xs leading-6 text-foreground/75 sm:text-sm">
                                        Building useful software, tinkering with
                                        hardware, and following my curiosity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 flex w-full max-w-3xl flex-col items-center justify-between gap-5 font-mono sm:flex-row">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted sm:text-xs">
                        <span className="text-accent">[</span> Software engineer
                        <span className="text-accent"> ]</span> / Perth, WA
                    </p>
                    <div className="flex items-center gap-6 text-xs">
                        <a
                            className="terminal-link inline-flex min-h-11 items-center"
                            href="#work"
                            aria-label="View selected work"
                        >
                            ./view-work <span aria-hidden="true">&nbsp;↗</span>
                        </a>
                        <a
                            className="terminal-link inline-flex min-h-11 items-center"
                            href="#contact"
                            aria-label="Get in touch"
                        >
                            ./get-in-touch{" "}
                            <span aria-hidden="true">&nbsp;↗</span>
                        </a>
                    </div>
                </div>
                <p
                    className={`computer-interaction-hint mt-3 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-muted motion-reduce:hidden ${sceneReady ? "" : "invisible"}`}
                    aria-hidden="true"
                >
                    Move your pointer to look around
                </p>
            </div>

            <div className="relative z-10 w-full">
                <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-5 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    <span className="hidden items-center gap-3 sm:flex">
                        Scroll to explore
                        <span
                            className="h-px w-12 bg-teal"
                            aria-hidden="true"
                        />
                    </span>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <a
                            className="transition-colors hover:text-accent"
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub ↗
                        </a>
                        <a
                            className="transition-colors hover:text-accent"
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn ↗
                        </a>
                        <a
                            className="transition-colors hover:text-accent"
                            href={`mailto:${profile.email}`}
                        >
                            {profile.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
