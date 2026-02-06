"use client"

import Link from "next/link"
import { SaaSbyMondayIcon } from "@/components/CodewayLogo"
import { Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <SaaSbyMondayIcon size={32} />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-foreground">SaaSby</span>
                <span className="text-primary">Monday</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              The structured boilerplate for VibeCoders. Build with AI without the mess.
            </p>
            
            {/* Contact */}
            <div className="mt-6">
              <a
                href="mailto:hello@saasbymonday.dev"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@saasbymonday.dev
              </a>
            </div>
          </div>

          {/* Product & Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    document.getElementById("pricing")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Pricing
                </button>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <button
                  onClick={async () => {
                    const res = await fetch("/api/checkout", { method: "POST" })
                    const data = await res.json()
                    window.location.href = data.url
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Get Access
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  License
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} SaaSbyMonday. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground">
                Built with{" "}
                <span className="text-primary font-medium">AI-safe architecture</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Lifetime Updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

