import "server-only";

import type {
  AdNetwork,
  AdsSearchQuery,
  AdsSearchResult,
  NormalizedAd
} from "@ads/types";

import { getOptionalEnv } from "../../shared/env";
import { assertNetworkSupport, type AdsProvider } from "./provider";

export class AdLibraryProvider implements AdsProvider {
  readonly name = "adlibrary" as const;
  readonly supportedNetworks: AdNetwork[] = ["tiktok"];

  constructor(
    private readonly config = {
      apiKey: getOptionalEnv("ADLIBRARY_API_KEY"),
      baseUrl: getOptionalEnv("ADLIBRARY_BASE_URL")
    }
  ) {}

  async searchAds(query: AdsSearchQuery): Promise<AdsSearchResult> {
    assertNetworkSupport(this, query.network);

    return {
      items: [],
      network: query.network,
      provider: this.name
    };
  }

  async getAd(params: {
    network: AdNetwork;
    externalId: string;
  }): Promise<NormalizedAd | null> {
    assertNetworkSupport(this, params.network);

    return null;
  }

  isConfigured() {
    return Boolean(this.config.apiKey && this.config.baseUrl);
  }
}
