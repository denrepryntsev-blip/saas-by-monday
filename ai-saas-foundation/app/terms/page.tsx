import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Terms of Service - SaaSbyMonday",
  description: "Terms and conditions for using SaaSbyMonday",
}

export default function TermsPage() {
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
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: February 6, 2026
          </p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By purchasing and using SaaSbyMonday, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">License Grant</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Upon purchase, we grant you a non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use the source code to build unlimited commercial projects</li>
                <li>Modify and customize the code for your own use</li>
                <li>Deploy applications built with this foundation</li>
                <li>Receive lifetime updates to the foundation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Restrictions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may NOT:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Resell, redistribute, or share the source code as a boilerplate or template</li>
                <li>Create competing products using this foundation</li>
                <li>Share your GitHub repository access with others</li>
                <li>Remove or modify copyright notices in the code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The SaaSbyMonday foundation, including all source code, documentation, and related materials, is the intellectual property of SaaSbyMonday. Your license does not transfer any ownership rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Payment and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment is a one-time fee processed securely through Stripe. Due to the nature of digital products with immediate access to source code, all sales are final. Please review the product carefully before purchasing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates and Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your purchase includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Lifetime access to the private GitHub repository</li>
                <li>Free updates and improvements to the foundation</li>
                <li>Documentation and setup guides</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not provide custom development or one-on-one support. Documentation and community resources are available for assistance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                The product is provided "as is" without warranty of any kind. We do not guarantee that the code will be error-free or meet your specific requirements. You are responsible for testing and validating the code for your use case.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall SaaSbyMonday be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                The foundation includes integrations with third-party services (Stripe, Supabase, etc.). You are responsible for complying with their terms of service and any associated costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate your access to the repository if you violate these terms, particularly regarding redistribution or sharing of the source code.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms of Service from time to time. Continued use of the product after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:hello@saasbymonday.dev" className="text-primary hover:underline">
                  hello@saasbymonday.dev
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

