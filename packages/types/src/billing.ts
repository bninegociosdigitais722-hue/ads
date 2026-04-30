export type SubscriptionStatus =
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "incomplete"
  | "none";

export interface Plan {
  id: string;
  name: string;
  monthlyCredits: number;
  stripePriceLookupKey?: string;
  features: string[];
}

export interface CreditBalance {
  workspaceId: string;
  available: number;
  reserved: number;
  updatedAt: string;
}

export interface CreditLedgerEntry {
  id: string;
  workspaceId: string;
  amount: number;
  reason: string;
  createdAt: string;
  metadata?: Record<string, unknown>;
}
