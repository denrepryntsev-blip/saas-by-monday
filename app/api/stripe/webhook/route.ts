import Stripe from "stripe"
import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { paidSessions } from "@/lib/paidSessions"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // ✅ Payment confirmed
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    if (session.id) {
      paidSessions.add(session.id)
      console.log("✅ Payment confirmed:", session.id)
    }
  }

  return NextResponse.json({ received: true })
}