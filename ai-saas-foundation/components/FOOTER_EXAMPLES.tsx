// ============================================
// ПРИКЛАДИ ВИКОРИСТАННЯ FOOTER КОМПОНЕНТІВ
// ============================================

// ============================================
// 1. ОСНОВНИЙ FOOTER (Landing Page)
// ============================================

import { Footer } from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section>
        <h1>Welcome to SaaSbyMonday</h1>
      </section>

      {/* Features */}
      <section>
        <h2>Features</h2>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <h2>Pricing</h2>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// ============================================
// 2. FOOTER З NEWSLETTER (Marketing Pages)
// ============================================

import { FooterWithNewsletter } from "@/components/FooterWithNewsletter"

export default function MarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Content */}
      <section>
        <h1>Blog Post Title</h1>
        <article>Content here...</article>
      </section>

      {/* Footer with Newsletter */}
      <FooterWithNewsletter />
    </div>
  )
}

// ============================================
// 3. МІНІМАЛЬНИЙ FOOTER (Documentation)
// ============================================

import { FooterMinimal } from "@/components/FooterMinimal"

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Docs Navigation */}
      <aside>Sidebar</aside>

      {/* Docs Content */}
      <main>
        <h1>Documentation</h1>
        <p>Content...</p>
      </main>

      {/* Minimal Footer */}
      <FooterMinimal />
    </div>
  )
}

// ============================================
// 4. ІМПОРТ З ЦЕНТРАЛЬНОГО ФАЙЛУ
// ============================================

import { Footer, FooterWithNewsletter, FooterMinimal } from "@/components/footer"

// Використовуйте той, який потрібен:
// <Footer />
// <FooterWithNewsletter />
// <FooterMinimal />

// ============================================
// 5. КАСТОМІЗАЦІЯ NEWSLETTER ФОРМИ
// ============================================

"use client"

import { useState } from "react"
import { FooterWithNewsletter } from "@/components/FooterWithNewsletter"

// Якщо потрібна інтеграція з вашим API:
// 1. Створіть API endpoint: /api/newsletter
// 2. Модифікуйте handleNewsletterSubmit в компоненті

// Приклад API endpoint:
// app/api/newsletter/route.ts
export async function POST(request: Request) {
  const { email } = await request.json()
  
  // Інтеграція з Mailchimp, ConvertKit, SendGrid, etc.
  // await mailchimp.lists.addListMember("list-id", { email })
  
  return Response.json({ success: true })
}

// ============================================
// 6. ДОДАВАННЯ НОВИХ ПОСИЛАНЬ
// ============================================

// Відкрийте Footer.tsx та додайте в відповідну секцію:

{/* Product Links */}
<div>
  <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
  <ul className="space-y-3">
    {/* Існуючі посилання */}
    <li>
      <Link href="/pricing">Pricing</Link>
    </li>
    
    {/* НОВИЙ ПУНКТ */}
    <li>
      <Link
        href="/roadmap"
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        Roadmap
      </Link>
    </li>
  </ul>
</div>

// ============================================
// 7. ДОДАВАННЯ НОВОЇ СОЦІАЛЬНОЇ МЕРЕЖІ
// ============================================

import { Github, Twitter, Linkedin, Mail, Youtube } from "lucide-react"

{/* Social Links */}
<div className="mt-6 flex items-center gap-3">
  {/* Існуючі іконки */}
  <a href="https://github.com">
    <Github className="h-4 w-4" />
  </a>
  
  {/* НОВА ІКОНКА */}
  <a
    href="https://youtube.com/@your-channel"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-white transition-all group"
    aria-label="YouTube"
  >
    <Youtube className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
  </a>
</div>

// ============================================
// 8. ЗМІНИТИ КОЛІР ТЕМИ
// ============================================

// Відкрийте globals.css та змініть:
:root {
  --primary: #46d27d;  /* Змініть на ваш колір */
}

// Або використовуйте Tailwind класи напряму:
<Footer className="bg-slate-900 text-white" />

// ============================================
// 9. ДОДАТИ МОВИ (i18n)
// ============================================

import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer')
  
  return (
    <footer>
      <h3>{t('product')}</h3>
      <Link href="/pricing">{t('pricing')}</Link>
    </footer>
  )
}

// ============================================
// 10. АНАЛІТИКА (Track Clicks)
// ============================================

import { trackEvent } from '@/lib/analytics'

<button
  onClick={() => {
    trackEvent('footer_cta_click', { button: 'get_access' })
    // ... existing code
  }}
>
  Get Access
</button>

