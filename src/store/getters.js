const getters = {
  token: state => state.user.userData.token,
  http: state => state.http.cancel,
  cachedViews: state => state.tagsView.cachedViews,
  visitedViews: state => state.tagsView.visitedViews
};

export default getters;
