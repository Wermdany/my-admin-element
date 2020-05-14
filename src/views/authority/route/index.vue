<template>
  <div class="authority-route">
    <el-tabs v-model="selected" type="card">
      <el-tab-pane
        v-for="tab in tabsConfig"
        :key="tab.name"
        :name="tab.name"
        :label="tab.label"
        :lazy="true"
      >
        <component :is="tab.components" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { Tabs, TabPane } from "element-ui";
export default {
  name: "authorityRoute",
  components: {
    elTabs: Tabs,
    elTabPane: TabPane
  },
  data() {
    // tabs 设置
    this.tabsConfig = [
      {
        label: "默认设置",
        name: "default",
        components: () => import("./components/Default")
      },
      {
        label: "服务器设置",
        name: "service",
        components: () => import("./components/Service")
      }
    ];
    return {
      selected: "service"
    };
  }
};
</script>
<style lang="less" scoped></style>
