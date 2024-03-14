// components JSX
import Home from 'templates/Home'

// types and interfaces
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app'
}

export default async function PageHome() {
  return <Home />
}
