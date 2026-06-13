'use client'

import Link from 'next/link'
import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-card shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <img src="/bajrang-ply-logo.png" alt="Bajrang Ply" className="h-16 w-auto" />
          <a href="/" className="text-foreground hover:text-primary transition">← Back to Home</a>
        </div>
      </header>

      <div className="mt-20 min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-6">About Bajrang Ply</h1>
              <p className="text-2xl text-primary font-semibold">More Than Just Plywood</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary/20 rounded-lg h-96 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Bajrang Ply facility"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                  Established in 2004, Bajrang Ply has been serving Lucknow and surrounding regions for over 20 years with premium quality plywood and interior materials. What started as a small showroom has grown into a trusted destination for homeowners, designers, contractors, and builders.
                </p>
                <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                  We understand that quality matters. Every product we stock is carefully selected from trusted manufacturers, ensuring durability, reliability, and value for money. From plywood to laminates, veneers to hardware – we've got everything your interior project needs.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our commitment to excellence and customer satisfaction has made us the go-to choice for thousands of happy customers across Lucknow, Kanpur, and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-primary-foreground/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To be the most trusted and convenient one-stop shop for quality plywood and interior materials in Lucknow and the region. We empower our customers to create beautiful, durable, and functional spaces with premium products and expert guidance.
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To become the leading premium interior materials destination known for uncompromising quality, competitive pricing, and exceptional customer service. We aim to make high-quality materials accessible to everyone – from homeowners to commercial builders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Quality First', desc: 'Premium products from trusted brands' },
                { title: 'Customer Focus', desc: 'Your satisfaction is our priority' },
                { title: 'Transparency', desc: 'Honest pricing and clear communication' },
                { title: 'Expertise', desc: 'Professional guidance at every step' }
              ].map((value, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6 shadow text-center hover:shadow-lg transition">
                  <CheckCircle2 size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Bajrang Ply?</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="flex gap-6">
                  <Award className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">20+ Years Experience</h3>
                    <p className="text-muted-foreground">Decades of expertise in the plywood and interior materials industry</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Users className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">10,000+ Satisfied Customers</h3>
                    <p className="text-muted-foreground">From homeowners to professional designers and contractors</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <TrendingUp className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Continuous Growth</h3>
                    <p className="text-muted-foreground">Expanding our product range and service reach every year</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="flex gap-6">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Premium Product Range</h3>
                    <p className="text-muted-foreground">500+ variants covering plywood, laminates, veneers, hardware, and more</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Expert Guidance</h3>
                    <p className="text-muted-foreground">Professional team ready to help with selection and specifications</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Competitive Pricing</h3>
                    <p className="text-muted-foreground">Wholesale and retail rates for all customer segments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Rajesh Gupta', role: 'Owner & Founder', desc: 'Leading Bajrang Ply since 2004 with passion for quality' },
                { name: 'Priya Singh', role: 'Product Manager', desc: 'Expert in sourcing premium materials and managing inventory' },
                { name: 'Amit Kumar', role: 'Customer Relations', desc: '20 years of experience in customer service excellence' }
              ].map((member, idx) => (
                <div key={idx} className="bg-card rounded-lg shadow p-8 text-center hover:shadow-lg transition">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img src="/placeholder.svg?height=100&width=100" alt={member.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <p>Years in Business</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p>Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p>Product Variants</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p>Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-muted-foreground mb-8">Visit our showroom or connect with our experts for personalized recommendations</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="px-8 py-3 bg-primary text-primary-foreground rounded font-bold hover:bg-accent transition">
                Explore Products
              </Link>
              <Link href="/#contact" className="px-8 py-3 border-2 border-primary text-primary rounded font-bold hover:bg-primary hover:text-primary-foreground transition">
                Visit Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
