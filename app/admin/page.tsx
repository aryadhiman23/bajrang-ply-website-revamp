'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const session = await authClient.getSession()
      if (session?.user) {
        setUser(session.user as any)
      } else {
        router.push('/sign-in')
      }
      setLoading(false)
    })()
  }, [router])

  const handleLogout = async () => {
    await authClient.signOut()
    router.push('/')
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card shadow-lg">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-primary mb-8">Bajrang Ply Admin</h1>
          <nav className="space-y-4">
            <Link
              href="/admin"
              className="block px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/products"
              className="block px-4 py-2 rounded text-foreground hover:bg-muted transition"
            >
              Manage Products
            </Link>
            <Link
              href="/admin/articles"
              className="block px-4 py-2 rounded text-foreground hover:bg-muted transition"
            >
              Manage Articles
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 w-64 p-6 border-t border-border">
          <div className="text-sm text-muted-foreground mb-4">
            <p className="font-semibold">{user?.name}</p>
            <p className="text-xs">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-destructive text-white rounded hover:opacity-90 transition text-sm font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground mb-4">Welcome to Admin Panel</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Manage your products, articles, and inventory from here.
          </p>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/admin/products/new"
              className="p-6 bg-card rounded-lg shadow hover:shadow-lg transition border-l-4 border-primary"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Add New Product</h3>
              <p className="text-muted-foreground">Create a new product with images and details</p>
            </Link>

            <Link
              href="/admin/articles/new"
              className="p-6 bg-card rounded-lg shadow hover:shadow-lg transition border-l-4 border-secondary"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Write New Article</h3>
              <p className="text-muted-foreground">Create and publish new blog articles</p>
            </Link>

            <Link
              href="/admin/products"
              className="p-6 bg-card rounded-lg shadow hover:shadow-lg transition border-l-4 border-accent"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">View All Products</h3>
              <p className="text-muted-foreground">Edit, delete, or manage existing products</p>
            </Link>

            <Link
              href="/admin/articles"
              className="p-6 bg-card rounded-lg shadow hover:shadow-lg transition border-l-4 border-muted"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">View All Articles</h3>
              <p className="text-muted-foreground">Edit, delete, or publish articles</p>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Stats</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-primary/10 rounded-lg">
                <p className="text-muted-foreground text-sm mb-2">Total Products</p>
                <p className="text-3xl font-bold text-primary">-</p>
              </div>
              <div className="p-6 bg-secondary/10 rounded-lg">
                <p className="text-muted-foreground text-sm mb-2">Total Articles</p>
                <p className="text-3xl font-bold text-secondary">-</p>
              </div>
              <div className="p-6 bg-accent/10 rounded-lg">
                <p className="text-muted-foreground text-sm mb-2">Published Articles</p>
                <p className="text-3xl font-bold text-accent">-</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
