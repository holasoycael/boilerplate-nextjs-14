'use client'

import { useRouter } from 'next/navigation'

// contexts
import { InitializeContext } from 'contexts/Initialize'

// types and interfaces
import type { PropsWithChildren } from 'typings/App'

const CustomerProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  const { workspaceId } = InitializeContext()

  if (workspaceId) router.replace('/dashboard')

  return <>{children}</>
}

export default CustomerProvider
