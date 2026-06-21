'use client'

import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig, telHref, whatsappHref, mapHref } from '@/lib/site-config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <SiteHeader />

      <div className="mt-20 min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">We&apos;re here to help. Reach out to us anytime.</p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-lg p-6 shadow hover:shadow-lg transition text-center block"
              >
                <MapPin className="text-primary mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">{siteConfig.address.line1}<br/>{siteConfig.address.line2}<br/>{siteConfig.address.line3}<br/>{siteConfig.address.city} - {siteConfig.address.pincode}</p>
              </a>

              <div className="bg-card rounded-lg p-6 shadow hover:shadow-lg transition text-center">
                <Phone className="text-primary mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  <a href={telHref} className="hover:text-primary">{siteConfig.callNumber}</a>
                  <br/>
                  <span className="text-xs">Tap to call</span>
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow hover:shadow-lg transition text-center">
                <MessageCircle className="text-primary mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{siteConfig.whatsappNumber}</a>
                  <br/>
                  <span className="text-xs">Click to chat</span>
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow hover:shadow-lg transition text-center">
                <Clock className="text-primary mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.hours.weekdays}<br/>
                  {siteConfig.hours.sunday}<br/>
                  <span className="text-xs">{siteConfig.hours.holidays}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-card rounded-lg shadow-lg p-10">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Send us a Message</h2>
              <p className="text-muted-foreground text-center mb-8">We&apos;ll get back to you within 24 hours</p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you! Your message has been sent successfully. We&apos;ll contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91-XXXXX-XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="customization">Customization Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground rounded font-bold text-lg hover:bg-accent transition"
                  >
                    Send Message
                  </button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  We&apos;ll never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Find Us On Map</h2>
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted rounded-lg overflow-hidden h-96 flex items-center justify-center hover:bg-muted/70 transition"
            >
              <div className="text-center">
                <MapPin className="text-primary mx-auto mb-4" size={48} />
                <p className="text-foreground font-semibold">{siteConfig.address.full}</p>
                <p className="text-sm text-primary mt-3 font-medium underline">Open in Google Maps</p>
              </div>
            </a>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="py-12 bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Other Ways to Reach Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-8 text-center shadow hover:shadow-lg transition">
                <Phone className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">For immediate assistance, call us during business hours</p>
                <a href={telHref} className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-accent transition">
                  Call Now
                </a>
              </div>

              <div className="bg-card rounded-lg p-8 text-center shadow hover:shadow-lg transition">
                <MessageCircle className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Quick messages and instant responses on WhatsApp</p>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-green-500 text-white rounded font-semibold hover:bg-green-600 transition">
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-card rounded-lg p-8 text-center shadow hover:shadow-lg transition">
                <Mail className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">Visit Showroom</h3>
                <p className="text-muted-foreground mb-4">Experience our full range in person at our store</p>
                <a href={mapHref} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 border-2 border-primary text-primary rounded font-semibold hover:bg-primary hover:text-primary-foreground transition">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </>
  )
}
