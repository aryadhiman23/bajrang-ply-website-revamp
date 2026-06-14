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
  fullDescription: string
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
      'Premium BWP & MR grade plywood from trusted brands. Calibrated, termite-proof and borer-proof boards engineered to last a lifetime.',
    fullDescription:
      'Plywood is a panel-shaped wood-based material made from several thin layers of wood (the plies or wood veneers) that are glued crosswise (90° angle to each other) along the grain. This normalizes material properties such as shrinkage and swelling behavior. Plywood is formed from an odd number of veneer sheets and is produced in different qualities due to different uses. The quality of plywood mostly depends on the gluing or the number of veneer layers. We provide best quality at our plywood shop in Lucknow.\n\nPlywood is mainly used for building, furniture manufacturing, construction materials, automotive, interior decoration of premises, surface coating in the construction and naval sector, furnishing of boats, car building, and packaging.',
    brands: ['Green Panel', 'Century Ply', 'Craft Cave', 'CPI', 'Super Gold'],
    images: range('plywood', [1, 2, 3, 4, 5, 6]),
  },
  {
    id: 'laminates',
    title: 'Laminates',
    tagline: 'Surfaces That Speak',
    description:
      'New Mika by Greenlam and a vast designer laminate collection — matte, high-gloss, textured and natural woodgrain finishes.',
    fullDescription:
      'Laminates are decorative surface coatings that provide scratch resistance, durability, and aesthetic appeal to furniture and interiors. Available in hundreds of colors, patterns, and finishes including matte, high-gloss, textured, and natural woodgrain options. Perfect for kitchen countertops, wardrobe doors, feature walls, and modular furniture. Each laminate is engineered to withstand daily wear while maintaining its vibrant appearance.',
    brands: ['New Mika', 'Greenlam', 'Plusetone'],
    images: range('laminates', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  },
  {
    id: 'veneer',
    title: 'Veneer',
    tagline: 'Real Wood, Real Warmth',
    description:
      'Natural wood veneers that bring the timeless warmth and grain of real wood to premium furniture and luxury interiors.',
    fullDescription:
      'Veneers are thin slices of real wood that are bonded to plywood or MDF to create a natural wood appearance at a fraction of the cost of solid wood. Offering authentic wood aesthetics with superior stability and precision in thickness. Ideal for high-end furniture, decorative panels, and luxury interior applications. Each veneer is carefully selected to showcase unique grain patterns and natural beauty.',
    brands: ['Greenpanel', 'Thermoply'],
    images: range('veneer', [1, 2, 3]),
  },
  {
    id: 'hdhmr',
    title: 'HDHMR & MDF',
    tagline: 'Engineered To Perform',
    description:
      'VIR MDF and HDHMR boards — high density, high moisture resistant boards perfect for routing, carving and modern modular work.',
    fullDescription:
      'High-Density High-Moisture-Resistant (HDHMR) boards and Medium-Density Fiberboard (MDF) are engineered wood products optimized for precision applications. HDHMR is ideal for humid environments like bathrooms and kitchens, while MDF excels in detailed carving and CNC routing. Both materials offer superior machinability, smooth surfaces, and excellent paint adhesion. Perfect for modular furniture, built-in cabinets, and architectural millwork.',
    brands: ['Greenpanel', 'VIR MDF'],
    images: range('hdhmr', [1, 2, 3, 4, 5]),
  },
  {
    id: 'decorative-products',
    title: 'Decorative Products',
    tagline: 'Decor That Inspires',
    description:
      'Curated furniture and styling ideas to help you craft elegant, magazine-worthy interiors with personality and flair.',
    fullDescription:
      'Explore our collection of carefully curated decorative products and lifestyle designs that transform spaces into stunning showcases. From statement furniture pieces to architectural accents, each item is selected to inspire creativity and elevate your interior aesthetic. Discover trending designs, timeless classics, and innovative solutions that bring your dream interiors to life.',
    brands: ['Dunext', 'Design Studios'],
    images: range('decorative-products', [0, 1, 2, 3, 4, 5, 6, 7, 8]),
  },
  {
    id: 'hardware',
    title: 'Hardware',
    tagline: 'German Precision',
    description:
      'Premium German hardware — soft-close drawer systems, concealed hinges and precision fittings that move beautifully.',
    fullDescription:
      'Precision-engineered hardware solutions from leading European manufacturers. Our collection features soft-close technology for silent, smooth cabinet and drawer movements, sophisticated concealed hinges for seamless integration, and durable drawer slides rated for decades of use. Every component is designed to enhance functionality while remaining invisible to the eye.',
    brands: ['Hettich', 'Rehau', 'Blum'],
    images: range('hardware', [1, 2, 3, 4, 5, 6, 7]),
  },
  {
    id: 'locks',
    title: 'Locks & Security',
    tagline: 'Security Simplified',
    description:
      'Smart digital door locks, mortise locks, padlocks and complete furniture fittings for total peace of mind.',
    fullDescription:
      'Complete security solutions from Godrej and IPSA featuring smart digital locks with app control, biometric access, advanced mortise locks with precision engineering, and heavy-duty padlocks for maximum protection. Each product combines cutting-edge technology with time-tested durability, providing comprehensive security for doors, wardrobes, and furniture.',
    brands: ['Godrej Locks', 'IPSA', 'Dorset Locks'],
    images: range('locks', [1, 2, 3, 4, 5, 6, 7]),
  },
  {
    id: 'decorative-handles',
    title: 'Decorative Handles',
    tagline: 'Details That Define',
    description:
      'Premium handles and knobs — chrome, gold and rose-gold finishes that elevate every cabinet, wardrobe and door.',
    fullDescription:
      'Transform your furniture with stunning decorative handles and knobs that serve as functional art. Available in prestigious finishes including polished chrome, warm gold, elegant rose-gold, and vintage brass. Each handle is precision-engineered for ergonomic comfort and engineered for durability. From contemporary minimalist designs to ornate heritage styles, find the perfect finish to complement your interiors.',
    brands: ['Becker', 'Hafele', 'Swarovski'],
    images: range('decorative-handles', [1, 2, 3, 4, 5, 6, 7, 8]),
  },
  {
    id: 'tower-bolts',
    title: 'Handles & Tower Bolts',
    tagline: 'Built To Last',
    description:
      'Designer handles paired with heavy-duty tower bolts in rose gold, brass and antique finishes — strength and style.',
    fullDescription:
      'Premium tower bolts and sliding bolts crafted for doors, gates, and cabinets requiring reliable security and aesthetic appeal. Available in rose gold, antique brass, and stainless steel finishes. Each bolt features smooth operation, precision engineering, and a design that enhances rather than detracts from your interior aesthetic. Perfect for wardrobes, doors, and storage solutions.',
    brands: ['Premium Fittings', 'Hafele', 'Godrej'],
    images: range('tower-bolts', [1, 2, 3, 4]),
  },
  {
    id: 'edge-banding',
    title: 'Edge Banding Tape',
    tagline: 'The Perfect Finish',
    description:
      'German-engineered edge banding tape in hundreds of matching colours and woodgrains for a flawless, durable finish.',
    fullDescription:
      'Professional-grade edge banding from Rehau that provides seamless, durable edges on plywood and board materials. Available in hundreds of colors and woodgrain patterns to match any laminate or veneer. Heat-sealed edges resist chipping, moisture, and wear while maintaining a perfect aesthetic finish. Essential for professional furniture manufacturing and custom built-ins.',
    brands: ['Rehau', 'EdgeMaster'],
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
        // Pick the most visible section (highest intersection ratio)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          const id = visible[0].target.id
          setActiveId(id)
        }
      },
      {
        // Observe when section top reaches 20% from top of viewport (accounting for sticky header)
        // This ensures tabs update as user scrolls through sections
        rootMargin: '-180px 0px -70% 0px',
        threshold: [0, 0.1, 0.2],
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
      // Account for: header (80px) + tab bar (56px) = 136px
      const offset = 136
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    // Release the click-scroll lock after smooth scroll completes
    window.setTimeout(() => {
      isClickScrolling.current = false
    }, 1000)
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
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">{s.description}</p>
                    
                    {/* Expanded description for more detail */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 whitespace-pre-line">{s.fullDescription}</p>

                    {/* Brands we deal with */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">Brands we deal with</h3>
                      <div className="flex flex-wrap gap-2">
                        {s.brands.map((b) => (
                          <span
                            key={b}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/30 hover:bg-primary/20 transition"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
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
