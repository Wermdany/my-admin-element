class Storage {
  constructor() { }
  static get(key) {
    const res = localStorage.getItem(key);
    if (res === "true") {
      return true;
    }
    if (res === "false") {
      return false;
    }
    //在查看Vuex的值的时候，一定要点一下，刷新Base还会是上个状态
    return JSON.parse(res);
  }
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static remove(key) {
    localStorage.removeItem(key);
  }
  static clearAll() {
    localStorage.clear();
  }
}
export default Storage;
