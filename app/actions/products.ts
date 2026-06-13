'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { products } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getProducts() {
  const userId = await getUserId()
  return db
    .select()
    .from(products)
    .where(eq(products.userId, userId))
    .orderBy(desc(products.createdAt))
}

export async function createProduct(data: {
  name: string
  category: string
  description: string
  useFor?: string
  images?: string[]
}) {
  const userId = await getUserId()
  const result = await db
    .insert(products)
    .values({
      userId,
      name: data.name,
      category: data.category,
      description: data.description,
      useFor: data.useFor,
      images: JSON.stringify(data.images || []),
    })
    .returning()
  revalidatePath('/admin/products')
  return result[0]
}

export async function updateProduct(
  id: number,
  data: {
    name?: string
    category?: string
    description?: string
    useFor?: string
    images?: string[]
  }
) {
  const userId = await getUserId()
  const result = await db
    .update(products)
    .set({
      ...data,
      images: data.images ? JSON.stringify(data.images) : undefined,
      updatedAt: new Date(),
    })
    .where(and(eq(products.id, id), eq(products.userId, userId)))
    .returning()
  revalidatePath('/admin/products')
  return result[0]
}

export async function deleteProduct(id: number) {
  const userId = await getUserId()
  await db
    .delete(products)
    .where(and(eq(products.id, id), eq(products.userId, userId)))
  revalidatePath('/admin/products')
}
