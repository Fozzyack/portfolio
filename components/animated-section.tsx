"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
}

export function AnimatedSection({ children, className = "", delay = 0, animation = "fade-up" }: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"

    if (!isIntersecting) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0`
        case "fade-in":
          return `${baseClasses} opacity-0`
        case "slide-left":
          return `${baseClasses} opacity-0`
        case "slide-right":
          return `${baseClasses} opacity-0`
        case "scale-up":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} opacity-100 scale-100`
  }

  return (
    <section
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: isIntersecting ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </section>
  )
}
