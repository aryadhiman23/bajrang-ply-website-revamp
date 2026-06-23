'use client'

// NOTE: `Link`, `LogIn` & `LayoutDashboard` are temporarily unused (Sign In / Admin disabled).
// import Link from 'next/link'
import { Phone, MapPin, Clock, Star, ChevronRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/scroll-animations'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig, telHref, whatsappHref, mapHref } from '@/lib/site-config'

/* Brand glyph for WhatsApp */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  )
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-card shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <img src="/images/bajrang-logo.png" alt="Bajrang Plywood" className="h-16 w-auto" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="/about" className="text-foreground hover:text-primary transition">About</a>
            <a href="/products" className="text-foreground hover:text-primary transition">Products</a>
            <a href="/gallery" className="text-foreground hover:text-primary transition">Gallery</a>
            <a href="/contact" className="text-foreground hover:text-primary transition">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            {/* TODO: Sign In & Admin are temporarily disabled — to be re-enabled later.
            <Link href="/sign-in" className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition font-medium">
              <LogIn size={18} />
              Sign In
            </Link>
            <Link href="/admin" className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition">
              <LayoutDashboard size={18} />
              Admin
            </Link>
            */}
            <a href={telHref} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition">
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card p-4">
            <nav className="flex flex-col gap-4">
              <a href="/about" className="text-foreground hover:text-primary transition">About</a>
              <a href="/products" className="text-foreground hover:text-primary transition">Products</a>
              <a href="/gallery" className="text-foreground hover:text-primary transition">Gallery</a>
              <a href="/contact" className="text-foreground hover:text-primary transition">Contact</a>
              {/* TODO: Sign In & Admin are temporarily disabled — to be re-enabled later.
              <Link href="/sign-in" className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium">
                <LogIn size={18} />
                Sign In
              </Link>
              <Link href="/admin" className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition">
                <LayoutDashboard size={18} />
                Admin Panel
              </Link>
              */}
              <a href={telHref} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition">
                <Phone size={18} />
                Call Now
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:opacity-90 transition">
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="mt-20 min-h-screen relative flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home/hero-bg.jpg"
            alt="Modern luxury interior with premium wood materials and design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-24">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">More Than Just Plywood</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              Premium Plywood &amp; Interior Materials
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Your complete one-stop shop for laminates, veneers, hardware, charcoal panels and decorative surfaces — all under one roof in Lucknow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={telHref} className="px-8 py-4 bg-primary text-primary-foreground rounded text-lg font-semibold hover:bg-accent transition flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white rounded text-lg font-semibold hover:bg-white/20 transition flex items-center justify-center gap-2">
                <WhatsAppIcon size={20} />
                WhatsApp
              </a>
              <a href="#products" className="px-8 py-4 border-2 border-primary text-primary rounded text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition flex items-center justify-center gap-2">
                Explore Products
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">13+</div>
              <p className="text-sm mt-2">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <p className="text-sm mt-2">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold">1000+</div>
              <p className="text-sm mt-2">Product Variants</p>
            </div>
            <div>
              <div className="text-3xl font-bold">Lucknow</div>
              <p className="text-sm mt-2">Premium Location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Product Range</h2>
            <p className="text-xl text-muted-foreground">Complete solutions for your interior needs</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Plywood', image: '/images/product-plywood-breathe.jpg', desc: 'E0 grade, calibrated, termite & borer proof plywood' },
              { name: 'Laminates', image: '/images/product-laminates-dark.jpg', desc: 'Matte, gloss & textured — scratch resistant surface collection' },
              { name: 'Handcraft Laminates', image: '/images/product-laminates-plusetone.jpg', desc: 'Artistic Plusetone laminates — unique designs for walls & furniture' },
              { name: 'Hardware', image: '/images/product-hardware-locks.jpg', desc: 'Smart locks, hinges & precision-engineered fittings' },
              { name: 'Charcoal Panels', image: '/images/product-charcoal-panels.jpg', desc: 'Modern walls, luxury impact — premium panels & louvers' },
              { name: 'Doors & Surfaces', image: '/images/product-doors-entrance.jpg', desc: 'Premium doors for office & home — entrance to elegance' },
            ].map((category, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 100}>
                <div className="bg-card rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.desc}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-accent transition font-semibold">
                      View Details
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Bajrang Plywood?</h2>
            <p className="text-xl text-muted-foreground">Trusted by thousands of homeowners, designers & contractors</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality Materials', desc: 'Premium grade products for durability' },
              { title: 'Wide Selection', desc: '500+ variants to choose from' },
              { title: 'Expert Guidance', desc: 'Professional advice from experienced team' },
              { title: 'Wholesale & Retail', desc: 'Competitive pricing for all volumes' },
            ].map((item, idx) => (
              <Reveal key={idx} direction="zoom" delay={idx * 120}>
                <div className="bg-card p-8 rounded-lg shadow text-center hover:shadow-lg transition h-full">
                  <div className="text-primary text-5xl mb-4 flex justify-center">
                    <Star size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground">Our bestsellers & customer favorites</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Wigwam E0 Plywood', rating: 5, image: '/images/product-plywood-wigwam.jpg' },
              { name: 'Thermo Sheet Interiors', rating: 5, image: '/images/product-thermo-sheet.jpg' },
              { name: 'Signature Doors', rating: 5, image: '/images/product-doors-signature.jpg' },
            ].map((product, idx) => (
              <Reveal key={idx} direction={idx === 0 ? 'left' : idx === 2 ? 'right' : 'up'} delay={idx * 100}>
                <div className="bg-card rounded-lg shadow hover:shadow-lg transition overflow-hidden h-full">
                  <div className="bg-muted h-56 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'}
                        />
                      ))}
                    </div>
                    <button className="w-full py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition font-semibold">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Strip */}
      <section className="py-16 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Our Product Showcase</h2>
            <p className="text-xl text-muted-foreground">From hardware to surfaces — everything for your dream interior</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: '/images/product-safe-godrej.jpg', label: 'Godrej Safes' },
              { img: '/images/product-woodex-louvers.jpg', label: 'WPC Louvers' },
              { img: '/images/product-laminates-artistic.jpg', label: 'Artistic Laminates' },
              { img: '/images/product-doors-signature.jpg', label: 'Signature Doors' },
            ].map((item, idx) => (
              <Reveal key={idx} direction="zoom" delay={idx * 80}>
                <div className="relative overflow-hidden rounded-lg h-52 group cursor-pointer shadow">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 py-2 px-3">
                    <p className="text-white text-sm font-semibold text-center">{item.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Inspiration */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Project Inspiration</h2>
            <p className="text-xl text-muted-foreground">Real projects by our customers</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Modern Kitchen', img: '/images/gallery-01.jpg' },
              { label: 'Bedroom Wardrobe', img: '/images/gallery-02.jpg' },
              { label: 'Office Paneling', img: '/images/gallery-03.jpg' },
              { label: 'Living Room Interior', img: '/images/gallery-04.jpg' },
              { label: 'Modular Furniture', img: '/images/gallery-05.jpg' },
              { label: 'Commercial Setup', img: '/images/gallery-06.jpg' },
            ].map((project, idx) => (
              <Reveal key={idx} direction="zoom" delay={idx * 90}>
                <div className="relative group overflow-hidden rounded-lg h-64 cursor-pointer">
                  <img
                    src={project.img}
                    alt={project.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center">{project.label}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Verma', role: 'Homeowner', text: 'Excellent quality plywood and great customer service. Highly recommended!' },
              { name: 'Priya Sharma', role: 'Interior Designer', text: 'Best variety of laminates and veneers. Quick delivery and support.' },
              { name: 'Amit Singh', role: 'Contractor', text: 'Reliable source for all materials. Wholesale rates are very competitive.' },
            ].map((testimonial, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 130}>
                <div className="bg-card p-8 rounded-lg shadow hover:shadow-lg transition h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location CTA */}
      <section className="py-20 bg-primary text-primary-foreground" id="contact">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal direction="up">
            <h2 className="text-4xl font-bold mb-6">Visit Our Store</h2>
            <p className="text-xl mb-12">Experience our full product range in person</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Reveal direction="up" delay={0}>
              <div className="flex flex-col items-center">
                <MapPin size={48} className="mb-4" />
                <p className="text-lg">{siteConfig.address.line1}, {siteConfig.address.line2}<br />{siteConfig.address.line3}, {siteConfig.address.city} - {siteConfig.address.pincode}</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={120}>
              <div className="flex flex-col items-center">
                <Phone size={48} className="mb-4" />
                <p className="text-lg"><strong>Call:</strong><br />{siteConfig.callNumber}</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={240}>
              <div className="flex flex-col items-center">
                <Clock size={48} className="mb-4" />
                <p className="text-lg"><strong>Hours:</strong><br />{siteConfig.hours.weekdays}<br />{siteConfig.hours.sunday}</p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={telHref} className="px-8 py-3 bg-primary-foreground text-primary rounded font-bold hover:opacity-90 transition flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary-foreground text-primary rounded font-bold hover:opacity-90 transition flex items-center justify-center gap-2">
              <WhatsAppIcon size={20} />
              WhatsApp
            </a>
            <a href={mapHref} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded font-bold hover:bg-primary-foreground hover:text-primary transition flex items-center justify-center gap-2">
              <MapPin size={20} />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-2xl mx-auto px-4">
          <Reveal direction="zoom">
            <div className="bg-card rounded-lg shadow-lg p-10">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Quick Enquiry Form</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="email" placeholder="Your Email" className="px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
                <select className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select Product Interest</option>
                  <option>Plywood</option>
                  <option>Laminates</option>
                  <option>Veneers</option>
                  <option>Hardware</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Your Requirements" rows={4} className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded font-bold hover:bg-accent transition">
                  Send Enquiry
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* Floating WhatsApp Button */}
      {/* <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-40"
      >
        <WhatsAppIcon size={28} />
      </a> */}
    </>
  )
}
