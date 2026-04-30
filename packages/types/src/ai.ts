import type { NormalizedAd } from "./ads";

export type AiCapability =
  | "ad-analysis"
  | "landing-page-analysis"
  | "copy-generation"
  | "image-generation"
  | "video-generation"
  | "landing-page-generation";

export type AiRunStatus = "queued" | "running" | "succeeded" | "failed";

export interface AdAnalysisInput {
  ad: NormalizedAd;
  market?: string;
  objective?: string;
}

export interface LandingPageAnalysisInput {
  url: string;
  screenshotUrl?: string;
  sourceHtml?: string;
}

export interface CopyGenerationInput {
  productName: string;
  audience: string;
  offer?: string;
  tone?: string;
}

export interface LandingPageBlock {
  id: string;
  type: "hero" | "proof" | "benefits" | "features" | "faq" | "cta";
  props: Record<string, unknown>;
}

export interface AiRun<TInput = unknown, TOutput = unknown> {
  id: string;
  capability: AiCapability;
  status: AiRunStatus;
  input: TInput;
  output?: TOutput;
  creditsSpent: number;
  createdAt: string;
}
