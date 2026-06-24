'use client'

import { useState } from 'react'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig, telHref, whatsappHref, mapHref } from '@/lib/site-config'

/* Brand glyph for WhatsApp */
function WhatsAppIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  )
}

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
                <WhatsAppIcon size={32} className="text-primary mx-auto mb-4" />
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
                <WhatsAppIcon size={40} className="text-primary mx-auto mb-4" />
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

// In /contact page
export const metadata = {
  title: "Contact Us — Lucknow Showroom | Bajrang Plywood",
  description: "Contact Bajrang Plywood in Lucknow — call, WhatsApp, or visit our store at 586 Bara Birwa, Kanpur Road. Open Mon–Sun, 10 AM to 8 PM.",
}

