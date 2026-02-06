// Footer Component Types

export interface FooterLink {
  label: string
  href: string
  onClick?: () => void
  external?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  ariaLabel: string
}

export interface FooterProps {
  className?: string
  showNewsletter?: boolean
  minimal?: boolean
}

export interface NewsletterFormData {
  email: string
}

export interface NewsletterResponse {
  success: boolean
  message?: string
  error?: string
}

// Приклад використання з типізацією:

/*
import { FooterSection, SocialLink } from "@/components/footer/types"
import { Github, Twitter, Linkedin } from "lucide-react"

const productLinks: FooterSection = {
  title: "Product",
  links: [
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
  ]
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    ariaLabel: "Visit our GitHub"
  }
]
*/

