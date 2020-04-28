/**
 * 用户信息
 */

import { userLogin, userLogout } from "@/api/user";
import { USER_INFO, HTTP_PASS } from "@/namespace";
import { getStorageNullToDefault } from "@/utils/defaultVar";
import Storage from "@/utils/storage";

const state = {
  userData: getStorageNullToDefault(USER_INFO)
};
const mutations = {
  SET_USER_DATA: (state, { data, type }) => {
    state.userData = data;
    if (type) {
      Storage.set(USER_INFO, data);
    }
  },
  DEL_USER_DATA: state => {
    Storage.remove(USER_INFO);
    state.userData = getStorageNullToDefault(USER_INFO);
  }
};
const actions = {
  login({ commit }, { data, type }) {
    const { userName, passWord } = data;

    return new Promise((resolve, reject) => {
      userLogin({
        data: { userName: userName, passWord: passWord }
      })
        .then(res => {
          if (res.code == HTTP_PASS) {
            commit("SET_USER_DATA", { data: res.data, type });
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      userLogout()
        .then(res => {
          if (res.code == HTTP_PASS) {
            commit("DEL_USER_DATA");
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
