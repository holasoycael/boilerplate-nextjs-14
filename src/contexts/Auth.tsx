'use client'

import { createContext, useContext } from 'react'

// models
import User from 'models/User'

// types and interfaces
import type { ProviderUser, ContextUser } from 'typings/Contexts'

const ElementContext = createContext<ContextUser>(null!)

export default function ElementProvider({ children, user }: ProviderUser) {
  return (
    <ElementContext.Provider value={{ user }}>
      {children}
    </ElementContext.Provider>
  )
}

export function UserContext() {
  const context = useContext(ElementContext)
  const { user } = context
  return { user: new User.__USER__(user) }
}
