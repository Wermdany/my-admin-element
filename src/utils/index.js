export function getValue(obj, key = "") {
  const reg = /[.\w]+/;
  if (!reg.test(key)) {
    throw new Error("传入的key不合法！");
  }
  return eval(`obj.${key}`);
}
export function setValue(obj, key, value) {
  const reg = /^[.\w]+$/;
  if (!reg.test(key) && !reg.test(value)) {
    throw new Error("传入的key或value不合法！");
  }
  return eval(`obj.${key}=(${value})`);
}
export function requestAll(promiseObj) {
  let res = {};
}
