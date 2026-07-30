"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const startedAt = performance.now();
        let exitTimer: ReturnType<typeof setTimeout> | undefined;

        const finishLoading = () => {
            const elapsed = performance.now() - startedAt;
            const remaining = Math.max(0, 650 - elapsed);

            exitTimer = setTimeout(() => setIsLoading(false), remaining);
        };

        if (document.readyState === "complete") {
            finishLoading();
        } else {
            window.addEventListener("load", finishLoading, { once: true });
        }

        const fallbackTimer = setTimeout(finishLoading, 1800);

        return () => {
            window.removeEventListener("load", finishLoading);
            clearTimeout(fallbackTimer);
            if (exitTimer) clearTimeout(exitTimer);
        };
    }, []);

    return (
        <div
            aria-label="Loading portfolio"
            aria-live="polite"
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0b0d] text-zinc-100 transition-opacity duration-700 ${
                isLoading
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
            }`}
            role="status"
        >
            <div className="w-48 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/50 font-mono text-sm tracking-[-0.08em] text-cyan-200">
                    FS
                </div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    Loading portfolio
                </p>
                <div className="mt-5 h-px overflow-hidden bg-white/10">
                    <div className="h-full w-1/2 animate-[loading-bar_1.2s_ease-in-out_infinite] bg-cyan-200" />
                </div>
            </div>
        </div>
    );
}
