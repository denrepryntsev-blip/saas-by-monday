"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Is this just another boilerplate?",
    a: "No. This is a full production-ready foundation with enforced architecture, Cursor rules, and AI-oriented PRD. It's designed to grow with your product, not be thrown away.",
  },
  {
    q: "Do I need to be an experienced developer?",
    a: "You should be comfortable working with code and using tools like Cursor. This is not a no-code solution, but you don't need deep backend expertise to get started.",
  },
  {
    q: "What happens after I purchase?",
    a: "After payment, you get instant access to a private GitHub repository with the full source code, setup instructions, and future updates.",
  },
  {
    q: "Can I use this for commercial projects?",
    a: "Yes. You can use the foundation to build and sell your own SaaS products without restrictions.",
  },
  {
    q: "Will this work with Cursor and future AI tools?",
    a: "Yes. The foundation is built around principles that guide AI safely. Cursor is supported today, and the structure will remain compatible with future AI coding tools.",
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card transition-all hover:border-primary/30">
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between text-left transition-colors hover:bg-muted/30"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-4 pt-1">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-6 py-16 bg-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-[#c9b9ff]/5 border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to build without breaking things?
          </h3>

          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Start with a solid foundation and let AI work within safe boundaries.
          </p>

          <div className="mt-6">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              onClick={async () => {
                const res = await fetch("/api/checkout", { method: "POST" })
                const data = await res.json()
                window.location.href = data.url
              }}
            >
              Get Lifetime Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

