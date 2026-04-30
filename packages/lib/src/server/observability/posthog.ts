import "server-only";

import { PostHog } from "posthog-node";

import { getOptionalEnv } from "../../shared/env";

let posthogClient: PostHog | null = null;

export function getPostHogServerClient() {
  const key =
    getOptionalEnv("POSTHOG_PROJECT_API_KEY") ||
    getOptionalEnv("NEXT_PUBLIC_POSTHOG_KEY");

  if (!key) {
    return null;
  }

  if (!posthogClient) {
    posthogClient = new PostHog(key, {
      host: getOptionalEnv("NEXT_PUBLIC_POSTHOG_HOST", "https://us.i.posthog.com")
    });
  }

  return posthogClient;
}
