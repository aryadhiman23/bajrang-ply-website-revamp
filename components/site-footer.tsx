'use client'

import Link from 'next/link'
import { MessageCircle, MapPin, Phone } from 'lucide-react'
import { siteConfig, telHref, whatsappHref } from '@/lib/site-config'

/* Brand glyphs (lucide build here lacks Instagram/Facebook icons) */
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.16a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  )
}
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.1 23.69v-7.98H6.63v-3.67H9.1v-1.58c0-4.08 1.85-5.98 5.86-5.98.4 0 .95.04 1.47.1.51.07.96.16 1.14.2v3.32a8.6 8.6 0 0 0-.65-.03c-.32-.01-.56-.01-.73-.01-.71 0-1.26.1-1.68.31a1.69 1.69 0 0 0-.68.62c-.26.42-.37 1-.37 1.75v1.3h3.92l-.39 2.1-.29 1.56h-3.24v8.25C19.4 23.24 24 18.18 24 12.04 24 5.42 18.63.04 12 .04S0 5.42 0 12.04c0 5.63 3.87 10.35 9.1 11.65z" />
    </svg>
  )
}
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    // <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    //   <path d="M17.6 14.3c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.2.4-.9 1.1-1.1 1.3-.2.3-.5.3-.9.1-1.8-.9-2.9-1.6-4.1-3.7-.3-.5.3-1.5.1-2 0-.4-1.1-2.6-1.5-3.6-.3-.8-.6-.7-1-.7-.3 0-.6 0-.9 0-.3 0-.8.2-1.2.6-1.4 1.4-1.8 3.4-1.6 5.3.3 2.7 1.9 5.3 4.6 7.1 2 1.2 3.6 1.5 5.1 1.8 1.1.2 2.2 0 3.1-.9 1.1-1.1 1.4-2.7 1.1-3.8-.3-.9-1.1-1.5-1.5-1.7zm8-4.3C21.3 5 17.2 1 12 1 6.5 1 2 5.5 2 11s4.5 10 10 10c1.8 0 3.5-.4 5.1-1.3l5.5 1.8c.5.2 1 .1 1.3-.2.3-.3.4-.8.2-1.3l-1.8-5.5c.8-1.5 1.3-3.2 1.3-5z" />
    // </svg>

    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
  )
}

export function SiteFooter() {
  return (
    <>
      <footer className="bg-foreground text-primary-foreground py-12 pb-[7px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <img src="/images/bajrang-logo.png" alt={siteConfig.brandName} className="h-20 w-auto mb-4" />
              <p className="text-sm opacity-80">{siteConfig.tagline}</p>
              {/* Social links */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition"
                >
                  <InstagramIcon size={18} />
                </a>
                {/* <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition"
                >
                  <FacebookIcon size={18} />
                </a> */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>
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
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-80 mb-2 flex items-start gap-2 hover:opacity-100"
              >
                <MapPin size={14} className="mt-0.5 shrink-0" /> {siteConfig.address.full}
              </a>
              <a href={telHref} className="text-sm opacity-80 mb-2 flex items-center gap-2 hover:opacity-100">
                <Phone size={14} /> {siteConfig.callNumber}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-80 flex items-center gap-2 hover:opacity-100"
              >
                <WhatsAppIcon size={14} /> {siteConfig.whatsappNumber}
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <div className="flex flex-col items-center gap-1 text-sm">
              <p className="text-gray-300">
                © {new Date().getFullYear()} Bajrang Plywood. All rights reserved.
              </p>

              <div className="w-[150px] border-t border-[#5f5f5f] my-3"></div>

              <p className="text-xs text-gray-400">
                Designed and Managed By{" "}
                {/* <a
                  href="https://promotionalwizard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="typing-text font-semibold text-purple-400"
                >
                  Promotional Wizard
                </a> */}
                <a href="https://promotionalwizard.com"
                  target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-400 animate-pulse">
                  Promotional Wizard
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-40"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  )
}
