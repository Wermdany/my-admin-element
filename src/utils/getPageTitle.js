import { DEFAULT_PAGE_TITLE } from "@/namespace";

export function getPageTitle(title) {
  if (title) {
    return `${DEFAULT_PAGE_TITLE} - ${title}`;
  }
  return `${DEFAULT_PAGE_TITLE}`;
}
