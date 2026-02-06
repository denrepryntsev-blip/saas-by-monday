import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "License - SaaSbyMonday",
  description: "License terms for SaaSbyMonday",
}

export default function LicensePage() {
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
            License
          </h1>
          <p className="text-muted-foreground mb-8">
            Single Developer Commercial License
          </p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This license grants you, the purchaser, an ongoing, non-exclusive, worldwide license to use the SaaSbyMonday foundation for your personal and commercial projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What You Can Do</h2>
              <div className="space-y-3">
                {[
                  "Create unlimited end products (websites, SaaS applications, etc.) for yourself or clients",
                  "Modify and customize the source code to fit your needs",
                  "Use the foundation for commercial projects and charge for your end products",
                  "Deploy applications built with this foundation to production",
                  "Receive all future updates and improvements for free",
                  "Use the code in open-source projects (but not redistribute the foundation itself)",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What You Cannot Do</h2>
              <div className="space-y-3">
                {[
                  "Resell, redistribute, or share the source code as a boilerplate, template, or starter kit",
                  "Create derivative products that compete with SaaSbyMonday",
                  "Share your GitHub repository access or license with other developers",
                  "Use the foundation to create a product that allows end users to build their own end products using the foundation",
                  "Extract and redistribute individual components as standalone products",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">✕</span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Example Use Cases</h2>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">✓ Allowed</h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Building a SaaS product for project management and selling subscriptions</li>
                    <li>• Creating a client website with authentication and payments</li>
                    <li>• Developing an internal tool for your company</li>
                    <li>• Building multiple different SaaS products for different niches</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-2">✕ Not Allowed</h3>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• Selling the foundation as a boilerplate on a marketplace</li>
                    <li>• Creating a "SaaS builder" product using this foundation</li>
                    <li>• Sharing the source code with other developers or teams</li>
                    <li>• Extracting components to sell as a separate UI kit</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                The foundation is provided "as is", without warranty of any kind, express or implied. In no event shall the authors be liable for any claim, damages, or other liability arising from the use of the foundation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Ownership</h2>
              <p className="text-muted-foreground leading-relaxed">
                This license grants you rights to use the foundation but does not transfer ownership. SaaSbyMonday retains all intellectual property rights to the foundation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Enforcement</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to revoke access to the repository if we discover violations of this license, particularly regarding redistribution or resale of the foundation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about what's allowed under this license, please contact us at{" "}
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

