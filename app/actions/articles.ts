'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { articles } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getArticles() {
  const userId = await getUserId()
  return db
    .select()
    .from(articles)
    .where(eq(articles.userId, userId))
    .orderBy(desc(articles.createdAt))
}

export async function createArticle(data: {
  title: string
  description: string
  content: string
  images?: string[]
  published?: boolean
}) {
  const userId = await getUserId()
  const result = await db
    .insert(articles)
    .values({
      userId,
      title: data.title,
      description: data.description,
      content: data.content,
      images: JSON.stringify(data.images || []),
      published: data.published || false,
    })
    .returning()
  revalidatePath('/admin/articles')
  return result[0]
}

export async function updateArticle(
  id: number,
  data: {
    title?: string
    description?: string
    content?: string
    images?: string[]
    published?: boolean
  }
) {
  const userId = await getUserId()
  const result = await db
    .update(articles)
    .set({
      ...data,
      images: data.images ? JSON.stringify(data.images) : undefined,
      updatedAt: new Date(),
    })
    .where(and(eq(articles.id, id), eq(articles.userId, userId)))
    .returning()
  revalidatePath('/admin/articles')
  return result[0]
}

export async function deleteArticle(id: number) {
  const userId = await getUserId()
  await db
    .delete(articles)
    .where(and(eq(articles.id, id), eq(articles.userId, userId)))
  revalidatePath('/admin/articles')
}
