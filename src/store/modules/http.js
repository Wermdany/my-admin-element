/**
 *
 * http请求拦截取消
 *
 */
const state = {
  cancel: {}, // cancel方法组
  allResponse: false
};

const mutations = {
  CANCEL(state, { funNames = [], msg = "用户手动取消网络请求" }) {
    if (!Object.keys(state.cancel).length) {
      throw new Error("当前不在任何一个请求周期内，无法取消任何请求");
    }
    for (const key in state.cancel) {
      if (state.cancel.hasOwnProperty(key)) {
        if (funNames.includes(key)) {
          if (!state.cancel[key].response) {
            state.cancel[key].cancel(msg);
            state.cancel[key].response = true;
          } else {
            throw new Error(
              `当前请求周期内，请求方法：${key} 已经返回或已经取消！`
            );
          }
        }
      } else {
        throw new Error("当前请求周期内，不存在需要取消请求的方法");
      }
    }
  },
  SET_CANCEL(state, { cancel, funName }) {
    state.cancel[funName] = { cancel, response: false };
  },
  CANCEL_ALL(state, msg) {
    for (const key in state.cancel) {
      if (state.cancel.hasOwnProperty(key)) {
        if (!state.cancel[key].response) {
          state.cancel[key].cancel(msg);
        }
      }
    }
  },
  RESET_CANCEL(state) {
    state.cancel = {};
  },
  RESPONSE(state, funName) {
    if (Object.keys(state.cancel).includes(funName)) {
      state.cancel[funName].response = true;
    } else {
      throw new Error(`当前请求周期内不存在请求方法：${funName}`);
    }
  },
  CHECK_ALL_RESPONSE(state) {
    let status = true;
    for (const key in state.cancel) {
      if (state.cancel.hasOwnProperty(key)) {
        if (!state.cancel[key].response) {
          status = false;
        }
      }
    }
    state.allResponse = status;
  }
};

const actions = {
  cancel({ commit }, { funNames, msg }) {
    commit("CANCEL", { funNames, msg });
    commit("CHECK_ALL_RESPONSE");
    if (state.allResponse) {
      commit("RESET_CANCEL");
    }
  },
  setCancel({ commit }, { cancel, funName }) {
    commit("SET_CANCEL", { cancel, funName });
  },
  /**
   *取消当前请求周期的所有请求
   */
  cancelAll({ commit }, { msg }) {
    commit("CANCEL_ALL", { msg });
    commit("RESET_CANCEL");
  },
  response({ commit, state }, funName) {
    commit("RESPONSE", funName);
    commit("CHECK_ALL_RESPONSE");
    if (state.allResponse) {
      commit("RESET_CANCEL");
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
