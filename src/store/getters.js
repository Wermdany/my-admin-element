const getters = {
  token: state => state.user.token,
  http: state => state.http.cancel
};

export default getters;
