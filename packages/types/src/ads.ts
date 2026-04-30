export type AdNetwork = "meta" | "google" | "tiktok";

export type ExternalAdsProviderName = "scrapecreators" | "adlibrary";

export type AdCreativeFormat =
  | "image"
  | "video"
  | "carousel"
  | "text"
  | "unknown";

export type AdStatus = "active" | "inactive" | "unknown";

export interface NormalizedAdMedia {
  url: string;
  type: AdCreativeFormat;
  width?: number;
  height?: number;
  durationSeconds?: number;
  thumbnailUrl?: string;
}

export interface NormalizedAdvertiser {
  externalId?: string;
  name: string;
  profileUrl?: string;
  verified?: boolean;
}

export interface NormalizedAd {
  id: string;
  externalId: string;
  network: AdNetwork;
  provider: ExternalAdsProviderName;
  advertiser: NormalizedAdvertiser;
  headline?: string;
  body?: string;
  cta?: string;
  landingPageUrl?: string;
  displayUrl?: string;
  media: NormalizedAdMedia[];
  status: AdStatus;
  firstSeenAt?: string;
  lastSeenAt?: string;
  rawPayload?: unknown;
}

export interface AdsSearchQuery {
  network: AdNetwork;
  query?: string;
  advertiserName?: string;
  domain?: string;
  country?: string;
  language?: string;
  cursor?: string;
  limit?: number;
}

export interface AdsSearchResult {
  items: NormalizedAd[];
  nextCursor?: string;
  provider: ExternalAdsProviderName;
  network: AdNetwork;
}
