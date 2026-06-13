'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'zoom'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
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
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check if element is already in the viewport on mount (above the fold)
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.style.transitionDelay = `${delay}ms`
      el.classList.add('in-view')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      // threshold:0 = fires as soon as even 1px is visible
      // rootMargin: slight top buffer so cards animate just before fully in view
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`${directionClass[direction]} ${className}`}>
      {children}
    </div>
  )
}

/* Backwards-compatible alias */
export function FadeInUp({ children, className, delay }: RevealProps) {
  return (
    <Reveal direction="up" className={className} delay={delay}>
      {children}
    </Reveal>
  )
}
