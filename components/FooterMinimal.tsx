"use client"

import Link from "next/link"
import { SaaSbyMondayIcon } from "@/components/CodewayLogo"
import { Github, Twitter } from "lucide-react"

export function FooterMinimal() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <SaaSbyMondayIcon size={24} />
              <span className="text-base font-bold tracking-tight">
                <span className="text-foreground">SaaSby</span>
                <span className="text-primary">Monday</span>
              </span>
            </Link>
            
            <div className="h-4 w-px bg-border" />
            
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Links & Social */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/docs"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Docs
              </Link>
            </div>

            <div className="h-4 w-px bg-border" />

            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-primary/10 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-primary/10 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

