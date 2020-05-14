<template>
  <div>
    <Logo :collapse="isCollapse" v-if="sidebarLogo" />
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
        <sidebar-item
          v-for="item in routes"
          :key="item.path"
          :item="item"
          :base-path="item.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { Menu, Scrollbar } from "element-ui";
import SidebarItem from "./SidebarItem";
import Logo from "@/layouts/components/Logo";
import setting from "@/styles/variables.less";
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  components: {
    elMenu: Menu,
    elScrollbar: Scrollbar,
    SidebarItem,
    Logo
  },
  computed: {
    ...mapGetters(["routes"]),
    activeMenu() {
      return this.$route.path;
    },
    isCollapse() {
      return this.$store.state.app.sidebar.isCollapse;
    },
    setting() {
      return setting;
    },
    sidebarLogo() {
      return this.$store.state.app.sidebarLogo;
    }
  }
};
</script>
