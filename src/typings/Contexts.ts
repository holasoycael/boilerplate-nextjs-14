// types and interfaces
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'

import type { IUser } from './User'
import type { TOverload } from './App'

export type WithChildren = PropsWithChildren

export type ProviderUser = WithChildren & ContextUser
export type ProviderInitialize = WithChildren & ContextInitialize
export type ProviderOverload = WithChildren & ContextOverload
export type ProviderModal = WithChildren & ContextModal

export interface ContextOverload {
  overload: TOverload
  setOverload: Dispatch<SetStateAction<TOverload>>
}

export type ContextModal = {
  close: () => void
}

export interface ContextUser {
  user: IUser
}

export interface ContextInitialize {
  workspaceId: string
  setWorkspaceId: Dispatch<SetStateAction<string>>
}
