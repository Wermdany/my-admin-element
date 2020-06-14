/**
 * Promise 总是抛出 resolve
 * @param {Object} promiseObj promise 对象
 */
export function alwayResolve(promiseObj) {
  if (typeof promiseObj !== "object") {
    throw new Error("参数必须是一个Object");
  }
  let res = {};
  let rej = {};
  let count = 0;
  const length = Object.keys(promiseObj).length;
  return new Promise((resolve, reject) => {
    if (length === 0) {
      resolve(res);
    } else {
      // eslint-disable-next-line no-inner-declarations
      function rn(key, data, type) {
        ++count;
        if (type) {
          res[key] = data;
        } else {
          rej[key] = data;
        }
        if (count == length) {
          if (Object.keys(res).length === 0) {
            reject(Object.assign(res, rej));
          } else {
            //TODO: 如果多个请求都为相同的话，是否需要合并为一个，比如重复请求的时候。
            resolve(Object.assign(res, rej));
          }
        }
      }
      for (const key in promiseObj) {
        if (promiseObj.hasOwnProperty(key)) {
          Promise.resolve(promiseObj[key]()).then(
            data => {
              rn(key, data, true);
            },
            err => {
              rn(key, err, false);
            }
          );
        }
      }
    }
  });
}
/**
 * 函数防抖
 * @param {Function} fn 函数
 * @param {Number} delay 延迟
 * @param {Boolean} immediate 是否立即执行
 */
export function debounce(fn, delay) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    } else {
      timer = setTimeout(fn, delay);
    }
  };
}

export function resizeEvent() {
  const e = document.createEvent("Event");
  e.initEvent("resize", true, true);
  window.dispatchEvent(e);
}
