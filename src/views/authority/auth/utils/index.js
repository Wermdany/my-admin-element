export function getChildrenNode(Node, key, res) {
  if (!Array.isArray(Node)) throw new Error("need a Array");
  Node.forEach(item => {
    if (item.children && item.children.length) {
      getChildrenNode(item.children, key, res);
    } else {
      res.push(item[key]);
    }
  });
}
export function getChildrenNodeData(Node, res) {
  if (!Array.isArray(Node)) throw new Error("need a Array");
  Node.forEach(item => {
    if (item.children && item.children.length) {
      getChildrenNodeData(item.children, res);
    } else {
      res.push(item);
    }
  });
}
