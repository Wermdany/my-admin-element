export default {
  main: () => import("@/layouts/main"),
  redirect: () => import("@/views/redirect/index"),
  index: () => import("@/views/index/index"),
  asd: () => import("@/views/index/index"),
  login: () => import("@/views/login/index")
};
