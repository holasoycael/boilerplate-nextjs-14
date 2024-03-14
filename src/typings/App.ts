import { ReactNode } from 'react'

export type PropsWithChildren<P = unknown> = P & { children: ReactNode }

export type TOverload = {
  status?: boolean
}

export type SIsMobile = boolean | undefined
