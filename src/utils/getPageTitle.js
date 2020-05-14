import { DEFAULT_PAGE_TITLE } from "@/namespace";

export function getPageTitle(title) {
  if (title) {
    return `${title} - ${DEFAULT_PAGE_TITLE}`;
  }
  return `${DEFAULT_PAGE_TITLE}`;
}
