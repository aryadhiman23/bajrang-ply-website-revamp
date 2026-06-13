'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeInUp({ children, className = '', delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-in-up-visible')
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`fade-in-up ${className}`}
    >
      {children}
    </div>
  )
}

export function StaggerContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`stagger-container ${className}`}>
      {children}
    </div>
  )
}

export function StaggerItem({ children, className = '', index = 0 }: ScrollAnimationProps & { index?: number }) {
  return (
    <FadeInUp delay={index * 100} className={`stagger-item ${className}`}>
      {children}
    </FadeInUp>
  )
}
