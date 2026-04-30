import "server-only";

import type { Collection, SavedAd } from "@ads/types";

export interface SavedAdsRepository {
  listSavedAds(workspaceId: string): Promise<SavedAd[]>;
  saveAd(params: {
    workspaceId: string;
    adId: string;
    notes?: string;
  }): Promise<void>;
  removeSavedAd(params: { workspaceId: string; savedAdId: string }): Promise<void>;
}

export interface CollectionsRepository {
  listCollections(workspaceId: string): Promise<Collection[]>;
  createCollection(params: {
    workspaceId: string;
    name: string;
    description?: string;
  }): Promise<Collection>;
}
