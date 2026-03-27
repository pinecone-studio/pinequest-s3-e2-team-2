import type { StudentStatus } from "./types";

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getStatusLabel(status: StudentStatus) {
  switch (status) {
    case "online":
      return "Онлайн";
    case "offline":
      return "Офлайн";
    case "submitted":
      return "Илгээсэн";
    default:
      return "";
  }
}
