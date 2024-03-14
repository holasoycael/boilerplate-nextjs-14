// types and interfaces
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'

import type { TOverload } from './App'

export type WithChildren = PropsWithChildren

export type ProviderOverload = WithChildren & ContextOverload
export type ProviderModal = WithChildren & ContextModal

export interface ContextOverload {
  overload: TOverload
  setOverload: Dispatch<SetStateAction<TOverload>>
}

export type ContextModal = {
  close: () => void
}
