/**
 * 递归拼装title
 *
 * @export
 * @param {Object} Node
 * @returns {String}
 */
export function pythonTitle(Node) {
  let res = Node.data.meta.title;
  if (Node.level < 2) {
    return `${res}`;
  } else {
    return pythonTitle(Node.parent) + "-" + res;
  }
}
/**
 * 格式化路由表
 *
 * @export
 * @param {*} module
 * @returns
 */
export function formatModulesToAll(module) {
  let res = [];
  for (const key in module) {
    if (module.hasOwnProperty(key)) {
      res = res.concat(module[key]);
    }
  }
  return res;
}
/**
 * 查找替换 Node
 *
 * @export
 * @param {*} all 所有节点
 * @param {*} key 查找的 key
 * @param {*} val 查找的 val
 * @param {*} node 需要替换成
 */
export function replaceNode(all, key, val, node) {
  for (let i = 0; i < all.length; i++) {
    if (all[i].hasOwnProperty(key) && all[i][key] == val) {
      all.splice(i, 1, node);
      break;
    }
    if (all[i].children && all[i].children.length) {
      replaceNode(all[i].children, key, val, node);
    }
  }
}
