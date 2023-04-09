import * as Sentry from "@sentry/gatsby";

Sentry.init({
  dsn: "https://b68ea62d6f2142cda0b4b3418d0b0370@o4504981237465088.ingest.sentry.io/4504981239365632",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});