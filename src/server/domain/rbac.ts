import { Role } from "@client/shared/generated/prisma/client";

/**
 * RBAC Hierarchy (Higher index means higher privilege)
 */
const roleHierarchy: Role[] = [
  Role.NEWCOMER,
  Role.MEMBER,
  Role.LEADER,
  Role.PASTOR,
  Role.SENIOR_PASTOR,
  Role.ADMIN,
];

export function checkRole(userRole: Role, requiredRole: Role): boolean {
  const userRoleIndex = roleHierarchy.indexOf(userRole);
  const requiredRoleIndex = roleHierarchy.indexOf(requiredRole);

  if (userRoleIndex === -1 || requiredRoleIndex === -1) return false;
  return userRoleIndex >= requiredRoleIndex;
}

export function isAdmin(role: Role): boolean {
  return role === Role.ADMIN;
}
