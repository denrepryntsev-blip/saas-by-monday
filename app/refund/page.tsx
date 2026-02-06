import Link from "next/link"
import { ArrowLeft, AlertCircle } from "lucide-react"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Refund Policy - SaaSbyMonday",
  description: "Refund policy for SaaSbyMonday purchases",
}

export default function RefundPage() {
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
            Refund Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: February 6, 2026
          </p>

          <div className="space-y-8 text-foreground">
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Important Notice</h3>
                <p className="text-sm text-amber-800">
                  Due to the nature of digital products with immediate access to source code, all sales are final. Please review this policy carefully before making a purchase.
                </p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">No Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                SaaSbyMonday is a digital product that provides immediate access to source code, documentation, and a private GitHub repository upon purchase. Due to the nature of digital goods and the impossibility of "returning" source code once accessed, we do not offer refunds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Why No Refunds?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Digital products with source code are different from physical goods because:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You receive immediate and permanent access to the complete source code</li>
                <li>The code can be copied, modified, and used in your projects instantly</li>
                <li>There is no way to "return" or "revoke" knowledge and code once accessed</li>
                <li>The product provides full value immediately upon purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Before You Purchase</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We encourage you to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Review the product description, features, and documentation thoroughly</li>
                <li>Check the technology stack (Next.js, Supabase, Stripe, etc.)</li>
                <li>Read the FAQ section to understand what's included</li>
                <li>Verify that you have the technical knowledge to use the foundation</li>
                <li>Contact us with any questions before purchasing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Exceptional Circumstances</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may consider refunds only in the following rare cases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Technical issues that prevent you from accessing the repository (we'll work to resolve these first)</li>
                <li>Duplicate purchases made by mistake (within 24 hours)</li>
                <li>The product is significantly different from what was advertised</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Refund requests must be submitted within 7 days of purchase and before accessing the repository. Contact us at{" "}
                <a href="mailto:hello@saasbymonday.dev" className="text-primary hover:underline">
                  hello@saasbymonday.dev
                </a>{" "}
                with your order details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What We Offer Instead</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we don't offer refunds, we do provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Comprehensive documentation and setup guides</li>
                <li>Free lifetime updates and improvements</li>
                <li>Clear product descriptions and examples</li>
                <li>Responsive support for technical questions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Payment Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you initiate a chargeback or payment dispute with your bank or credit card company, your access to the repository will be immediately revoked. We encourage you to contact us directly first to resolve any issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this refund policy or need clarification before purchasing, please contact us at{" "}
                <a href="mailto:hello@saasbymonday.dev" className="text-primary hover:underline">
                  hello@saasbymonday.dev
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                By completing your purchase, you acknowledge that you have read and agree to this refund policy.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

