import "server-only";

import type { AuthenticatedUser } from "@ads/types";

import { createServerSupabaseClient } from "../database/supabase";

export async function getCurrentUser(): Promise<AuthenticatedUser | null> {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name:
      typeof user.user_metadata.name === "string"
        ? user.user_metadata.name
        : undefined,
    avatarUrl:
      typeof user.user_metadata.avatar_url === "string"
        ? user.user_metadata.avatar_url
        : undefined,
    systemRole:
      user.app_metadata.system_role === "admin" ||
      user.app_metadata.system_role === "support"
        ? user.app_metadata.system_role
        : "user"
  };
}

export async function requireUser(): Promise<AuthenticatedUser> {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Authentication required.");
  }

  return user;
}
