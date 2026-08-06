"use client";

import { ReactLenis, LenisRef } from "lenis/react";
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SmoothScrollProps = {
    children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<LenisRef>(null);
    useGSAP(() => {
        function raf(time: number) {
            lenisRef.current?.lenis?.raf(time * 50);
            ScrollTrigger.update();
        }
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);
        return () => gsap.ticker.remove(raf);
    });
    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                anchors: {
                    offset: 100,
                },
                allowNestedScroll: true,
            }}
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
}
