'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Search, Filter, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Birch Plywood',
    category: 'Plywood',
    price: '₹500-₹800/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 5,
    description: 'Premium quality birch plywood for furniture & interior applications',
    thickness: ['6mm', '9mm', '12mm', '18mm'],
    finish: 'Matt & Glossy',
    application: 'Furniture, Wardrobes, Partitions'
  },
  {
    id: 2,
    name: 'Engineered Plywood',
    category: 'Plywood',
    price: '₹300-₹500/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    description: 'Cost-effective engineered plywood with excellent durability',
    thickness: ['6mm', '9mm', '12mm'],
    finish: 'Natural',
    application: 'Cabinets, Shelving, Flooring'
  },
  {
    id: 3,
    name: 'Glossy Laminates',
    category: 'Laminates',
    price: '₹250-₹450/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 5,
    description: 'High-gloss laminates with vibrant colors and patterns',
    thickness: ['0.8mm', '1.0mm'],
    finish: 'Glossy',
    application: 'Kitchen Cabinets, Wardrobes, Wall Paneling'
  },
  {
    id: 4,
    name: 'Matte Laminates',
    category: 'Laminates',
    price: '₹200-₹400/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    description: 'Elegant matte laminates for sophisticated interiors',
    thickness: ['0.8mm', '1.0mm'],
    finish: 'Matte',
    application: 'Modern Interiors, Office Setup'
  },
  {
    id: 5,
    name: 'Natural Wood Veneer',
    category: 'Veneers',
    price: '₹350-₹700/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 5,
    description: 'Premium natural wood veneers from selected sources',
    thickness: ['0.6mm', '0.8mm'],
    finish: 'Natural Wood',
    application: 'Premium Furniture, Luxury Interiors'
  },
  {
    id: 6,
    name: 'Decorative Veneer',
    category: 'Veneers',
    price: '₹200-₹400/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    description: 'Decorative veneers with artistic patterns and finishes',
    thickness: ['0.6mm', '0.8mm'],
    finish: 'Decorative',
    application: 'Feature Walls, Doors, Ceilings'
  },
  {
    id: 7,
    name: 'Stainless Steel Hardware',
    category: 'Hardware',
    price: '₹50-₹300/piece',
    image: '/placeholder.svg?height=300&width=400',
    rating: 5,
    description: 'Premium stainless steel hardware for durability',
    thickness: 'N/A',
    finish: 'Polished',
    application: 'Handles, Hinges, Locks'
  },
  {
    id: 8,
    name: 'Brass Hardware',
    category: 'Hardware',
    price: '₹100-₹400/piece',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    description: 'Elegant brass hardware with traditional designs',
    thickness: 'N/A',
    finish: 'Antique, Gold',
    application: 'Premium Wardrobes, Doors'
  },
  {
    id: 9,
    name: 'Charcoal Accent Panels',
    category: 'Charcoal Panels',
    price: '₹400-₹600/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    description: 'Modern charcoal panels for accent walls and ceilings',
    thickness: ['6mm', '9mm'],
    finish: 'Textured',
    application: 'Feature Walls, Ceilings, Partitions'
  },
  {
    id: 10,
    name: 'Solid Surface - White',
    category: 'Corian Surfaces',
    price: '₹2000-₹3000/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 5,
    description: 'Premium solid surface with seamless integration',
    thickness: ['12mm', '16mm'],
    finish: 'Glossy, Matte',
    application: 'Countertops, Vanity, Cladding'
  },
  {
    id: 11,
    name: 'Solid Surface - Colors',
    category: 'Corian Surfaces',
    price: '₹2000-₹3500/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 5,
    description: 'Premium colored solid surfaces with unique finishes',
    thickness: ['12mm', '16mm'],
    finish: 'Custom',
    application: 'Designer Kitchens, Luxury Interiors'
  },
  {
    id: 12,
    name: 'HDHMR Board',
    category: 'Boards',
    price: '₹400-₹700/sqft',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    description: 'High Density High Moisture Resistant board for wet areas',
    thickness: ['6mm', '9mm', '12mm'],
    finish: 'Natural',
    application: 'Bathrooms, Kitchens, Balconies'
  }
]

const categories = ['All', 'Plywood', 'Laminates', 'Veneers', 'Hardware', 'Charcoal Panels', 'Corian Surfaces', 'Boards']

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
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Bajrang Ply - Products</div>
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
