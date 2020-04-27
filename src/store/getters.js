const getters = {
  token: state => state.user.userData.token,
  http: state => state.http.cancel,
  cachedViews: state => state.tagsView.cachedViews,
  visitedViews: state => state.tagsView.visitedViews,
  addRoutes: state => state.permission.addRoutes,
  routes: state => state.permission.routes,
  indexPage: state => state.permission.firstRedirect.redirect
};

export default getters;
