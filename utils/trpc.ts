import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "../pages/api/trpc/[trpc]";

function getBaseUrl() {
  // Return a relative URL in the browser
  if (typeof window !== "undefined") {
    return '';
  }

  // Return an absolute URL from vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Return an absolute URL from localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ]
    }
  }
});