import Link from "next/link"

export default function PaymentNotVerifiedPage() {
  return (
    <main className="mx-auto max-w-xl py-24 px-6 text-center">
      <h1 className="text-3xl font-bold">Payment not verified</h1>

      <p className="mt-4 text-muted-foreground">
        We couldn’t verify your payment yet.
        This usually happens if the payment is still processing
        or the session has expired.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <Link
          href="/"
          className="rounded-md bg-black px-6 py-3 text-white font-semibold"
        >
          Go back to homepage
        </Link>

        <p className="text-sm text-muted-foreground">
          If you believe this is a mistake, please try again or contact support.
        </p>
      </div>
    </main>
  )
}