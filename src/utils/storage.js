class Storage {
  constructor() { }
  static get(key) {
    return JSON.parse(localStorage.getItem(key));
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
