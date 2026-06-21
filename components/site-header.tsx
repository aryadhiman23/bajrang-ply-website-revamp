'use client'

import Link from 'next/link'
// NOTE: LogIn & LayoutDashboard are temporarily unused (Sign In / Admin disabled).
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { telHref, whatsappHref } from '@/lib/site-config'

/* Brand glyph for WhatsApp */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.6 14.3c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.2.4-.9 1.1-1.1 1.3-.2.3-.5.3-.9.1-1.8-.9-2.9-1.6-4.1-3.7-.3-.5.3-1.5.1-2 0-.4-1.1-2.6-1.5-3.6-.3-.8-.6-.7-1-.7-.3 0-.6 0-.9 0-.3 0-.8.2-1.2.6-1.4 1.4-1.8 3.4-1.6 5.3.3 2.7 1.9 5.3 4.6 7.1 2 1.2 3.6 1.5 5.1 1.8 1.1.2 2.2 0 3.1-.9 1.1-1.1 1.4-2.7 1.1-3.8-.3-.9-1.1-1.5-1.5-1.7zm8-4.3C21.3 5 17.2 1 12 1 6.5 1 2 5.5 2 11s4.5 10 10 10c1.8 0 3.5-.4 5.1-1.3l5.5 1.8c.5.2 1 .1 1.3-.2.3-.3.4-.8.2-1.3l-1.8-5.5c.8-1.5 1.3-3.2 1.3-5z" />
    </svg>
  )
}

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-card shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/">
          <img src="/images/bajrang-logo.png" alt="Bajrang Plywood" className="h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition">
              {link.label}
            </Link>
          ))}
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
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition">
                {link.label}
              </Link>
            ))}
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
  )
}
