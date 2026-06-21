'use client'

import Link from 'next/link'
// NOTE: LogIn & LayoutDashboard are temporarily unused (Sign In / Admin disabled).
import { Phone, MessageCircle, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { telHref, whatsappHref } from '@/lib/site-config'

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
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
