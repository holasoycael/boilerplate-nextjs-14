import CredentialsProvider from 'next-auth/providers/credentials'

// utils
import env from 'utils/env'
import api from 'utils/api'

// types and interfaces
import type { NextAuthOptions } from 'next-auth'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        const fetchUrl = `${env.BASE_URL}/login`

        const email = credentials?.email
        const password = credentials?.password

        if (!password || !email) return null

        const auth = { auth: { username: email, password } }
        const response = await api.get(fetchUrl, auth)

        const user = await response.data

        if (user && response.status >= 200 && response.status < 300) {
          return user
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/'
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user as any
      return session
    }
  }
}
