'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// contexts
import { InitializeContext } from 'contexts/Initialize'

// types and interfaces
import type { PropsWithChildren } from 'typings/App'

export default function DashboardLayout({ children }: PropsWithChildren) {
  const router = useRouter()

  const { workspaceId } = InitializeContext()

  useEffect(() => {
    if (!workspaceId) router.replace('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { children }
}
