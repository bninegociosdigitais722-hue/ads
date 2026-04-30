import "server-only";

import type {
  AdNetwork,
  AdsSearchQuery,
  AdsSearchResult,
  ExternalAdsProviderName,
  NormalizedAd
} from "@ads/types";

export interface AdsProviderConfig {
  apiKey?: string;
  baseUrl?: string;
}

export interface AdsProvider {
  readonly name: ExternalAdsProviderName;
  readonly supportedNetworks: AdNetwork[];
  searchAds(query: AdsSearchQuery): Promise<AdsSearchResult>;
  getAd(params: {
    network: AdNetwork;
    externalId: string;
  }): Promise<NormalizedAd | null>;
}

export function assertNetworkSupport(provider: AdsProvider, network: AdNetwork) {
  if (!provider.supportedNetworks.includes(network)) {
    throw new Error(`${provider.name} does not support ${network}.`);
  }
}
