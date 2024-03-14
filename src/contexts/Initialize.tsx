'use client'

import { createContext, useContext } from 'react'

// types and interfaces
import type { ContextInitialize, ProviderInitialize } from 'typings/Contexts'

const ElementContext = createContext<ContextInitialize>(null!)

export default function ElementProvider({
  children,
  workspaceId,
  setWorkspaceId
}: ProviderInitialize) {
  return (
    <ElementContext.Provider value={{ workspaceId, setWorkspaceId }}>
      {children}
    </ElementContext.Provider>
  )
}

export function InitializeContext() {
  const context = useContext(ElementContext)
  const { workspaceId, setWorkspaceId } = context
  return { workspaceId, setWorkspaceId }
}
