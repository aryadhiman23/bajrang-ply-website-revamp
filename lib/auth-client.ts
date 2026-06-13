'use client'

import { createAuthClient } from 'better-auth/react'

// baseURL must point to the same origin the app is served from.
// In v0 preview (iframe over HTTPS) NEXT_PUBLIC_APP_URL is set.
// In plain dev it falls back to localhost.
export const authClient = createAuthClient({
  baseURL:
    typeof window !== 'undefined'
      ? window.location.origin
      : process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
})

export const { signIn, signUp, signOut, useSession } = authClient
