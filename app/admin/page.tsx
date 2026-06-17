'use client'

import { useSession, signOut } from '@/lib/auth-client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getProducts } from '@/app/actions/products'
import { getArticles } from '@/app/actions/articles'
import { LayoutDashboard, Package, FileText, PlusCircle, LogOut, Loader2 } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()
  const { data: session, isPending } = useSession()
  const [stats, setStats] = useState({ products: 0, articles: 0, published: 0 })
  const [statsLoading, setStatsLoading] = useState(true)

  useEffect(() => {
    // Wait until session is resolved
    if (isPending) return

    if (!session?.user) {
      router.push('/sign-in')
      return
    }

    // Fetch stats
    ;(async () => {
      try {
        const [prods, arts] = await Promise.all([getProducts(), getArticles()])
        setStats({
          products: prods.length,
          articles: arts.length,
          published: arts.filter((a: any) => a.published).length,
        })
      } catch {
        // stats are non-critical
      } finally {
        setStatsLoading(false)
      }
    })()
  }, [session, isPending, router])

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  // Show loading spinner while session is being fetched
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-3">
          <Loader2 size={36} className="animate-spin text-primary" />
          <p className="text-muted-foreground text-sm">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // Session resolved but no user — redirect handled in useEffect
  if (!session?.user) return null

  const user = session.user

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card shadow-lg flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2 mb-1">
            <LayoutDashboard size={20} className="text-primary" />
            <h1 className="text-lg font-bold text-primary">Bajrang Plywood</h1>
          </div>
          <p className="text-xs text-muted-foreground">Admin Panel</p>
        </div>

        <nav className="flex flex-col gap-1 p-4 flex-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-2.5 rounded bg-primary text-primary-foreground font-medium"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center gap-3 px-4 py-2.5 rounded text-foreground hover:bg-muted transition"
          >
            <Package size={18} />
            Manage Products
          </Link>
          <Link
            href="/admin/articles"
            className="flex items-center gap-3 px-4 py-2.5 rounded text-foreground hover:bg-muted transition"
          >
            <FileText size={18} />
            Manage Articles
          </Link>
        </nav>

        {/* User + Logout */}
        <div className="p-4 border-t border-border">
          <p className="text-sm font-semibold text-foreground truncate">{user.name}</p>
          <p className="text-xs text-muted-foreground truncate mb-3">{user.email}</p>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-destructive text-white rounded hover:opacity-90 transition text-sm font-semibold"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-1">
            Welcome back, {user.name.split(' ')[0]}
          </h2>
          <p className="text-muted-foreground mb-10">
            Manage your products, articles, and inventory from here.
          </p>

          {/* Quick Actions */}
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <Link
              href="/admin/products/new"
              className="flex items-start gap-4 p-5 bg-card rounded-lg shadow hover:shadow-md transition border-l-4 border-primary"
            >
              <PlusCircle size={24} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">Add New Product</h4>
                <p className="text-sm text-muted-foreground">Create a new product with images and details</p>
              </div>
            </Link>

            <Link
              href="/admin/articles/new"
              className="flex items-start gap-4 p-5 bg-card rounded-lg shadow hover:shadow-md transition border-l-4 border-secondary"
            >
              <PlusCircle size={24} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">Write New Article</h4>
                <p className="text-sm text-muted-foreground">Create and publish new blog articles</p>
              </div>
            </Link>

            <Link
              href="/admin/products"
              className="flex items-start gap-4 p-5 bg-card rounded-lg shadow hover:shadow-md transition border-l-4 border-accent"
            >
              <Package size={24} className="text-accent-foreground mt-0.5 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">View All Products</h4>
                <p className="text-sm text-muted-foreground">Edit, delete, or manage existing products</p>
              </div>
            </Link>

            <Link
              href="/admin/articles"
              className="flex items-start gap-4 p-5 bg-card rounded-lg shadow hover:shadow-md transition border-l-4 border-ring"
            >
              <FileText size={24} className="text-ring mt-0.5 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">View All Articles</h4>
                <p className="text-sm text-muted-foreground">Edit, delete, or publish articles</p>
              </div>
            </Link>
          </div>

          {/* Stats */}
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-muted-foreground text-sm mb-2">Total Products</p>
              <p className="text-3xl font-bold text-primary">
                {statsLoading ? <Loader2 size={24} className="animate-spin" /> : stats.products}
              </p>
            </div>
            <div className="p-6 bg-secondary/20 rounded-lg border border-secondary/30">
              <p className="text-muted-foreground text-sm mb-2">Total Articles</p>
              <p className="text-3xl font-bold text-foreground">
                {statsLoading ? <Loader2 size={24} className="animate-spin" /> : stats.articles}
              </p>
            </div>
            <div className="p-6 bg-muted rounded-lg border border-border">
              <p className="text-muted-foreground text-sm mb-2">Published Articles</p>
              <p className="text-3xl font-bold text-foreground">
                {statsLoading ? <Loader2 size={24} className="animate-spin" /> : stats.published}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
