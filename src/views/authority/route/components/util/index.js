export function pythonTitle(Node) {
  let res = Node.data.meta.title;
  if (Node.level < 2) {
    return `${res}`;
  } else {
    return pythonTitle(Node.parent) + "-" + res;
  }
}
export function formatModulesToAll(module) {
  let res = [];
  for (const key in module) {
    if (module.hasOwnProperty(key)) {
      res = res.concat(module[key]);
    }
  }
  return res;
}
