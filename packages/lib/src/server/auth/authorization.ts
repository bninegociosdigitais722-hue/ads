import "server-only";

import type { SystemRole, WorkspaceRole } from "@ads/types";

const workspaceRoleRank: Record<WorkspaceRole, number> = {
  member: 1,
  admin: 2,
  owner: 3
};

const systemRoleRank: Record<SystemRole, number> = {
  user: 1,
  support: 2,
  admin: 3
};

export function hasWorkspaceRole(
  actualRole: WorkspaceRole,
  requiredRole: WorkspaceRole
) {
  return workspaceRoleRank[actualRole] >= workspaceRoleRank[requiredRole];
}

export function hasSystemRole(actualRole: SystemRole, requiredRole: SystemRole) {
  return systemRoleRank[actualRole] >= systemRoleRank[requiredRole];
}
