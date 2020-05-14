<template>
  <div class="authority-route--service">
    <el-alert type="warning" style="margin-bottom:10px;"
      >服务器设置，主要是把本地的默认路由设置，保存至服务器端，同时可以对路由节点进行任意的修改和删除，支持拖拽排序；<br />第一次启用此功能一般是初始化服务器设置，全部保存至服务器，然后再此基础上进行修改；<br />如果对本系统充分了解可以直接从零编写路由，但是必须是合法的配置，并且匹配组件映射；<br />路由修改支持两种方式和服务器保持一直：<br />1.全部修改后整体保存至服务器<br />2.每次修改任意一个节点都实时保存至服务器<br />目前以默认数据模拟</el-alert
    >
    <div class="header">
      <el-button type="primary" title="向根部末尾添加一个路由节点"
        >新增</el-button
      >
      <el-button type="success" title="把本地默认路由设置保持至服务器"
        >初始化</el-button
      >
      <el-button
        type="danger"
        title="重置服务器路由设置，也就是清空服务器所有保存路由数据 "
        @click="resetService"
        >重置</el-button
      >
    </div>
    <route-tree :data="defaultAllRoutes" use-type="edit" />
    <el-dialog :visible.sync="visible" :show-close="false" center>
      <div slot="title">{{ title }}</div>
      <div class="body">
        <route-form :disabled="false" :model.sync="formModel" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { Alert, Button, Dialog } from "element-ui";
import RouteTree from "./RouteTree";
import RouteForm from "./RouteForm";
import defaultAllRoutes from "@/router/generateAllRoute";
import defaultRouteVal from "@/router/itemFormat";
import { formatModulesToAll } from "./util";
export default {
  name: "AuthorityRouteService",
  components: {
    elAlert: Alert,
    elButton: Button,
    elDialog: Dialog,
    RouteTree,
    RouteForm
  },
  data() {
    this.defaultRouteVal = this.$deepCopy(defaultRouteVal);
    return {
      defaultAllRoutes: formatModulesToAll(this.$deepCopy(defaultAllRoutes)),
      visible: false,
      title: "",
      formModel: {}
    };
  },
  methods: {
    resetService() {
      const h = this.$createElement;
      this.$prompt("", {
        title: "再次确认",
        message: h("p", null, [
          "如果确认重置服务端路由信息，请在下输入",
          h("b", { style: { color: "red" } }, "确认重置"),
          "以完成重置操作！"
        ]),
        inputPattern: /\u786e\u8ba4\u91cd\u7f6e/,
        inputErrorMessage: "请输入“确认重置”完成操作"
      })
        .then(() => {
          this.$message.success("重置操作...");
        })
        .catch(() => {
          this.$message.warning("重置取消...");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.authority-route--service {
  .header {
    overflow: hidden;
    margin-bottom: 10px;
  }
}
</style>
