import type { HandleServerError } from "@sveltejs/kit"
import * as Sentry from "@sentry/svelte"
import { PUBLIC_SENTRY_DNS, PUBLIC_SENTRY_ENABLED } from "$env/static/public"

Sentry.init({
  dsn: PUBLIC_SENTRY_DNS,
  enabled: PUBLIC_SENTRY_ENABLED === "true",
  tracesSampleRate: 1.0,
})

Sentry.configureScope((scope) => {
  scope.setTag("place", "server side")
})

export const handleError: HandleServerError = ({ error }) => {
  Sentry.withScope((scope) => {
    scope.setLevel("error")
    Sentry.captureException(error)
  })

  return {
    message: "Whoops!",
    code: (error as any)?.code ?? "UNKNOWN",
  }
}
