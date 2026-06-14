'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const galleryItems = [
  { id: 1, title: 'Modern Kitchen Design', category: 'Kitchen', image: '/images/gallery-01.jpg', desc: 'Premium plywood cabinets with glossy laminates' },
  { id: 2, title: 'Bedroom Wardrobe', category: 'Wardrobe', image: '/images/gallery-02.jpg', desc: 'Floor-to-ceiling birch plywood wardrobe' },
  { id: 3, title: 'Office Paneling', category: 'Commercial', image: '/images/gallery-03.jpg', desc: 'Professional wooden paneling for corporate office' },
  { id: 4, title: 'Living Room Interior', category: 'Living Room', image: '/images/gallery-04.jpg', desc: 'Feature wall with charcoal panels' },
  { id: 5, title: 'Modular Furniture', category: 'Furniture', image: '/images/gallery-05.jpg', desc: 'Custom modular storage solutions' },
  { id: 6, title: 'Commercial Store', category: 'Commercial', image: '/images/gallery-06.jpg', desc: 'Premium retail display with veneers' },
  { id: 7, title: 'Bathroom Vanity', category: 'Bathroom', image: '/images/gallery-07.jpg', desc: 'Moisture-resistant HDHMR board setup' },
  { id: 8, title: 'TV Unit Design', category: 'Living Room', image: '/images/gallery-08.jpg', desc: 'Modern TV unit with integrated storage' },
  { id: 9, title: 'Kids Room', category: 'Wardrobe', image: '/images/gallery-09.jpg', desc: 'Colorful and functional kids room design' },
  { id: 10, title: 'Study Area', category: 'Commercial', image: '/images/gallery-10.jpg', desc: 'Professional study desk and shelving' },
  { id: 11, title: 'Dining Setup', category: 'Kitchen', image: '/images/gallery-11.jpg', desc: 'Elegant dining room with wooden finishes' },
  { id: 12, title: 'Hall Paneling', category: 'Living Room', image: '/images/gallery-12.jpg', desc: 'Beautiful decorative wooden wall paneling' },
  { id: 13, title: 'Luxury Wall Panel', category: 'Living Room', image: '/images/gallery-13.jpg', desc: 'Statement wall panels for premium interiors' },
  { id: 14, title: 'Premium Showroom', category: 'Commercial', image: '/images/gallery-14.jpg', desc: 'Bajrang Plywood showroom interior showcase' },
  { id: 15, title: 'Designer Wardrobe', category: 'Wardrobe', image: '/images/gallery-15.jpg', desc: 'Custom designed wardrobe with premium finish' },
  { id: 16, title: 'Wooden Flooring', category: 'Furniture', image: '/images/gallery-16.jpg', desc: 'Engineered wood flooring for elegant spaces' },
  { id: 17, title: 'Modular Kitchen', category: 'Kitchen', image: '/images/gallery-17.jpg', desc: 'Modern modular kitchen with laminates' },
  { id: 18, title: 'Lounge Area', category: 'Living Room', image: '/images/gallery-18.jpg', desc: 'Premium lounge designed with wood finishes' },
  { id: 19, title: 'Office Cabin', category: 'Commercial', image: '/images/gallery-19.jpg', desc: 'Executive cabin with rich wood paneling' },
  { id: 20, title: 'Master Bedroom', category: 'Wardrobe', image: '/images/gallery-20.jpg', desc: 'Master bedroom with integrated wardrobe' },
  { id: 21, title: 'Pooja Unit', category: 'Furniture', image: '/images/gallery-21.jpg', desc: 'Traditional pooja unit crafted in premium wood' },
  { id: 22, title: 'Dining Room', category: 'Kitchen', image: '/images/gallery-22.jpg', desc: 'Elegant dining with wooden furniture' },
  { id: 23, title: 'Kids Study', category: 'Furniture', image: '/images/gallery-23.jpg', desc: 'Compact kids study desk and shelving' },
  { id: 24, title: 'Boutique Interior', category: 'Commercial', image: '/images/gallery-24.jpg', desc: 'Retail boutique with premium wood finishes' },
  { id: 25, title: 'Open Kitchen', category: 'Kitchen', image: '/images/gallery-25.jpg', desc: 'Open plan kitchen with charcoal accents' },
]

const categories = ['All', 'Kitchen', 'Wardrobe', 'Living Room', 'Bathroom', 'Furniture', 'Commercial']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <>
      <SiteHeader />

      <div className="mt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Inspiration</h1>
            <p className="text-xl text-muted-foreground">Real projects by our customers. Get inspired by our work.</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded transition font-semibold ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border hover:border-primary text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-lg h-64 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold text-center mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm text-center px-4">{item.desc}</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                  {item.category}
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-xl">No projects found in this category.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
            <p className="text-lg mb-6">Visit our showroom to explore the complete range of products and designs</p>
            <a href="/#contact" className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded font-bold hover:opacity-90 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <SiteFooter />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 flex items-center justify-between p-4 bg-card border-b border-border">
              <h2 className="text-2xl font-bold text-foreground">{selectedImage.title}</h2>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-muted-foreground hover:text-foreground transition"
              >
                <X size={28} />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Category</p>
                  <p className="text-lg font-semibold text-foreground">{selectedImage.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Description</p>
                  <p className="text-lg text-foreground">{selectedImage.desc}</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground mb-3">Interested in a similar design?</p>
                  <a href="/#contact" className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-accent transition">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
