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
        const lenis = lenisRef.current?.lenis;

        if (!lenis) {
            return;
        }

        const raf = (time: number) => {
            lenis.raf(time * 1000);
        };

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.off("scroll", ScrollTrigger.update);
            gsap.ticker.remove(raf);
        };
    }, []);
    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                lerp: 0.08,
                smoothWheel: true,
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
