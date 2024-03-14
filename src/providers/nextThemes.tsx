'use client'

import * as React from 'react'
import { ThemeProvider } from 'styled-components'

// styles
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

function ThemeProviders({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <NextThemesProvider
        {...props}
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <GlobalStyles />
        {children}
      </NextThemesProvider>
    </ThemeProvider>
  )
}

export default ThemeProviders
