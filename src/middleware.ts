import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// models
import Customer from 'models/Customer'

const NEXTAUTH_URL = process.env.NEXTAUTH_URL

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get(Customer.key)

  if (cookie && cookie.value && request.url === `${NEXTAUTH_URL}/`) {
    return NextResponse.redirect(new URL(`/dashboard`, request.url))
  } else if (
    (!cookie || !cookie.value) &&
    request.url === `${NEXTAUTH_URL}/dashboard`
  ) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/dashboard']
}
