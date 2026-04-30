import "server-only";

import Stripe from "stripe";

import { getRequiredEnv } from "../../shared/env";

let stripeClient: Stripe | null = null;

export function getStripeClient() {
  if (!stripeClient) {
    stripeClient = new Stripe(getRequiredEnv("STRIPE_SECRET_KEY"));
  }

  return stripeClient;
}

export const creditCosts = {
  adAnalysis: 1,
  landingPageAnalysis: 2,
  copyGeneration: 1,
  imageGeneration: 5,
  videoGeneration: 15,
  landingPageGeneration: 8
} as const;
