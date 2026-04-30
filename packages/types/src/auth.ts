export type WorkspaceRole = "owner" | "admin" | "member";

export type SystemRole = "user" | "support" | "admin";

export interface AuthenticatedUser {
  id: string;
  email?: string;
  name?: string;
  avatarUrl?: string;
  systemRole: SystemRole;
}

export interface WorkspaceMembership {
  workspaceId: string;
  userId: string;
  role: WorkspaceRole;
}
