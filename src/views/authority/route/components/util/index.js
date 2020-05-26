/**
 * 递归拼装title
 *
 * @export
 * @param {Object} Node
 * @returns {String}
 */
export function pythonTitle(Node) {
  if (!Node) return "根节点";
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
 * @param {*} module 总
 * @param {} del 删除的模块名
 * @returns
 */
export function formatModulesToAll(module, del) {
  let res = [];
  for (const key in module) {
    if (module.hasOwnProperty(key) && key !== del) {
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
