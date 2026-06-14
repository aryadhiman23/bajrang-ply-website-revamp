'use client'

import Link from 'next/link'
import { MessageCircle, MapPin, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <>
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <img src="/images/bajrang-logo.png" alt="Bajrang Ply" className="h-20 w-auto mb-4" />
              <p className="text-sm opacity-80">Premium plywood and interior materials dealer in Lucknow</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="/products" className="hover:opacity-100">Plywood</Link></li>
                <li><Link href="/products" className="hover:opacity-100">Laminates</Link></li>
                <li><Link href="/products" className="hover:opacity-100">Veneers</Link></li>
                <li><Link href="/products" className="hover:opacity-100">Hardware</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="/about" className="hover:opacity-100">About Us</Link></li>
                <li><Link href="/gallery" className="hover:opacity-100">Gallery</Link></li>
                <li><Link href="/contact" className="hover:opacity-100">Contact</Link></li>
                <li><Link href="/products" className="hover:opacity-100">All Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm opacity-80 mb-2 flex items-center gap-2"><MapPin size={14} /> Lucknow, UP</p>
              <p className="text-sm opacity-80 mb-2 flex items-center gap-2"><Phone size={14} /> +91-XXXXX-XXXXX</p>
              <p className="text-sm opacity-80 flex items-center gap-2"><MessageCircle size={14} /> WhatsApp Available</p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Bajrang Plywood. All rights reserved.{" "}
              <span className="mx-2 text-gray-500">|</span>
              Designed By{" "}
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer"
              >
                Promotional Wizard
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/910000000000"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-40"
      >
        <MessageCircle size={28} />
      </a>
    </>
  )
}
