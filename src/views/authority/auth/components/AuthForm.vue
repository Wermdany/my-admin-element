<template>
  <div class="auth-form--auth">
    <route-tree
      :data="routeTree"
      ref="RouteTree"
      use-type="select"
      :use-search="false"
      default-expand-all
    />
  </div>
</template>
<script>
import RouteTree from "@/views/authority/route/components/RouteTree";
import { formatModulesToAll } from "@/views/authority/route/components/util";
import allRoute from "@/router/generateAllRoute";
export default {
  name: "AuthFormAuth",
  components: {
    RouteTree
  },
  data() {
    this.routeTree = formatModulesToAll(this.$deepCopy(allRoute), "common");
    return {};
  },
  methods: {
    setNode(node) {
      this.$refs.RouteTree.setSelectedByNode(node);
    },
    getNode() {
      return this.$refs.RouteTree.getSelectedNode();
    }
  }
};
</script>
