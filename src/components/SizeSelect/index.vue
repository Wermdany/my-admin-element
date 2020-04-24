<template>
  <el-dropdown @command="handleSetSize" trigger="click">
    <div class="header-icon-item" title="修改全局的尺寸大小">
      <i class="el-icon-menu"></i>
      <!-- <i class="el-icon-caret-bottom tips" /> -->
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item of sizeOptions"
        :key="item.id"
        :disabled="size === item.value"
        :command="item.value"
        >{{ item.label }}</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import { Dropdown, DropdownItem, DropdownMenu, Loading } from "element-ui";
export default {
  name: "SizeSelete",
  components: {
    elDropdown: Dropdown,
    elDropdownItem: DropdownItem,
    elDropdownMenu: DropdownMenu
  },
  data() {
    return {
      sizeOptions: [
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
      this.$router.replace({ path: "/redirect-all" + this.$route.fullPath });
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
