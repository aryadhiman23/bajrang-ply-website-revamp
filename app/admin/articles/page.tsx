'use client'

import { deleteArticle, getArticles } from '@/app/actions/articles'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronLeft, Plus, Trash2, Edit2 } from 'lucide-react'

interface Article {
  id: number
  title: string
  description: string
  content: string
  published: boolean
  images: string
}

export default function ArticlesPage() {
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const session = await authClient.getSession()
      if (!session?.user) {
        router.push('/sign-in')
      } else {
        const data = await getArticles()
        setArticles(data)
        setLoading(false)
      }
    })()
  }, [router])

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this article?')) {
      await deleteArticle(id)
      setArticles(articles.filter((a) => a.id !== id))
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
            <h1 className="text-3xl font-bold text-foreground">Manage Articles</h1>
          </div>
          <Link
            href="/admin/articles/new"
            className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition font-semibold"
          >
            <Plus size={20} />
            Write Article
          </Link>
        </div>
      </div>

      {/* Articles List */}
      <div className="max-w-7xl mx-auto p-6">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-6">No articles yet. Write your first article!</p>
            <Link
              href="/admin/articles/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-accent transition font-semibold"
            >
              <Plus size={20} />
              Write First Article
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition border border-border"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{article.title}</h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          article.published
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {article.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{article.description}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{article.content}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/articles/${article.id}/edit`}
                      className="p-2 bg-primary text-primary-foreground rounded hover:bg-accent transition"
                      title="Edit"
                    >
                      <Edit2 size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(article.id)}
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
