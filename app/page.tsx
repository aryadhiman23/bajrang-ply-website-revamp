'use client'

import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Clock, Star, ChevronRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-card shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Bajrang Ply</div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="/about" className="text-foreground hover:text-primary transition">About</a>
            <a href="/products" className="text-foreground hover:text-primary transition">Products</a>
            <a href="/gallery" className="text-foreground hover:text-primary transition">Gallery</a>
            <a href="/contact" className="text-foreground hover:text-primary transition">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition">
              <Phone size={18} />
              Call Now
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:opacity-90 transition">
              <MessageCircle size={18} />
              WhatsApp
            </button>
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
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition">
                <Phone size={18} />
                Call Now
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:opacity-90 transition">
                <MessageCircle size={18} />
                WhatsApp
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="mt-20 min-h-screen bg-gradient-to-b from-muted to-background flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Premium Plywood & Interior Materials
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                More Than Just Plywood – Your complete one-stop shop for laminates, veneers, hardware, and decorative interior materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded text-lg font-semibold hover:bg-accent transition flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now
                </button>
                <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded text-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  WhatsApp
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary rounded text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition flex items-center justify-center gap-2">
                  Explore Products
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/20 rounded-lg p-8 h-96 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Premium plywood and interior materials showcase"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">20+</div>
              <p className="text-sm mt-2">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <p className="text-sm mt-2">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Product Range</h2>
            <p className="text-xl text-muted-foreground">Complete solutions for your interior needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Plywood', image: '/placeholder.svg?height=300&width=400', desc: 'Quality plywood for all applications' },
              { name: 'Laminates', image: '/placeholder.svg?height=300&width=400', desc: 'Wide range of finishes & colors' },
              { name: 'Veneers', image: '/placeholder.svg?height=300&width=400', desc: 'Premium wood veneers' },
              { name: 'Hardware', image: '/placeholder.svg?height=300&width=400', desc: 'Complete hardware solutions' },
              { name: 'Charcoal Panels', image: '/placeholder.svg?height=300&width=400', desc: 'Decorative & functional panels' },
              { name: 'Corian Surfaces', image: '/placeholder.svg?height=300&width=400', desc: 'Premium decorative surfaces' },
            ].map((category, idx) => (
              <div key={idx} className="bg-card rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer">
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Bajrang Ply?</h2>
            <p className="text-xl text-muted-foreground">Trusted by thousands of homeowners, designers & contractors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality Materials', desc: 'Premium grade products for durability' },
              { title: 'Wide Selection', desc: '500+ variants to choose from' },
              { title: 'Expert Guidance', desc: 'Professional advice from experienced team' },
              { title: 'Wholesale & Retail', desc: 'Competitive pricing for all volumes' },
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-8 rounded-lg shadow text-center hover:shadow-lg transition">
                <div className="text-primary text-5xl mb-4 flex justify-center">
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground">Our bestsellers & customer favorites</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Premium Birch Plywood', price: 'Starting ₹500/sqft', rating: 5 },
              { name: 'Glossy Laminates', price: 'Starting ₹300/sqft', rating: 5 },
              { name: 'Natural Veneers', price: 'Starting ₹400/sqft', rating: 4.5 },
            ].map((product, idx) => (
              <div key={idx} className="bg-card rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt={product.name}
                    className="w-full h-full object-cover"
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
                  <p className="text-muted-foreground mb-4">{product.price}</p>
                  <button className="w-full py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition font-semibold">
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Trusted Brand Partners</h2>
          <p className="text-xl text-muted-foreground mb-12">We deal with leading brands in the industry</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-card rounded-lg p-8 w-full flex items-center justify-center h-24">
                <div className="text-muted-foreground font-semibold">Brand {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Inspiration */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Project Inspiration</h2>
            <p className="text-xl text-muted-foreground">Real projects by our customers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Modern Kitchen',
              'Bedroom Wardrobe',
              'Office Paneling',
              'Living Room Interior',
              'Modular Furniture',
              'Commercial Setup',
            ].map((project, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg h-64 cursor-pointer">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt={project}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center">{project}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Verma', role: 'Homeowner', text: 'Excellent quality plywood and great customer service. Highly recommended!' },
              { name: 'Priya Sharma', role: 'Interior Designer', text: 'Best variety of laminates and veneers. Quick delivery and support.' },
              { name: 'Amit Singh', role: 'Contractor', text: 'Reliable source for all materials. Wholesale rates are very competitive.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-card p-8 rounded-lg shadow hover:shadow-lg transition">
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
            ))}
          </div>
        </div>
      </section>

      {/* Store Location CTA */}
      <section className="py-20 bg-primary text-primary-foreground" id="contact">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Our Store</h2>
          <p className="text-xl mb-12">Experience our full product range in person</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <MapPin size={48} className="mb-4" />
              <p className="text-lg">586, Bara Birwa, Near Hotel Piccadilly<br/>Kanpur Road, Lucknow - 226012</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone size={48} className="mb-4" />
              <p className="text-lg"><strong>Call:</strong><br/>+91-XXXXX-XXXXX</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock size={48} className="mb-4" />
              <p className="text-lg"><strong>Hours:</strong><br/>Mon-Sat: 10 AM - 7 PM<br/>Sun: 11 AM - 5 PM</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary-foreground text-primary rounded font-bold hover:opacity-90 transition flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now
            </button>
            <button className="px-8 py-3 bg-primary-foreground text-primary rounded font-bold hover:opacity-90 transition flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              WhatsApp
            </button>
            <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded font-bold hover:bg-primary-foreground hover:text-primary transition flex items-center justify-center gap-2">
              <MapPin size={20} />
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Enquiry Form CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-2xl mx-auto px-4">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bajrang Ply</h3>
              <p className="text-sm opacity-80">Premium plywood and interior materials dealer in Lucknow</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Plywood</a></li>
                <li><a href="#" className="hover:opacity-100">Laminates</a></li>
                <li><a href="#" className="hover:opacity-100">Veneers</a></li>
                <li><a href="#" className="hover:opacity-100">Hardware</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100">About Us</a></li>
                <li><a href="#gallery" className="hover:opacity-100">Gallery</a></li>
                <li><a href="#contact" className="hover:opacity-100">Contact</a></li>
                <li><a href="#" className="hover:opacity-100">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm opacity-80 mb-2">📍 Lucknow, UP</p>
              <p className="text-sm opacity-80 mb-2">📞 +91-XXXXX-XXXXX</p>
              <p className="text-sm opacity-80">💬 WhatsApp Available</p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Bajrang Ply. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-40">
        <MessageCircle size={28} />
      </button>
    </>
  )
}
