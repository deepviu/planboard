import React from "react";

export const permissions = [
  {
    roleId: 1,
    permission: ["dashboard", "zone"],
  },
  {
    roleId: 2,
    permission: ["dashboard", "zone", "depot", "territory","dealer","dashscheduleboard"],
  },
];
export function hasPermission(roleId, permissionToCheck) {
  const role = permissions.find((role) => {
    return role.roleId === roleId;
  });
  if (role) {
    return role.permission.includes(permissionToCheck);
  }
  return false;
}
