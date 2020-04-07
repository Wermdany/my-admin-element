<script>
export default {
  name: "MenuItem",
  functional: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  render(h, content) {
    const { icon, title } = content.props;
    const VNode = [];
    if (icon) {
      VNode.push(<i class={"el-icon-" + icon}></i>);
    } else {
      // 无论如何都要添加让文字左对齐，一般的，根路由必须要有图标
      VNode.push(<i class={"el-icon-"}></i>);
    }
    if (title) {
      VNode.push(<span slot="title">{title}</span>);
    }
    return VNode;
  }
};
</script>
