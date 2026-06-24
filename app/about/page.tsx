'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Quote, Target, Eye, MapPin, ChevronRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/scroll-animations'
import { siteConfig } from '@/lib/site-config'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'story', label: 'Our Story' },
  { id: 'founder', label: "Founder's Desk" },
  { id: 'products', label: 'Products We Deal In' },
  { id: 'vision', label: 'Mission & Vision' },
]

const productCategories = [
  'Plywood',
  'Block Boards',
  'Flush Doors',
  'Decorative Laminates',
  'Veneers',
  'Corian Sheets',
  'Charcoal Panels',
  'MDF Boards',
  'PVC Panels',
  'Hardware Fittings',
  'Adhesives',
  'Decorative Interior Materials',
]

export default function AboutPage() {
  const [activeId, setActiveId] = useState(tabs[0].id)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const isClickScrolling = useRef(false)

  // Scroll-sync: highlight the tab for the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
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
      const offset = 136
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    window.setTimeout(() => {
      isClickScrolling.current = false
    }, 1000)
  }

  return (
    <>
      <SiteHeader />

      {/* Hero with background image */}
      <section className="relative mt-20 h-[340px] md:h-[420px] flex items-center overflow-hidden">
        <img
          src="/about/background.jpg"
          alt="Bajrang Plywood showroom interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <p className="text-primary-foreground/70 text-sm tracking-widest uppercase mb-3">
            <Link href="/" className="hover:text-primary-foreground transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">About Us</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground text-balance">About Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-2xl leading-relaxed">
            One of the leading plywood, hardware &amp; decorative interior material suppliers in North India — proudly serving since 2013.
          </p>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky top-20 z-40 bg-card/95 backdrop-blur border-b border-border shadow-sm">
        <div
          ref={tabsRef}
          className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto scrollbar-hide py-3"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              data-tab={t.id}
              onClick={() => scrollToSection(t.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                activeId === t.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-primary/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main className="bg-background">
        {/* Overview */}
        <section
          id="overview"
          ref={(el) => {
            sectionRefs.current['overview'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20"
        >
          <Reveal direction="up" delay={0}>
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">
                Bajrang Plywood
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Plywood Wholesale Dealers in North India
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bajrang Plywood is one of the leading plywood, hardware, and decorative interior material suppliers in <b>North India</b>, proudly serving customers <b>since 2013</b>. Based in Lucknow, we have established ourselves as a trusted name in the industry by providing premium-quality products, competitive pricing, and dependable service.
                </p>
                <p>
                  Today, Bajrang Plywood supplies products across <b>Uttar Pradesh</b>, <b>Uttarakhand</b>, and <b>major cities along the Nepal border region</b>, while also catering to customers in various parts of India through a strong distribution network.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: '2013', label: 'Serving Since' },
                  { value: '13+', label: 'Years Experience' },
                  { value: '1000+', label: 'Product Variants' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/about/showroom-1.jpg"
                alt="Bajrang Plywood premium wardrobe display"
                className="rounded-lg shadow-lg w-full h-64 object-cover col-span-2"
              />
              <img
                src="/about/showroom-4.jpg"
                alt="Bajrang Plywood laminate and hardware showcase"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/about/showroom-2.jpg"
                alt="Bajrang Plywood flush door collection"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Our Story */}
        <section
          id="story"
          ref={(el) => {
            sectionRefs.current['story'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20 bg-muted"
        >
          <Reveal direction="up" delay={0}>
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
              <img
                src="/about/showroom-5.jpeg"
                alt="Bajrang Plywood interior decor display"
                className="rounded-lg shadow-lg w-full h-[420px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Built On A Vision Of Quality &amp; Trust
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded by <strong className="text-foreground">Mr. Anmol Agarwal</strong>, Bajrang Plywood was built with a vision to create a reliable destination where customers could find high-quality plywood and interior solutions under one roof. After completing his schooling from City Montessori School (CMS), Lucknow, and earning his Engineering degree from Babu Banarasi Das (BBD) College in 2012, Mr. Agarwal entered the industry with a commitment to quality, innovation, and customer satisfaction.
                </p>
                <p>
                  What began as a focused business venture has today evolved into a trusted partner for homeowners, architects, interior designers, contractors, builders, furniture manufacturers, and commercial establishments.
                </p>
                <p>
                  Over the years, Bajrang Plywood has earned the confidence of thousands of customers by consistently delivering products that combine durability, performance, and value — whether for modular furniture, wardrobes, kitchens, office interiors, retail spaces, hotels, or large-scale construction projects.
                </p>
              </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Founder's Desk */}
        <section
          id="founder"
          ref={(el) => {
            sectionRefs.current['founder'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">From The Founder&apos;s Desk</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">A Message From Our Director</h2>
            </div>

            <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
              <div className="text-center">
                <div className="rounded-xl overflow-hidden shadow-lg border-4 border-primary/20">
                  <img
                    src="/about/founder.jpg"
                    alt="Mr. Anmol Agarwal, Director of Bajrang Plywood"
                    className="w-full h-[380px] object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-6">Mr. Anmol Agarwal</h3>
                <p className="text-primary font-medium">Director, Bajrang Plywood</p>
              </div>

              <div className="bg-muted rounded-xl p-8 md:p-10 relative">
                <Quote className="text-primary/30 absolute top-6 right-6" size={56} />
                <p className="text-lg font-semibold text-foreground mb-4">Welcome to Bajrang Plywood!</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Since 2013, we have been devoted to supplying high-quality plywood, hardware, and decorative accessories. Our commitment to ethics, creativity, and great workmanship guarantees that we provide the finest solutions for your projects.
                  </p>
                  <p>
                    We retain our industry leadership by making continual investments in our facilities and professional workforce. Everything we do revolves around ensuring customer happiness. Our objective is to provide reliable, high-quality products at competitive prices.
                  </p>
                  <p>
                    We believe in blending traditional principles with modern technology to adapt swiftly to the evolving needs of our clients. Thank you for considering Bajrang Plywood. We are eager to be part of your journey and assist you in realizing your vision.
                  </p>
                </div>
                <p className="mt-6 text-foreground font-semibold">Warm Regards,</p>
                <p className="text-primary font-bold">Mr. Anmol Agarwal</p>
                <p className="text-sm text-muted-foreground">Director of Bajrang Plywood</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products We Deal In */}
        <section
          id="products"
          ref={(el) => {
            sectionRefs.current['products'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20 bg-muted"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Products We Deal In</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                A Complete Range Of Interior Solutions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We deal in the most prominent, refined, and innovative range of products across numerous categories — partnering with respected, trusted brands to ensure every product meets strict quality benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {productCategories.map((cat) => (
                <div
                  key={cat}
                  className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm border border-border hover:border-primary hover:shadow-md transition"
                >
                  <ChevronRight className="text-primary flex-shrink-0" size={18} />
                  <span className="text-foreground font-medium text-sm">{cat}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded font-bold hover:bg-accent transition"
              >
                Explore Full Catalogue
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          id="vision"
          ref={(el) => {
            sectionRefs.current['vision'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">What Drives Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Mission &amp; Vision</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 shadow border border-border">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Target className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide customers with premium-quality products at competitive prices while maintaining the highest standards of integrity, reliability, and customer satisfaction.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow border border-border">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Eye className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and preferred supplier of plywood, hardware, and decorative interior solutions by consistently delivering superior quality products, innovative solutions, and exceptional customer service.
                </p>
              </div>
            </div>

            {/* Tagline banner */}
            <div className="mt-12 bg-primary text-primary-foreground rounded-xl p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                Build Stronger. Design Better. Create Timeless Spaces — With Bajrang Plywood.
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-5 text-primary-foreground/80">
                <MapPin size={18} />
                <span>{siteConfig.address.full}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}


// In /about page
export const metadata = {
  title: "About Us — Est. 2013 | Bajrang Plywood Lucknow",
  description: "Founded in 2013 by Mr. Anmol Agarwal, Bajrang Plywood is North India's trusted supplier of premium interior materials. Serving UP, Uttarakhand & beyond.",
}
