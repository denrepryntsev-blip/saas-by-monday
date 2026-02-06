"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight, X, Zap, Shield, FileCode, Sparkles, AlertTriangle, Image, Github, Code, Rocket, CheckCircle2, Download, Gift, Star, Users, TrendingUp, ChevronDown, Clock, BadgeCheck, AlertCircle, Quote } from "lucide-react"
import { AnimatedTerminal } from "@/components/AnimatedTerminal"
import { ProjectStructure } from "@/components/ProjectStructure"
import { CursorRulesExample } from "@/components/CursorRulesExample"
import { ProjectsShowcase } from "@/components/ProjectsShowcase"
import { SaaSbyMondayLogo, SaaSbyMondayIcon } from "@/components/CodewayLogo"
import { BeforeAfterSection } from "@/components/BeforeAfterSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { Footer } from "@/components/Footer"
import { FAQSection } from "@/components/FAQSection"

/**
 * Landing Page з сучасним чергуванням фонів
 * 
 * Структура:
 * 1. Hero - bg-background (теплий)
 * 2. Project Structure - bg-gradient (білий → сірий)
 * 3. Before/After - bg-background (теплий)
 * 4. How It Works - bg-white (білий)
 * 5. Why Different - bg-background + градієнти (теплий)
 * 6. Testimonials - bg-white (білий)
 * 7. Who This Is For - bg-white (білий)
 * 8. Pricing - bg-background + градієнт (теплий)
 * 9. FAQ - bg-white (білий)
 * 
 * Див. BACKGROUND_ALTERNATION.md для деталей
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full px-6 py-4">
        <div className="mx-auto max-w-6xl flex justify-center">
          {/* Glass Navigation Pill */}
          <nav 
            className="group flex items-center gap-1 rounded-full px-2 py-2 border border-white/20 shadow-lg transition-all duration-300 hover:border-white/40 hover:shadow-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)'
              e.currentTarget.style.backdropFilter = 'blur(16px)'
              e.currentTarget.style.setProperty('-webkit-backdrop-filter', 'blur(16px)')
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'
              e.currentTarget.style.backdropFilter = 'blur(12px)'
              e.currentTarget.style.setProperty('-webkit-backdrop-filter', 'blur(12px)')
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}
          >
            <button
              className="px-4 py-2 text-sm font-medium cursor-pointer text-muted-foreground hover:text-foreground hover:bg-white/50 rounded-full transition-all"
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Pricing
            </button>

            {/* Center Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 px-4 py-1.5 mx-2 rounded-full bg-white/60 hover:bg-white/80 transition-all group"
            >
              <SaaSbyMondayIcon size={24} />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-foreground">SaaSby</span>
                <span className="text-primary">Monday</span>
              </span>
            </Link>

            <Link
              href="/docs"
              className="px-4 py-2 text-sm font-medium cursor-pointer text-muted-foreground hover:text-foreground hover:bg-white/50 rounded-full transition-all"
            >
              Docs
            </Link>

            <Button
              size="sm"
              className="ml-1 bg-primary text-white hover:bg-primary/90 font-semibold rounded-full shadow-md shadow-primary/20"
              onClick={async () => {
                const res = await fetch("/api/checkout", { method: "POST" })
                const data = await res.json()
                window.location.href = data.url
              }}
            >
              Get Access
            </Button>
          </nav>
        </div>
      </header>
      <section className="relative px-6 pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">

            {/* LEFT: Copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                {/* Loader Animation */}
                <span className="flex items-center gap-0.5 h-4">
                  <span 
                    className="w-1 h-4 bg-primary rounded-sm"
                    style={{
                      transform: 'skewX(-20deg)',
                      animation: 'pulse-loader 1s infinite alternate',
                      animationDelay: '0s'
                    }}
                  />
                  <span 
                    className="w-1 h-4 bg-primary rounded-sm"
                    style={{
                      transform: 'skewX(-20deg)',
                      animation: 'pulse-loader 1s infinite alternate',
                      animationDelay: '0.2s',
                      opacity: 0.5
                    }}
                  />
                  <span 
                    className="w-1 h-4 bg-primary rounded-sm"
                    style={{
                      transform: 'skewX(-20deg)',
                      animation: 'pulse-loader 1s infinite alternate',
                      animationDelay: '0.4s',
                      opacity: 0.3
                    }}
                  />
                </span>
                Stop VibeCoding Chaos
              </span>

              <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight leading-tight text-foreground md:text-5xl lg:text-6xl">
              Idea on Friday.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-extrabold text-foreground">SaaS</span>
                  <span className="absolute inset-0 bg-[#c9b9ff] -skew-x-6 -rotate-2 translate-y-1"></span>
                </span>
                {" "}
                <span className="hidden md:inline">by Monday.</span>
                <span className="md:hidden"><br />by Monday.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              Stop fighting with AI-generated spaghetti code. Use the only boilerplate with built-in architectural constraints that keep your AI developer fast, focused, and bug-free.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group"
                    onClick={async () => {
                      const res = await fetch("/api/checkout", { method: "POST" })
                      const data = await res.json()
                      window.location.href = data.url
                    }}
                  >
                    Start Building
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <span className="text-sm font-medium text-muted-foreground">
                    One-time payment • Lifetime updates
                  </span>
                </div>

                {/* Trust Trigger - Unique Design */}
                <div className="flex flex-col gap-4 pt-2">
                  {/* Stats Row */}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground">900+</span>
                      <span className="text-muted-foreground">vibecoders</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-foreground">4.9/5</span>
                      <span className="text-muted-foreground">rating</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-foreground">87%</span>
                      <span className="text-muted-foreground">ready SaaS</span>
                    </div>
                  </div>

                  {/* Community Proof */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                    <div className="flex items-center -space-x-2 flex-shrink-0">
                      {[
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
                      ].map((url, i) => (
                        <img
                          key={i}
                          src={url}
                          alt={`Community member ${i + 1}`}
                          className="w-9 h-9 rounded-full border-2 border-background object-cover"
                          loading="lazy"
                        />
                      ))}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Join 900+ vibecoders</span>{" "}
                        who ship production-ready SaaS faster
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Terminal Demo */}
            <div className="w-full">
              <AnimatedTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure & Cursor Rules */}
      <section className="px-6 py-20 border-t border-border bg-gradient-to-b from-white to-gray-50/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c9b9ff]/30 bg-[#c9b9ff]/10 px-4 py-1.5 text-sm font-medium text-[#8b5cf6] mb-4">
              <Download className="w-4 h-4 animate-bounce" />
              What's Inside
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Everything you need to start
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete foundation with structure and rules that guide AI development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Organized Project Structure
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Every file has its place. Clear separation between pages, components, utilities, and configuration.
              </p>
              <ProjectStructure />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#c9b9ff]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Cursor Rules Built-In
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Pre-configured rules that tell Cursor exactly how to work within your project boundaries.
              </p>
              <CursorRulesExample />
            </div>
          </div>
        </div>
      </section>

      <BeforeAfterSection
        problems={[
          {
            title: "AI slowly destroys your architecture",
            text:
              "After a few prompts, files end up in random places, patterns are mixed, and the codebase becomes fragile and inconsistent.",
          },
          {
            title: "Context is lost between sessions",
            text:
              "AI forgets why decisions were made. Without a shared source of truth, every new feature risks breaking existing logic.",
          },
          {
            title: "The project becomes hard to scale or hand off",
            text:
              "What started as a fast prototype turns into something no developer wants to maintain, extend, or refactor.",
          },
          {
            title: "You spend more time fixing AI output than building",
            text:
              "Instead of shipping features, you fight regressions, duplicated logic, and broken flows introduced by the AI.",
          },
        ]}
        solutions={[
          {
            title: "A real production-ready codebase",
            text:
              "You start from an opinionated Next.js + Supabase repository with authentication, multi-tenancy, and best practices already in place.",
          },
          {
            title: "Strict Cursor rules as a single source of truth",
            text:
              "Clear, enforceable rules tell Cursor where files live, how features are added, and which patterns must be followed.",
          },
          {
            title: "PRD generated for AI, not humans",
            text:
              "Your product requirements are structured specifically for AI consumption, so context and intent are preserved across sessions.",
          },
          {
            title: "AI that works inside boundaries, not against them",
            text:
              "Cursor accelerates development while respecting architecture, reducing regressions and long-term maintenance costs.",
          },
        ]}
      />

      <section className="px-6 py-20 border-t border-border bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              How It Works
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              From idea to production in 4 steps
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From idea to a structured, AI-safe codebase in a few simple steps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {/* Step 1: Describe your idea */}
            <div className="rounded-xl border border-border bg-card p-6 relative group hover:border-primary/50 transition-colors min-h-[280px] flex flex-col">
              <span className="text-4xl font-bold text-primary/20 absolute top-4 right-4 group-hover:text-primary/30 transition-colors">
                01
              </span>

              <h3 className="mt-8 text-lg font-semibold text-foreground">
                Describe your idea
              </h3>

              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Start with a simple description of what you want to build. No technical details required.
              </p>

              {/* Interactive Example */}
              <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border/50 group-hover:bg-muted/70 transition-colors">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground break-words leading-relaxed">
                      "I want to create an image generator"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Get a structured foundation */}
            <div className="rounded-xl border border-border bg-card p-6 relative group hover:border-primary/50 transition-colors min-h-[280px] flex flex-col">
              <span className="text-4xl font-bold text-primary/20 absolute top-4 right-4 group-hover:text-primary/30 transition-colors">
                02
              </span>

              <h3 className="mt-8 text-lg font-semibold text-foreground">
                Get a structured foundation
              </h3>

              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Receive a production-ready SaaS repository with authentication, tenants, and best practices.
              </p>

              {/* Interactive Example - GitHub Import */}
              <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border/50 group-hover:bg-muted/70 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Github className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-xs font-mono text-muted-foreground break-all">github.com/...</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-xs text-foreground break-words">auth/</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-xs text-foreground break-words">components/</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-xs text-foreground break-words">lib/</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0"></div>
                    <span className="text-xs text-muted-foreground break-words">+ 12 more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Open Cursor and build */}
            <div className="rounded-xl border border-border bg-card p-6 relative group hover:border-primary/50 transition-colors min-h-[280px] flex flex-col">
              <span className="text-4xl font-bold text-primary/20 absolute top-4 right-4 group-hover:text-primary/30 transition-colors">
                03
              </span>

              <h3 className="mt-8 text-lg font-semibold text-foreground">
                Open Cursor and build
              </h3>

              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Use Cursor with predefined rules that guide AI changes and preserve architecture.
              </p>

              {/* Interactive Example - Cursor-like interface */}
              <div className="mt-4 p-3 rounded-lg bg-[#09090b] border border-border/50 group-hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono break-words">cursor</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Code className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-foreground font-mono break-all">.cursorrules</span>
                  </div>
                  <div className="pl-5 space-y-0.5">
                    <div className="text-xs text-muted-foreground font-mono break-words">README</div>
                    <div className="text-xs text-muted-foreground font-mono break-words">PRD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Ship without breaking things */}
            <div className="rounded-xl border border-border bg-card p-6 relative group hover:border-primary/50 transition-colors min-h-[280px] flex flex-col">
              <span className="text-4xl font-bold text-primary/20 absolute top-4 right-4 group-hover:text-primary/30 transition-colors">
                04
              </span>

              <h3 className="mt-8 text-lg font-semibold text-foreground">
                Ship without breaking things
              </h3>

              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Add features confidently, knowing your codebase stays consistent and maintainable.
              </p>

              {/* Interactive Example - Deployment Status */}
              <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border/50 group-hover:bg-muted/70 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs font-medium text-foreground break-words">Deployment</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-foreground break-words leading-relaxed">Tests passed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-foreground break-words leading-relaxed">Architecture validated</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-foreground break-words leading-relaxed">Deployed to production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="px-6 py-20 border-t border-border relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 pointer-events-none opacity-40">
    <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#c9b9ff]/10 rounded-full blur-3xl"></div>
  </div>

  <div className="mx-auto max-w-5xl relative">
    {/* Header with icon */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Why this is different
      </h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Most tools help you generate code. This one helps you keep it.
      </p>
    </div>

    {/* Comparison with VS indicator */}
    <div className="relative">
      <div className="mt-12 grid gap-8 md:grid-cols-2 relative">
        {/* VS Badge - centered between columns */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-border shadow-lg">
            <span className="text-sm font-bold text-muted-foreground">VS</span>
          </div>
        </div>

        {/* Others - with muted theme */}
        <div className="rounded-xl border-2 border-border bg-gradient-to-br from-muted/30 to-muted/50 p-6 relative group hover:border-border/80 transition-all hover:shadow-lg">
          {/* Icon badge */}
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-muted border-2 border-border flex items-center justify-center group-hover:scale-110 transition-transform">
            <AlertTriangle className="w-6 h-6 text-muted-foreground" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <X className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Typical AI tools & boilerplates
            </h3>
          </div>

          <ul className="mt-6 space-y-4 text-sm">
            {[
              { text: "Focus on speed, not long-term structure", icon: Zap },
              { text: "Architecture is implied or undocumented", icon: FileCode },
              { text: "AI freely modifies files without boundaries", icon: AlertTriangle },
              { text: "Context is lost between sessions", icon: X },
              { text: "Hard to scale or hand off to developers", icon: X },
            ].map((item, index) => (
              <li key={item.text} className="flex items-start gap-3 group/item">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-muted-foreground" />
                </div>
                <span className="text-muted-foreground leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Bottom indicator */}
          <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground font-medium">
            <AlertTriangle className="w-4 h-4" />
            <span>Short-term gains, long-term pain</span>
          </div>
        </div>

        {/* This - with success theme */}
        <div className="rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-[#c9b9ff]/5 p-6 relative group hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
          {/* Icon badge */}
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6 text-primary" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              This foundation
            </h3>
          </div>

          <ul className="mt-6 space-y-4 text-sm">
            {[
              { text: "Architecture is explicit and enforced", icon: Shield },
              { text: "Cursor rules act as a living contract", icon: FileCode },
              { text: "PRD is generated for AI, not humans", icon: Sparkles },
              { text: "Real production-ready repository", icon: Check },
              { text: "AI accelerates without breaking structure", icon: Zap },
            ].map((item, index) => (
              <li key={item.text} className="flex items-start gap-3 group/item">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="leading-relaxed font-medium">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Bottom indicator with animation */}
          <div className="mt-6 pt-4 border-t border-primary/20 flex items-center gap-2 text-xs text-primary font-medium">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </div>
            <span>Built for long-term success</span>
          </div>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="mt-12">
        <ProjectsShowcase />
      </div>
    </div>
  </div>
</section>

<TestimonialsSection />

<section className="px-6 py-20 bg-white">
  <div className="mx-auto max-w-5xl">
    <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl text-center">
      Who this is for
    </h2>

    <p className="mt-4 text-lg text-muted-foreground text-center">
      This foundation is designed for people who want speed without chaos.
    </p>

    {/* Stats Grid */}
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Stat 1 */}
      <div className="group relative rounded-xl border border-border bg-card p-4 hover:border-primary/30 hover:shadow-md transition-all">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">900+</div>
            <div className="text-xs text-muted-foreground">vibecoders</div>
          </div>
        </div>
      </div>

      {/* Stat 2 */}
      <div className="group relative rounded-xl border border-border bg-card p-4 hover:border-primary/30 hover:shadow-md transition-all">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">87%</div>
            <div className="text-xs text-muted-foreground">ready SaaS</div>
          </div>
        </div>
      </div>

      {/* Stat 3 */}
      <div className="group relative rounded-xl border border-border bg-card p-4 hover:border-primary/30 hover:shadow-md transition-all">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">2hrs</div>
            <div className="text-xs text-muted-foreground">to deploy</div>
          </div>
        </div>
      </div>

      {/* Stat 4 */}
      <div className="group relative rounded-xl border border-border bg-card p-4 hover:border-primary/30 hover:shadow-md transition-all">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">95%</div>
            <div className="text-xs text-muted-foreground">cleaner code</div>
          </div>
        </div>
      </div>
    </div>

    {/* Main Cards */}
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {/* FOR */}
      <div className="relative rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
        {/* Badge */}
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
            <BadgeCheck className="w-3.5 h-3.5" />
            Perfect Match
          </span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-foreground">
          This is for you if
        </h3>

        <ul className="mt-4 space-y-3 text-sm">
          {[
            "You want to build a real SaaS, not just a demo",
            "You use Cursor or AI tools daily to write code",
            "You care about structure, maintainability, and scaling",
            "You plan to hand the project to developers later",
            "You want to move fast without accumulating tech debt",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Testimonial */}
        <div className="mt-6 pt-4 border-t border-primary/20">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-primary/40 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground italic">
                "The architecture constraints keep everything organized. Game changer!"
              </p>
              <p className="mt-2 text-xs font-medium text-foreground">
                — Sarah Chen, Senior Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NOT FOR */}
      <div className="relative rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50/30 to-transparent p-6 hover:border-orange-300 hover:shadow-md transition-all">
        {/* Badge */}
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm">
            <AlertCircle className="w-3.5 h-3.5" />
            Not Recommended
          </span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-foreground">
          This is not for you if
        </h3>

        <ul className="mt-4 space-y-3 text-sm">
          {[
            "You expect AI to build the entire product without guidance",
            "You don't plan to maintain or scale the codebase",
            "You want a no-code or drag-and-drop solution",
            "You are looking for a quick prototype with no structure",
            "You are not comfortable working with code at all",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 text-orange-400 flex-shrink-0">–</span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>

        {/* Explanation */}
        <div className="mt-6 pt-4 border-t border-orange-200">
          <p className="text-xs text-muted-foreground">
            This foundation requires some coding knowledge and active involvement. It's designed to guide AI development, not replace it entirely.
          </p>
        </div>
      </div>
    </div>

    {/* Personas Section */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center text-foreground mb-8">
        Success stories from real users
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Persona 1: Solo Founder */}
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
              alt="Jaya B."
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <div className="font-semibold text-foreground">Jaya B.</div>
              <div className="text-xs text-muted-foreground">Solo Founder</div>
            </div>
          </div>
          <div className="relative pl-4 border-l-2 border-primary/20">
            <Quote className="absolute -left-2 top-0 w-4 h-4 text-primary/40 bg-white" />
            <p className="text-sm text-muted-foreground italic mb-3">
              "I managed to exit & sell for 5 figures in a few weeks. Best investment I've made."
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Fast Exit
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Revenue
            </span>
          </div>
        </div>

        {/* Persona 2: Tech Lead */}
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80"
              alt="Sarah Chen"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <div className="font-semibold text-foreground">Sarah Chen</div>
              <div className="text-xs text-muted-foreground">Tech Lead</div>
            </div>
          </div>
          <div className="relative pl-4 border-l-2 border-primary/20">
            <Quote className="absolute -left-2 top-0 w-4 h-4 text-primary/40 bg-white" />
            <p className="text-sm text-muted-foreground italic mb-3">
              "Architecture constraints keep everything organized. My team can work with AI without breaking structure."
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Team Scale
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Clean Code
            </span>
          </div>
        </div>

        {/* Persona 3: Indie Hacker */}
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&q=80"
              alt="code_wizard"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <div className="font-semibold text-foreground">code_wizard</div>
              <div className="text-xs text-muted-foreground">Indie Hacker</div>
            </div>
          </div>
          <div className="relative pl-4 border-l-2 border-primary/20">
            <Quote className="absolute -left-2 top-0 w-4 h-4 text-primary/40 bg-white" />
            <p className="text-sm text-muted-foreground italic mb-3">
              "Just hit $5k MRR. The Stripe integration saved me weeks of work."
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              $5k MRR
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Fast Launch
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="pricing" className="px-6 py-20 border-t border-border relative overflow-hidden">
        {/* Background gradient */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(70, 210, 125, 0.08) 0%, transparent 50%)'
          }}
        />
        
        <div className="mx-auto max-w-5xl text-center relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Pricing
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Simple, transparent pricing
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            One plan. No subscriptions. Everything you need to build and ship.
          </p>

          {/* Scarcity Element */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 px-4 py-2 text-sm shadow-sm">
              <Clock className="w-4 h-4 text-yellow-600" />
              <span className="font-medium text-yellow-800">
                <span className="font-bold">47 spots left</span> at this price
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-md rounded-2xl border-2 border-primary/20 bg-card shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="bg-primary/5 border-b border-primary/10 p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <SaaSbyMondayIcon size={24} />
                  <h3 className="text-xl font-bold text-foreground">
                    Lifetime Access
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pay once. Use forever.
                </p>
              </div>

              <div className="p-8">
                {/* Pricing with discount */}
                <div className="mb-8">
                  {/* Original Price - Crossed Out */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-muted-foreground line-through decoration-2">
                      $250
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                      80% OFF
                    </span>
                  </div>
                  
                  {/* Current Price */}
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-6xl font-extrabold text-foreground">
                      $49
                    </span>
                    <span className="pb-2 text-sm text-muted-foreground">
                      one-time
                    </span>
                  </div>
                  
                  {/* Savings highlight */}
                  <p className="mt-3 text-center text-sm font-medium text-primary">
                    Save $201 today
                  </p>
                </div>

                <ul className="space-y-4 text-left text-sm mb-8">
                  {[
                    "Full source code access",
                    "Cursor rules & AI-safe architecture",
                    "Multi-tenant Supabase setup (RLS)",
                    "Stripe payments & webhooks",
                    "Free lifetime updates",
                    "Private GitHub repository access",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group"
                  onClick={async () => {
                    const res = await fetch("/api/checkout", { method: "POST" })
                    const data = await res.json()
                    window.location.href = data.url
                  }}
                >
                  Get Lifetime Access
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Security Badges */}
                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-primary" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="w-px h-3 bg-border"></div>
                  <div className="flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="w-px h-3 bg-border"></div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span>Instant Access</span>
                  </div>
                </div>

                {/* Money-Back Guarantee */}
                <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold text-foreground mb-1">
                        30-Day Money-Back Guarantee
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Not satisfied? Get a full refund, no questions asked. We're confident you'll love it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </div>
  )
}
