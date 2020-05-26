import http from "@/utils/request";

export function auth() {
  return http({ funName: "auth", url: "auth", method: "post" });
}
