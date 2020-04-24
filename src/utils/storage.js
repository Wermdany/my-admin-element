class Storage {
  constructor() { }
  static get(key) {
    const res = JSON.parse(JSON.stringify(localStorage.getItem(key)));
    if (res === "true") {
      return true;
    }
    if (res === "false") {
      return false;
    }
    return res;
  }
  static set(key, value) {
    localStorage.setItem(key, value);
  }
  static remove(key) {
    localStorage.removeItem(key);
  }
  static clearAll() {
    localStorage.clear();
  }
}
export default Storage;
