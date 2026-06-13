'use client'

import { createProduct } from '@/app/actions/products'
import { useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'

const categories = ['Plywood', 'Laminates', 'Veneers', 'Hardware', 'Charcoal Panels', 'Corian Surfaces', 'Other']

export default function NewProductPage() {
  const router = useRouter()
  const { data: session, isPending } = useSession()
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    category: 'Plywood',
    description: '',
    useFor: '',
  })

  useEffect(() => {
    if (isPending) return
    if (!session?.user) router.push('/sign-in')
  }, [session, isPending, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await createProduct({
        name: formData.name,
        category: formData.category,
        description: formData.description,
        useFor: formData.useFor,
        images: [],
      })
      router.push('/admin/products')
    } catch (error) {
      alert('Error creating product: ' + (error as any).message)
      setSubmitting(false)
    }
  }

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 size={36} className="animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-6">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link href="/admin/products" className="text-primary hover:text-accent transition">
            <ChevronLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Add New Product</h1>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow">
          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Product Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., Premium Birch Plywood"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Category *</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Description *</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Detailed product description..."
              />
            </div>

            {/* Use For */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Use For (Optional)</label>
              <textarea
                value={formData.useFor}
                onChange={(e) => setFormData({ ...formData, useFor: e.target.value })}
                rows={2}
                className="w-full px-4 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Applications and use cases..."
              />
            </div>

            {/* Note */}
            <div className="p-4 bg-muted rounded text-sm text-muted-foreground">
              <p><strong>Note:</strong> Image uploads will be available in a future update. For now, you can add images through the edit page.</p>
            </div>

            {/* Submit */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition font-semibold disabled:opacity-50"
              >
                {submitting ? 'Creating...' : 'Create Product'}
              </button>
              <Link
                href="/admin/products"
                className="px-6 py-2 border border-border text-foreground rounded hover:bg-muted transition font-semibold"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
