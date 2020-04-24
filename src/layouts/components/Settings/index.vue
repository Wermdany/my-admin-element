<template>
  <div
    class="header-icon-item"
    title="修改全局设置"
    style="vertical-align:top;"
    @click.stop="handleVisible"
  >
    <i class="el-icon-s-operation"></i>
    <el-drawer
      :visible.sync="visible"
      lock-scroll
      append-to-body
      custom-class="setting--drawer"
      size="250px"
      :show-close="false"
      title="系统设置"
    >
      <div class="setting-item">
        <span>固定头部：</span>
        <el-switch v-model="fixedHeader" class="switch"></el-switch>
      </div>
      <div class="setting-item">
        <span>显示Logo：</span>
        <el-switch v-model="sidebarLogo" class="switch"></el-switch>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { Switch, Drawer } from "element-ui";
export default {
  name: "Setting",
  components: {
    elSwitch: Switch,
    elDrawer: Drawer
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    size() {
      return this.$store.state.app.size;
    },
    fixedHeader: {
      get() {
        return this.$store.state.app.fixedHeader;
      },
      set() {
        this.$store.dispatch("app/toggleFixedHeader");
      }
    },
    sidebarLogo: {
      get() {
        return this.$store.state.app.sidebarLogo;
      },
      set() {
        this.$store.dispatch("app/toggleSidebarLogo");
      }
    }
  },
  methods: {
    handleVisible() {
      this.visible = true;
    }
  }
};
</script>
