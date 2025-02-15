// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://35e342a5b2b18c94bebddd19a917d33e@o4508451228549120.ingest.us.sentry.io/4508485040865280",
  tracesSampleRate: 1,
  debug: false,
});
