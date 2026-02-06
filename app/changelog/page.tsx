"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Footer } from "@/components/Footer"

const updates = [
  {
    version: "1.2.0",
    date: "2026-02-01",
    type: "Feature",
    items: [
      "Added multi-tenant workspace support with RLS policies",
      "Improved Cursor rules for better AI guidance",
      "New dashboard components with analytics",
      "Enhanced authentication flow with email verification",
    ],
  },
  {
    version: "1.1.0",
    date: "2026-01-15",
    type: "Improvement",
    items: [
      "Updated Next.js to version 15",
      "Improved Stripe webhook handling",
      "Better error messages and validation",
      "Performance optimizations for large projects",
    ],
  },
  {
    version: "1.0.0",
    date: "2026-01-01",
    type: "Launch",
    items: [
      "Initial release with full SaaS foundation",
      "Complete authentication system with Supabase",
      "Stripe payment integration",
      "Comprehensive Cursor rules and PRD",
      "Production-ready architecture",
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Changelog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            All notable updates and improvements to SaaSbyMonday
          </p>
        </div>

        <div className="space-y-12">
          {updates.map((update) => (
            <div key={update.version} className="relative">
              {/* Timeline line */}
              <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />

              <div className="flex gap-6">
                {/* Version badge */}
                <div className="relative flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-bold text-foreground">
                      v{update.version}
                    </h2>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium">
                      <Tag className="w-3 h-3" />
                      {update.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(update.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {update.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-[#c9b9ff]/5 border border-primary/10">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Get lifetime updates
          </h3>
          <p className="text-muted-foreground mb-6">
            Purchase once and receive all future updates for free
          </p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 font-semibold"
            onClick={async () => {
              const res = await fetch("/api/checkout", { method: "POST" })
              const data = await res.json()
              window.location.href = data.url
            }}
          >
            Get Access
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

