## TODO (Post-payment & access)

- [ ] Store payments in Supabase (replace in-memory paidSessions)
- [ ] Save Stripe webhook data (session_id, email, status=paid)
- [ ] Verify GitHub invite access by email instead of session_id
- [ ] Add recover access flow (/recover-access) using Stripe email
- [ ] Prevent double payment: check existing paid email before Stripe Checkout → redirect to recover access