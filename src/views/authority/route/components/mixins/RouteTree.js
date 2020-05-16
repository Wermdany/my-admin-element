/**
 *
 * 路由树混入方法
 *
 */
import { replaceNode } from "../util/index";
export default {
  methods: {
    /**
     * 删除一个节点
     *
     * @param {Object} data 删除节点的 data
     */
    $_nodeDelete(data) {
      this.$refs.Tree.remove(data);
    },
    /**
     * 修改一个节点
     *
     * @param {*} oldNode
     * @param {*} newNode
     * @param {*} all
     */
    $_nodeEdit(oldNode, newNode, all) {
      replaceNode(all, "path", oldNode.path, newNode);
    },
    /**
     * 插入一个子节点
     *
     * @param {Object} children 增加节点的 data
     * @param {Object} parent 被增加节点的 data
     */
    $_nodeAppend(parent, children) {
      this.$refs.Tree.append(children, parent);
    },
    /**
     * 在前插入一个节点
     *
     * @param {Object} self 增加节点的 data
     * @param {Object} node 被增加节点的 data
     */
    $_nodeInsertBefore(node, self) {
      this.$refs.Tree.insertBefore(self, node);
    },
    /**
     * 在后插入一个节点
     *
     * @param {Object} self 增加节点的 data
     * @param {Object} node 被增加节点的 data
     */
    $_nodeInsertAfter(node, self) {
      this.$refs.Tree.insertAfter(self, node);
    }
  }
};
