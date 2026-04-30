import "server-only";

import OpenAI from "openai";

import type {
  AdAnalysisInput,
  CopyGenerationInput,
  LandingPageAnalysisInput,
  LandingPageBlock
} from "@ads/types";

import { getOptionalEnv, getRequiredEnv } from "../../shared/env";

export interface AiGateway {
  analyzeAd(input: AdAnalysisInput): Promise<unknown>;
  analyzeLandingPage(input: LandingPageAnalysisInput): Promise<unknown>;
  generateCopy(input: CopyGenerationInput): Promise<unknown>;
  generateLandingPageBlocks(input: CopyGenerationInput): Promise<LandingPageBlock[]>;
  generateImage(prompt: string): Promise<unknown>;
  generateVideo(prompt: string): Promise<unknown>;
}

export class OpenAiGateway implements AiGateway {
  private readonly client: OpenAI;
  private readonly model: string;

  constructor() {
    this.client = new OpenAI({ apiKey: getRequiredEnv("OPENAI_API_KEY") });
    this.model = getOptionalEnv("OPENAI_MODEL", "gpt-4.1");
  }

  async analyzeAd(_input: AdAnalysisInput): Promise<unknown> {
    void _input;
    return this.notImplemented("ad analysis");
  }

  async analyzeLandingPage(_input: LandingPageAnalysisInput): Promise<unknown> {
    void _input;
    return this.notImplemented("landing page analysis");
  }

  async generateCopy(_input: CopyGenerationInput): Promise<unknown> {
    void _input;
    return this.notImplemented("copy generation");
  }

  async generateLandingPageBlocks(
    _input: CopyGenerationInput
  ): Promise<LandingPageBlock[]> {
    void _input;
    return this.notImplemented("landing page generation");
  }

  async generateImage(_prompt: string): Promise<unknown> {
    void _prompt;
    return this.notImplemented("image generation");
  }

  async generateVideo(_prompt: string): Promise<unknown> {
    void _prompt;
    return this.notImplemented("video generation");
  }

  private notImplemented(capability: string): never {
    void this.client;
    void this.model;
    throw new Error(`AI ${capability} is not implemented yet.`);
  }
}

export function createAiGateway(): AiGateway {
  return new OpenAiGateway();
}
