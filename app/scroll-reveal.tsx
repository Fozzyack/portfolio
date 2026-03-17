"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealVariant = "up" | "in" | "scale";

type ScrollRevealProps = {
    children: ReactNode;
    variant?: RevealVariant;
    delay?: number;
    threshold?: number;
    className?: string;
};

const VARIANT_CLASS: Record<RevealVariant, string> = {
    up: "reveal-up",
    in: "reveal-in",
    scale: "reveal-scale",
};

export function ScrollReveal({
    children,
    variant = "up",
    delay = 0,
    threshold = 0.15,
    className = "",
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin: "0px 0px -40px 0px" },
        );

        observer.observe(el);
        return () => observer.unobserve(el);
    }, [threshold]);

    const style: CSSProperties | undefined =
        visible && delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

    return (
        <div
            ref={ref}
            className={`${visible ? VARIANT_CLASS[variant] : "reveal-hidden"} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}
