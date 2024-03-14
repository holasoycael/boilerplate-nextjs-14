import NextAuth from 'next-auth'

// hooks
import { nextAuthOptions } from 'hooks/next-auth'

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
