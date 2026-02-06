export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string | string[] }>
}) {
  const params = await searchParams

  const sessionId = Array.isArray(params.session_id)
    ? params.session_id[0]
    : params.session_id

  if (!sessionId) {
    return (
      <main className="mx-auto max-w-xl py-24 px-6 text-center">
        <h1 className="text-2xl font-bold">Invalid session</h1>
        <p className="mt-4 text-muted-foreground">
          Missing Stripe session ID.
        </p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-xl py-24 px-6">
      <h1 className="text-3xl font-extrabold">Payment successful 🎉</h1>

      <p className="mt-4 text-foreground/80">
        Enter your GitHub username to get access to the private repository.
      </p>

      <form action="/api/github/invite" method="POST" className="mt-8 space-y-4">
        <input type="hidden" name="sessionId" value={sessionId} />

        <input
          name="githubUsername"
          placeholder="your-github-username"
          required
          className="w-full rounded-md border p-3"
        />

        <button
          type="submit"
          className="w-full rounded-md bg-black py-3 text-white font-bold"
        >
          Get GitHub Access
        </button>
      </form>
    </main>
  )
}