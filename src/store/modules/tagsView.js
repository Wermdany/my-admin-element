const state = {
  //
  cachedViews: [],
  visitedViews: [
    {
      path: "index",
      component: "index",
      name: "index",
      affix: true,
      meta: { title: "布局", icon: "delete" }
    }
  ]
};
const mutations = {};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
