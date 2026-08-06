"use client";

import { ReactLenis, LenisRef } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
    children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<LenisRef>(null);
    useEffect(() => {
        function raf(time: number) {
            lenisRef.current?.lenis?.raf(time * 50);
        }
        gsap.ticker.add(raf);
        return () => gsap.ticker.remove(raf);
    }, []);
    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                anchors: {
                    offset: 100,
                    duration: 0.5,
                    immediate: false,
                },
                allowNestedScroll: true,
            }}
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
}
