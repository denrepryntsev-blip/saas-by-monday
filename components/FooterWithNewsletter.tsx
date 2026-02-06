"use client"

import { useState } from "react"
import Link from "next/link"
import { SaaSbyMondayIcon } from "@/components/CodewayLogo"
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FooterWithNewsletter() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setMessage("Thanks for subscribing! 🎉")
    setEmail("")
    setIsSubmitting(false)
    
    setTimeout(() => setMessage(""), 3000)
  }

  return (
    <footer className="border-t border-border bg-background">
      {/* Newsletter Section */}
      <div className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-[#c9b9ff]/5">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay updated
              </h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Get the latest updates, tips, and exclusive content delivered to your inbox.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3 min-w-[320px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white hover:bg-primary/90 font-semibold shadow-md shadow-primary/20 group"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              {message && (
                <p className="mt-2 text-sm text-primary font-medium">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-1">
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
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-white transition-all group"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-white transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-white transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:hello@saasbymonday.dev"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-white transition-all group"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Product Links */}
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
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  License
                </Link>
              </li>
              <li>
                <Link
                  href="#"
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

