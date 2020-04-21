<template>
  <div>
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="setting.menuBg"
        :text-color="setting.menuText"
        :unique-opened="false"
        :active-text-color="setting.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="item in route" :key="item.path" :item="item" :base-path="item.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { Menu, Scrollbar, Tooltip } from "element-ui";
import SidebarItem from "./SidebarItem";
import setting from "@/styles/variables.less";
import route from "@/router/modules/constant.static";
export default {
  name: "Sidebar",
  components: {
    elMenu: Menu,
    elScrollbar: Scrollbar,
    SidebarItem,
    // eslint-disable-next-line vue/no-unused-components
    elTooltip: Tooltip
  },
  computed: {
    activeMenu() {
      return this.$route.path;
    },
    isCollapse() {
      return this.$store.state.app.sidebar.isCollapse;
    },
    setting() {
      return setting;
    },
    route() {
      return route;
    }
  }
};
</script>
