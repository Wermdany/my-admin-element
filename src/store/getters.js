const getters = {
  token: state => state.user.userData.token,
  http: state => state.http.cancel,
  cachedViews: state => state.tagsView.cachedViews.map(v => v.name),
  findCachedByName: state => name => {
    let children = state.tagsView.cachedViews.find(v => v.name === name);
    if (!children) {
      return [];
    }
    return children.children
      .map(v => v.name)
      .filter((v, i, a) => a.indexOf(v) === i);
  },
  visitedViews: state => state.tagsView.visitedViews,
  addRoutes: state => state.permission.addRoutes,
  routes: state => state.permission.routes,
  indexPage: state => state.permission.firstRedirect.redirect
};

export default getters;
