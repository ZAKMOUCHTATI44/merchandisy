import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n.config'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {

  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return
  }

  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
      return NextResponse.redirect(
        new URL(
          `/${i18n.defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
          request.url
        )
      )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}