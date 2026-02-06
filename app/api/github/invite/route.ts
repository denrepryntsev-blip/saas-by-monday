import { NextResponse } from "next/server"
import { paidSessions } from '@/lib/paidSessions';

export async function POST(req: Request) {
  const formData = await req.formData()

  const sessionId = formData.get("sessionId") as string | null
  const username = formData.get("githubUsername") as string | null

  if (!sessionId || !username) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 })
  }

  // 🔐 SECURITY CHECK
  if (!paidSessions.has(sessionId)) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/payment-not-verified`
    )
  }

  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/collaborators/${username}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({ permission: "read" }),
    }
  )

  if (!res.ok) {
    return NextResponse.json({ error: "GitHub invite failed" }, { status: 500 })
  }

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_APP_URL}/access-granted`,
    { status: 303 }
  )
}