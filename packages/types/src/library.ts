import type { NormalizedAd } from "./ads";

export interface SavedAd {
  id: string;
  workspaceId: string;
  ad: NormalizedAd;
  notes?: string;
  savedAt: string;
}

export interface Collection {
  id: string;
  workspaceId: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CollectionItem {
  collectionId: string;
  savedAdId: string;
  addedAt: string;
}
