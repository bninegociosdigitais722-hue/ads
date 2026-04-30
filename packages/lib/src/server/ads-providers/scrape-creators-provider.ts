import "server-only";

import type {
  AdNetwork,
  AdsSearchQuery,
  AdsSearchResult,
  NormalizedAd
} from "@ads/types";

import { getOptionalEnv } from "../../shared/env";
import { assertNetworkSupport, type AdsProvider } from "./provider";

export class ScrapeCreatorsProvider implements AdsProvider {
  readonly name = "scrapecreators" as const;
  readonly supportedNetworks: AdNetwork[] = ["meta", "google", "tiktok"];

  constructor(
    private readonly config = {
      apiKey: getOptionalEnv("SCRAPECREATORS_API_KEY"),
      baseUrl: getOptionalEnv(
        "SCRAPECREATORS_BASE_URL",
        "https://api.scrapecreators.com"
      )
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
