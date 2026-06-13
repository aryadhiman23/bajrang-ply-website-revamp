'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'zoom'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  /** When true, the animation re-plays every time it scrolls back into view */
  repeat?: boolean
}

const directionClass: Record<Direction, string> = {
  up: 'fade-in-up',
  left: 'fade-in-left',
  right: 'fade-in-right',
  zoom: 'zoom-in',
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('in-view')
          if (!repeat) observer.unobserve(el)
        } else if (repeat) {
          el.classList.remove('in-view')
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, repeat])

  return (
    <div ref={ref} className={`${directionClass[direction]} ${className}`}>
      {children}
    </div>
  )
}

/* Backwards-compatible aliases */
export function FadeInUp({ children, className, delay }: RevealProps) {
  return (
    <Reveal direction="up" className={className} delay={delay}>
      {children}
    </Reveal>
  )
}
