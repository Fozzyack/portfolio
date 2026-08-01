"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const contactLinks = [
    {
        label: "GitHub",
        href: "https://github.com/Fozzyack",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/fsundra",
    },
];

export default function ContactSection() {
    const root = useRef<HTMLHtmlElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle",
    );
    const [errorMessage, setErrorMessage] = useState("");

    useGSAP(
        () => {
            const header = SplitText.create(".header", { type: "words" });
            gsap.from(header.words, {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: root },
    );

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("sending");
        setErrorMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                }),
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Unable to send your message.");
            }

            form.reset();
            setStatus("sent");
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to send your message.",
            );
            setStatus("error");
        }
    }

    return (
        <section
            className="border-t border-white/10 bg-[#0a0b0d] px-6 py-24 text-zinc-100 sm:px-10 sm:py-32 lg:px-16"
            id="contact"
            aria-labelledby="contact-title"
            ref={root}
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    <span>04 / Contact</span>
                    <span>Perth, WA · Australia</span>
                </div>

                <div className="grid gap-16 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24 lg:py-28">
                    <div>
                        <p className="header font-mono text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                            Have a project in mind?
                        </p>
                        <h2
                            className="header mt-8 max-w-4xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.1em]"
                            id="contact-title"
                        >
                            Let&apos;s make something useful.
                        </h2>
                    </div>

                    <div className="lg:pb-2">
                        <p className="max-w-sm text-lg leading-7 text-zinc-400">
                            Tell me what you&apos;re working on, where
                            you&apos;re stuck, or what we could build together.
                        </p>
                        <form
                            className="mt-10 space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label
                                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500"
                                    htmlFor="contact-name"
                                >
                                    Name
                                </label>
                                <input
                                    className="mt-3 block w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-cyan-200"
                                    id="contact-name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    type="text"
                                />
                            </div>
                            <div>
                                <label
                                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500"
                                    htmlFor="contact-email"
                                >
                                    Email address
                                </label>
                                <input
                                    className="mt-3 block w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-cyan-200"
                                    id="contact-email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    type="email"
                                />
                            </div>
                            <div>
                                <label
                                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500"
                                    htmlFor="contact-message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="mt-3 block min-h-32 w-full resize-y border-b border-white/20 bg-transparent px-0 py-3 text-base text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-cyan-200"
                                    id="contact-message"
                                    name="message"
                                    placeholder="Tell me a little about your project"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between gap-4 pt-2">
                                <p
                                    aria-live="polite"
                                    className={`text-sm ${status === "error" ? "text-red-300" : "text-zinc-500"}`}
                                >
                                    {status === "sent"
                                        ? "Message sent. I'll be in touch soon."
                                        : status === "error"
                                          ? errorMessage
                                          : "Usually replies within a day."}
                                </p>
                                <button
                                    className="shrink-0 border border-cyan-200 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200 transition-colors hover:bg-cyan-200 hover:text-[#0a0b0d] disabled:cursor-wait disabled:opacity-50"
                                    disabled={status === "sending"}
                                    type="submit"
                                >
                                    {status === "sending"
                                        ? "Sending..."
                                        : "Send message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-8 border-t border-white/10 pt-5 text-sm sm:flex-row sm:items-end">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                            Find me online
                        </p>
                        <div className="mt-4 flex gap-6">
                            {contactLinks.map((link) => (
                                <a
                                    className="text-zinc-300 transition-colors hover:text-cyan-200"
                                    href={link.href}
                                    key={link.label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.label} ↗
                                </a>
                            ))}
                        </div>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                        Frasier Sundra © 2026
                    </p>
                </div>
            </div>
        </section>
    );
}
