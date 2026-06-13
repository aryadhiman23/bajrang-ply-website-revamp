'use client'

import { createArticle } from '@/app/actions/articles'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewArticlePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    published: false,
  })

  useEffect(() => {
    (async () => {
      const session = await authClient.getSession()
      if (!session?.user) {
        router.push('/sign-in')
      }
      setLoading(false)
    })()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await createArticle({
        title: formData.title,
        description: formData.description,
        content: formData.content,
        published: formData.published,
        images: [],
      })
      router.push('/admin/articles')
    } catch (error) {
      alert('Error creating article: ' + (error as any).message)
      setSubmitting(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-6">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link href="/admin/articles" className="text-primary hover:text-accent transition">
            <ChevronLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Write New Article</h1>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow">
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Article Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., Top 5 Plywood Trends in 2024"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Description (Short Summary) *</label>
              <input
                type="text"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Brief description for article listing..."
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Article Content *</label>
              <textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={10}
                className="w-full px-4 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your article here..."
              />
            </div>

            {/* Publish Status */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-4 h-4 rounded"
              />
              <label htmlFor="published" className="text-sm font-semibold text-foreground">
                Publish immediately
              </label>
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
                {submitting ? 'Creating...' : 'Create Article'}
              </button>
              <Link
                href="/admin/articles"
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
