import type { AdNetwork, ExternalAdsProviderName } from "@ads/types";

export const productConfig = {
  name: "Ad Intelligence",
  description: "Inteligencia criativa e mineracao de anuncios para times de growth.",
  supportEmail: "support@example.com"
} as const;

export const supportedAdNetworks: Array<{
  id: AdNetwork;
  label: string;
  primaryProvider: ExternalAdsProviderName;
  fallbackProviders: ExternalAdsProviderName[];
}> = [
  {
    id: "meta",
    label: "Meta Ads",
    primaryProvider: "scrapecreators",
    fallbackProviders: []
  },
  {
    id: "google",
    label: "Google Ads",
    primaryProvider: "scrapecreators",
    fallbackProviders: []
  },
  {
    id: "tiktok",
    label: "TikTok Ads",
    primaryProvider: "scrapecreators",
    fallbackProviders: ["adlibrary"]
  }
];
