import React from "react";

export const permissions = [
  {
    roleId: 1,
    permission: ["dashboard", "zone"],
  },
  {
    roleId: 2,
    permission: [
      "dashboard",
      "national",
      "zone",
      "depot",
      "territory",
      "dealer",
      "dashscheduleboard",
    ],
  },
];

const zonepermision = [
  {
    roleId: 1,
    permissions: [1, 2, 3, 4],
  },
  {
    roleId: 2,
    permissions: [1, 2,4,5],
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

export function rolePermission() {
  const roleId = parseInt(localStorage.getItem("roleId"));

  const role = zonepermision.find((role) => {
    return role.roleId === roleId;
  });
  return role;
}

export const zoneData = [
  {
    id: 1,
    name: "North",
  },
  {
    id: 2,
    name: "South",
  },
  {
    id: 3,
    name: "East",
  },
  {
    id: 4,
    name: "West",
  },
  {
    id: 5,
    name: "Other",
  },
];
