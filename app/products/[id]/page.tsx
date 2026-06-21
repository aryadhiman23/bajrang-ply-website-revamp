'use client'

import { Phone, Star } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { telHref, whatsappHref } from '@/lib/site-config'

/* Brand glyph for WhatsApp */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  )
}

const productDetails = {
  1: {
    name: 'Wigwam E0 Plywood',
    category: 'Plywood',
    image: '/images/product-plywood-wigwam.jpg',
    rating: 5,
    reviews: 245,
    description: 'Premium quality birch plywood manufactured with strict quality control. Perfect for high-end furniture and interior applications.',
    features: [
      'High density and uniform grain',
      'Excellent strength-to-weight ratio',
      'Resistant to warping and moisture',
      'Available in multiple thicknesses',
      'Eco-friendly manufacturing process'
    ],
    specifications: {
      'Thickness': ['6mm', '9mm', '12mm', '18mm'],
      'Finish': 'Matt & Glossy',
      'Color': 'Natural Birch',
      'Grade': 'BB Grade',
      'Moisture Content': '8-12%',
      'Density': '600-700 kg/m³'
    },
    applications: [
      'Furniture Manufacturing',
      'Built-in Wardrobes',
      'Kitchen Cabinets',
      'Wall Partitions',
      'Interior Paneling'
    ],
    relatedProducts: [2, 5, 7],
    inStock: true,
    availability: 'In Stock'
  },
  2: {
    name: 'Engineered Plywood',
    category: 'Plywood',
    image: '/images/product-plywood-breathe.jpg',
    rating: 4.5,
    reviews: 189,
    description: 'Cost-effective engineered plywood with excellent durability and stability. Ideal for projects requiring reliable performance.',
    features: [
      'Good strength and dimensional stability',
      'High quality construction',
      'Easy to work with',
      'Suitable for wide range of applications',
      'Bonded with waterproof adhesive'
    ],
    specifications: {
      'Thickness': ['6mm', '9mm', '12mm'],
      'Finish': 'Natural',
      'Color': 'Light Brown',
      'Grade': 'WBP Grade',
      'Moisture Content': '9-13%',
      'Density': '550-650 kg/m³'
    },
    applications: [
      'Cabinet Making',
      'Shelving Units',
      'Flooring Support',
      'Commercial Interiors',
      'Budget Furniture'
    ],
    relatedProducts: [1, 4, 9],
    inStock: true,
    availability: 'In Stock - Bulk Discount Available'
  }
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id)
  const product = productDetails[productId as keyof typeof productDetails]

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary hover:text-accent">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SiteHeader />

      <div className="mt-20 min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div>
              <div className="bg-muted rounded-lg p-6 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded"
                />
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-muted rounded p-2 cursor-pointer hover:ring-2 hover:ring-primary">
                    <img src={product.image} alt={`View ${i}`} className="w-16 h-16 object-cover rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl font-bold text-foreground mb-3">{product.name}</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Availability */}
              <div className="bg-muted rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  {product.availability}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

              {/* Quick Specs */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Available Variants</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {product.specifications['Thickness']?.map((thickness: string) => (
                    <button
                      key={thickness}
                      className="px-4 py-2 border-2 border-border rounded hover:border-primary hover:bg-primary hover:text-primary-foreground transition"
                    >
                      {thickness}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={telHref} className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded text-lg font-semibold hover:bg-accent transition flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now for Quote
                </a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 bg-secondary text-secondary-foreground rounded text-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                  <WhatsAppIcon size={20} />
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Applications</h2>
              <ul className="space-y-3">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-card rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b border-border pb-4">
                  <p className="text-muted-foreground text-sm mb-2">{key}</p>
                  <p className="text-foreground font-semibold">
                    {Array.isArray(value) ? value.join(', ') : value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {product.relatedProducts.map(relatedId => (
                <Link
                  key={relatedId}
                  href={`/products/${relatedId}`}
                  className="bg-card rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  <div className="bg-muted h-40 overflow-hidden">
                    <img src={`/images/product-${relatedId === 1 ? 'plywood-wigwam' : relatedId === 2 ? 'plywood-breathe' : 'laminates-dark'}.jpg`} alt="Related product" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground hover:text-primary transition">View Related Product</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
