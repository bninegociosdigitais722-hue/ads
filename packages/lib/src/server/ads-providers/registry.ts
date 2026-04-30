import "server-only";

import type { AdNetwork, ExternalAdsProviderName } from "@ads/types";

import { AdLibraryProvider } from "./adlibrary-provider";
import type { AdsProvider } from "./provider";
import { ScrapeCreatorsProvider } from "./scrape-creators-provider";

export function createAdsProviderRegistry() {
  const providers: AdsProvider[] = [
    new ScrapeCreatorsProvider(),
    new AdLibraryProvider()
  ];

  return {
    providers,
    forNetwork(network: AdNetwork, preferredProvider?: ExternalAdsProviderName) {
      const candidates = preferredProvider
        ? providers.filter((provider) => provider.name === preferredProvider)
        : providers;

      const provider = candidates.find((item) =>
        item.supportedNetworks.includes(network)
      );

      if (!provider) {
        throw new Error(`No ads provider registered for ${network}.`);
      }

      return provider;
    }
  };
}
