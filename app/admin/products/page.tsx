'use client'

import { deleteProduct, getProducts } from '@/app/actions/products'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronLeft, Plus, Trash2, Edit2 } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  description: string
  useFor?: string
  images: string
}

export default function ProductsPage() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const session = await authClient.getSession()
      if (!session?.user) {
        router.push('/sign-in')
      } else {
        const data = await getProducts()
        setProducts(data)
        setLoading(false)
      }
    })()
  }, [router])

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id)
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-primary hover:text-accent transition"
            >
              <ChevronLeft size={24} />
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Manage Products</h1>
          </div>
          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition font-semibold"
          >
            <Plus size={20} />
            Add Product
          </Link>
        </div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto p-6">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-6">No products yet. Create your first product!</p>
            <Link
              href="/admin/products/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-accent transition font-semibold"
            >
              <Plus size={20} />
              Create First Product
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition border border-border"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                      <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{product.description}</p>
                    {product.useFor && (
                      <p className="text-sm text-muted-foreground">
                        <strong>Use For:</strong> {product.useFor}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="p-2 bg-primary text-primary-foreground rounded hover:bg-accent transition"
                      title="Edit"
                    >
                      <Edit2 size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 bg-destructive text-white rounded hover:opacity-90 transition"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
