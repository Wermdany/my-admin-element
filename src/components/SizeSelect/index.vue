<template>
  <el-dropdown @command="handleSetSize" trigger="click">
    <el-tooltip
      class="item"
      effect="dark"
      content="修改全局的尺寸大小"
      placement="bottom"
      :enterable="false"
      :open-delay="openDelay"
    >
      <div class="size-icon-item">
        <i class="el-icon-menu"></i>
      </div>
    </el-tooltip>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item of sizeOptions"
        :key="item.id"
        :disabled="size === item.value"
        :command="item.value"
      >{{ item.label }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tooltip,
  Loading
} from "element-ui";
export default {
  name: "SizeSelete",
  components: {
    elDropdown: Dropdown,
    elDropdownItem: DropdownItem,
    elDropdownMenu: DropdownMenu,
    elTooltip: Tooltip
  },
  data() {
    this.openDelay = 800;
    return {
      sizeOptions: [
        { label: "默认", value: "small" },
        { label: "大型", value: "medium" },
        { label: "中等", value: "small" },
        { label: "小型", value: "mini" }
      ]
    };
  },
  computed: {
    size() {
      return this.$store.state.app.size;
    }
  },
  methods: {
    handleSetSize(size) {
      this.$ELEMENT.size = size;
      this.$store.dispatch("app/setSize", size);
      this.$router.replace({ path: "/redirect" + this.$route.fullPath });
      const load = Loading.service({
        lock: true,
        text: "正在替换全局尺寸大小..."
      });
      setTimeout(() => {
        load.close();
        this.$message.success("修改全局尺寸大小成功！");
      }, 500);
    }
  }
};
</script>
