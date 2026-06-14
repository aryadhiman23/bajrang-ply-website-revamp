'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductCarousel } from '@/components/product-carousel'
import { Reveal } from '@/components/scroll-animations'

interface Section {
  id: string
  title: string
  tagline: string
  description: string
  brands: string[]
  images: string[]
}

const range = (dir: string, nums: number[]) => nums.map((n) => `/products/${dir}/${n}.png`)

const sections: Section[] = [
  {
    id: 'plywood',
    title: 'Plywood',
    tagline: 'The Strong Foundation',
    description:
      'Premium BWP & MR grade plywood from Greenpanel, Century Ply and other trusted brands. Calibrated, termite-proof and borer-proof boards engineered to last a lifetime.',
    brands: ['Greenpanel', 'Century Ply'],
    images: range('plywood', [1, 2, 3, 4, 5, 6]),
  },
  {
    id: 'laminates',
    title: 'Laminates',
    tagline: 'Surfaces That Speak',
    description:
      'New Mika by Greenlam and a vast designer laminate collection — matte, high-gloss, textured and natural woodgrain finishes for kitchens, wardrobes and feature walls.',
    brands: ['New Mika', 'Greenlam'],
    images: range('laminates', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  },
  {
    id: 'veneer',
    title: 'Veneer',
    tagline: 'Real Wood, Real Warmth',
    description:
      'Natural wood veneers from Greenpanel that bring the timeless warmth and grain of real wood to your premium furniture and luxury interiors.',
    brands: ['Greenpanel'],
    images: range('veneer', [1, 2, 3]),
  },
  {
    id: 'hdhmr',
    title: 'HDHMR & MDF',
    tagline: 'Engineered To Perform',
    description:
      'VIR MDF and Greenpanel HDHMR boards — high density, high moisture resistant boards perfect for routing, carving, laminating and modern modular work.',
    brands: ['Greenpanel', 'VIR'],
    images: range('hdhmr', [1, 2, 3, 4, 5]),
  },
  {
    id: 'decorative-products',
    title: 'Decorative Products',
    tagline: 'Decor That Inspires',
    description:
      'Dunext decor and design inspiration — curated furniture, statement pieces and styling ideas to help you craft elegant, magazine-worthy interiors.',
    brands: ['Dunext'],
    images: range('decorative-products', [0, 1, 2, 3, 4, 5, 6, 7, 8]),
  },
  {
    id: 'hardware',
    title: 'Hardware',
    tagline: 'German Precision',
    description:
      'Hettich premium hardware — soft-close drawer systems, concealed hinges and precision fittings that make every cabinet move beautifully for years.',
    brands: ['Hettich'],
    images: range('hardware', [1, 2, 3, 4, 5, 6, 7]),
  },
  {
    id: 'locks',
    title: 'Locks',
    tagline: 'Security Simplified',
    description:
      'Godrej Locks and IPSA — smart digital door locks, mortise locks, padlocks and complete furniture fittings for total peace of mind.',
    brands: ['Godrej Locks', 'IPSA'],
    images: range('locks', [1, 2, 3, 4, 5, 6, 7]),
  },
  {
    id: 'decorative-handles',
    title: 'Decorative Handles',
    tagline: 'Details That Define',
    description:
      'Becker architectural handles and knobs — premium chrome, gold and rose-gold finishes that elevate every cabinet, wardrobe and door.',
    brands: ['Becker'],
    images: range('decorative-handles', [1, 2, 3, 4, 5, 6, 7, 8]),
  },
  {
    id: 'tower-bolts',
    title: 'Handles & Tower Bolts',
    tagline: 'Built To Last',
    description:
      'Designer handles paired with heavy-duty tower bolts in rose gold, brass and antique finishes — strength and style for every door.',
    brands: ['Premium Fittings'],
    images: range('tower-bolts', [1, 2, 3, 4]),
  },
  {
    id: 'edge-banding',
    title: 'Edge Banding Tape',
    tagline: 'The Perfect Finish',
    description:
      'Rehau edge banding tape — German-engineered edges available in hundreds of matching colours and woodgrains for a flawless, durable finish.',
    brands: ['Rehau'],
    images: range('edge-banding', [1, 2]),
  },
]

export default function ProductsPage() {
  const [activeId, setActiveId] = useState(sections[0].id)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const isClickScrolling = useRef(false)

  // Scroll-sync: highlight the tab for the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return
        // Pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        // account for sticky header (80px) + tab bar (~56px)
        rootMargin: '-140px 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Keep the active tab scrolled into view inside the tab bar
  useEffect(() => {
    const tabEl = tabsRef.current?.querySelector<HTMLElement>(`[data-tab="${activeId}"]`)
    tabEl?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [activeId])

  const scrollToSection = (id: string) => {
    setActiveId(id)
    isClickScrolling.current = true
    const el = sectionRefs.current[id]
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 150
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    // release the lock after the smooth scroll settles
    window.setTimeout(() => {
      isClickScrolling.current = false
    }, 800)
  }

  return (
    <>
      <SiteHeader />

      {/* Page hero */}
      <section className="mt-20 bg-foreground text-primary-foreground py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Catalogue</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Explore Our Products</h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed">
            From plywood and laminates to locks, hardware and decor — everything you need for your dream interior, all under one roof.
          </p>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky top-20 z-40 bg-card/95 backdrop-blur border-b border-border shadow-sm">
        <div
          ref={tabsRef}
          className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto scrollbar-hide py-3"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              data-tab={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                activeId === s.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-primary/10'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <main className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-20">
          {sections.map((s, idx) => (
            <section
              key={s.id}
              id={s.id}
              ref={(el) => {
                sectionRefs.current[s.id] = el
              }}
              className="scroll-mt-40"
            >
              <Reveal direction="up">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Carousel — alternate sides on desktop */}
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <ProductCarousel images={s.images} label={s.title} />
                  </div>

                  {/* Text content */}
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">{s.tagline}</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{s.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">{s.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {s.brands.map((b) => (
                        <span
                          key={b}
                          className="px-3 py-1 rounded-full bg-muted text-foreground text-sm font-medium border border-border"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:+910000000000"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded font-semibold hover:bg-accent transition"
                      >
                        <Phone size={18} />
                        Enquire Now
                      </a>
                      <a
                        href="https://wa.me/910000000000"
                        className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded font-semibold hover:bg-primary hover:text-primary-foreground transition"
                      >
                        <MessageCircle size={18} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
