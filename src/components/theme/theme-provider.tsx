"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"

type ThemeProviderProps = {
    children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <NextThemesProvider
        attribute={'class'}
        defaultTheme="system"
        enableColorScheme>
            {children}
        </NextThemesProvider>
    )
}

export { ThemeProvider };