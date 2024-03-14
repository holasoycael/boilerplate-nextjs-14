import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

// contexts
import AuthProvider from 'contexts/Auth'

// hooks
import { nextAuthOptions } from 'hooks/next-auth'

// providers
import QuickStartProvider from 'providers/quickstart'

// types and interfaces
import type { PropsWithChildren } from 'typings/App'
import type { IUser } from 'typings/User'

export default async function PrivateLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(nextAuthOptions)

  const user = session?.user as IUser

  if (!user) {
    redirect('/login')
  }

  return (
    <AuthProvider {...{ user }}>
      <QuickStartProvider>{children}</QuickStartProvider>
    </AuthProvider>
  )
}
