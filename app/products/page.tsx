'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Search, Filter, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Wigwam E0 Plywood',
    category: 'Plywood',
    price: '₹500-₹800/sqft',
    image: '/images/product-plywood-wigwam.jpg',
    rating: 5,
    description: 'E0 grade emission, calibrated, termite & borer proof plywood for premium interiors',
    thickness: ['6mm', '9mm', '12mm', '18mm'],
    finish: 'Matt & Glossy',
    application: 'Furniture, Wardrobes, Partitions'
  },
  {
    id: 2,
    name: 'Engineered Plywood',
    category: 'Plywood',
    price: '₹300-₹500/sqft',
    image: '/images/product-plywood-breathe.jpg',
    rating: 4.5,
    description: 'Breath healthy plywood — near zero formaldehyde for healthy living spaces',
    thickness: ['6mm', '9mm', '12mm'],
    finish: 'Natural',
    application: 'Cabinets, Shelving, Flooring'
  },
  {
    id: 3,
    name: 'Thermo Sheet 1.25mm',
    category: 'Laminates',
    price: '₹250-₹450/sqft',
    image: '/images/product-thermo-sheet.jpg',
    rating: 5,
    description: '1.25mm premium thickness thermo sheet — durable, sleek & versatile surface design',
    thickness: ['1.25mm'],
    finish: 'Glossy, Matte, Wood',
    application: 'Kitchen Cabinets, Wardrobes, Wall Paneling'
  },
  {
    id: 4,
    name: 'Premium Dark Laminates',
    category: 'Laminates',
    price: '₹200-₹400/sqft',
    image: '/images/product-laminates-dark.jpg',
    rating: 4.5,
    description: 'Luxury finish series — scratch resistant, matte/gloss/textured options',
    thickness: ['0.8mm', '1.0mm'],
    finish: 'Matte / Gloss / Textured',
    application: 'Kitchen, Wardrobe, Furniture'
  },
  {
    id: 5,
    name: 'Plusetone Artistic Laminates',
    category: 'Laminates',
    price: '₹350-₹700/sqft',
    image: '/images/product-laminates-plusetone.jpg',
    rating: 5,
    description: 'Handcraft premium laminates with artistic Indian motif designs',
    thickness: ['0.8mm', '1.0mm'],
    finish: 'Handcraft Artistic',
    application: 'Feature Walls, Furniture, Premium Interiors'
  },
  {
    id: 6,
    name: 'Artistic Interior Laminates',
    category: 'Laminates',
    price: '₹200-₹400/sqft',
    image: '/images/product-laminates-artistic.jpg',
    rating: 4.5,
    description: 'Hand crafted elegance for your interiors — unique designs, premium finish',
    thickness: ['0.8mm', '1.0mm'],
    finish: 'Decorative Artistic',
    application: 'Walls, Furniture, Doors'
  },
  {
    id: 7,
    name: 'Smart Door Locks — IPSA',
    category: 'Hardware',
    price: '₹8,000-₹20,000/piece',
    image: '/images/product-hardware-locks.jpg',
    rating: 5,
    description: 'Smart security simplified — fingerprint, password, RFID, Bluetooth & app control',
    thickness: 'N/A',
    finish: 'Bronze / Silver',
    application: 'Main Door, Bedroom, Office'
  },
  {
    id: 8,
    name: 'Godrej Digital Safe',
    category: 'Hardware',
    price: '₹5,000-₹15,000/piece',
    image: '/images/product-safe-godrej.jpg',
    rating: 4.5,
    description: 'Where your peace of mind finds a home — Godrej OZONE digital safe',
    thickness: 'N/A',
    finish: 'White / Black',
    application: 'Home Safe, Office Locker'
  },
  {
    id: 9,
    name: 'Premium Charcoal Panels',
    category: 'Charcoal Panels',
    price: '₹400-₹600/sqft',
    image: '/images/product-charcoal-panels.jpg',
    rating: 4.5,
    description: 'Modern walls, luxury impact — premium charcoal panels & louvers, elegant finish',
    thickness: ['6mm', '9mm'],
    finish: 'Textured Charcoal',
    application: 'Feature Walls, TV Unit, Ceilings'
  },
  {
    id: 10,
    name: 'WPC Wood Louvers — Woodex',
    category: 'Charcoal Panels',
    price: '₹500-₹900/sqft',
    image: '/images/product-woodex-louvers.jpg',
    rating: 5,
    description: 'Wood Plastic Composite louvers — durable, weather-resistant, termite-proof for exteriors',
    thickness: ['40mm'],
    finish: 'Natural Wood Texture',
    application: 'Exterior Cladding, Balcony, Garden'
  },
  {
    id: 11,
    name: 'Signature Main Door',
    category: 'Doors',
    price: '₹12,000-₹35,000/door',
    image: '/images/product-doors-signature.jpg',
    rating: 5,
    description: 'The entrance to luxury begins here — signature style, strong build, modern architecture',
    thickness: ['35mm', '40mm'],
    finish: 'Luxury Texture',
    application: 'Main Entrance, Villa Door'
  },
  {
    id: 12,
    name: 'Premium Interior Doors',
    category: 'Doors',
    price: '₹5,000-₹15,000/door',
    image: '/images/product-doors-entrance.jpg',
    rating: 4.5,
    description: 'Entrance to elegance — premium doors for office & home in multiple finishes',
    thickness: ['30mm', '35mm'],
    finish: 'White, Wood, Blue, Grey',
    application: 'Bedroom, Office, Bathroom'
  }
]

const categories = ['All', 'Plywood', 'Laminates', 'Hardware', 'Charcoal Panels', 'Doors']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const filteredProducts = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price-low') return a.price.localeCompare(b.price)
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-card shadow-sm z-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <img src="/bajrang-ply-logo.png" alt="Bajrang Ply" className="h-16 w-auto" />
        </div>
      </header>

      <div className="mt-36 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search & Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border border-border rounded bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-border rounded bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded transition ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border hover:border-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-muted-foreground">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-card rounded-lg shadow hover:shadow-lg transition overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold">
                    {product.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${i < Math.floor(product.rating) ? 'text-primary' : 'text-muted'}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                  {/* Specs */}
                  <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Finish:</strong> {product.finish}</p>
                    <p><strong>Uses:</strong> {product.application}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition font-semibold flex items-center justify-center gap-2">
                      <Phone size={16} />
                      Enquire
                    </button>
                    <button className="flex-1 py-2 bg-secondary text-secondary-foreground rounded hover:opacity-90 transition font-semibold flex items-center justify-center gap-2">
                      <MessageCircle size={16} />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-xl">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-40">
        <MessageCircle size={28} />
      </button>
    </>
  )
}
