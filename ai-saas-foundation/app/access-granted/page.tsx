export default function AccessGrantedPage() {
  return (
    <main className="mx-auto max-w-xl py-24 px-6 text-center">
      <h1 className="text-3xl font-extrabold">
        Access granted 🚀
      </h1>

      <p className="mt-4 text-muted-foreground">
        You’ve been invited to the private GitHub repository.
      </p>

      <p className="mt-2 text-muted-foreground">
        Please check your GitHub inbox and accept the invitation.
      </p>

      <p className="mt-6 text-sm text-muted-foreground">
        If you don’t see the invite, check your spam folder
        or try again in a few minutes.
      </p>
    </main>
  )
}