import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { RootProvider } from 'fumadocs-ui/provider/next';
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Micro-SaaS Foundation - Vibe-code with AI without breaking architecture",
  description:
    "Production-ready Next.js + Supabase foundation with Cursor-aware rules. Build your Micro-SaaS with AI while maintaining clean architecture.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`font-sans antialiased`} style={{ colorScheme: "light" }}>
    <RootProvider>{children}</RootProvider>
    <Analytics />
    </body>
    </html>
  )
}
