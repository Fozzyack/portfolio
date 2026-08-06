"use client";

import { ReactLenis, LenisRef } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

type SmoothScrollProps = {
    children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<LenisRef>(null);
    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);
        return () => gsap.ticker.remove(update);
    }, []);
    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                lerp: 0.05,
                wheelMultiplier: 1.2,
                anchors: {
                    offset: 100,
                    duration: 2.5,
                },
            }}
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
}
