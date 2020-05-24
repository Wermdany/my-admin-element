<template>
  <div class="authority-route--service">
    <el-alert type="warning" style="margin-bottom:10px;"
      >服务器设置，主要是把本地的默认路由设置，保存至服务器端，同时可以对路由节点进行任意的修改和删除，支持拖拽排序；<br />第一次启用此功能一般是初始化服务器设置，全部保存至服务器，然后再此基础上进行修改；<br />如果对本系统充分了解可以直接从零编写路由，但是必须是合法的配置，并且匹配组件映射；<br />路由修改支持两种方式和服务器保持一直：<br />1.全部修改后整体保存至服务器<br />2.每次修改任意一个节点都实时保存至服务器<br />目前以默认数据模拟</el-alert
    >
    <div class="header">
      <el-button
        type="primary"
        title="向根部末尾添加一个路由节点"
        @click="addRootRoute"
        >新增</el-button
      >
      <el-button type="success" title="把本地默认路由设置保持至服务器"
        >初始化</el-button
      >
      <el-button
        type="danger"
        title="重置服务器路由设置，也就是清空服务器所有保存路由数据"
        @click="resetService"
        >重置</el-button
      >
      <el-button
        type="success"
        title="把当前页面修改都保存至服务器"
        @click="saveAll"
        >保存</el-button
      >
    </div>
    <route-tree
      ref="RouteTree"
      :data="defaultAllRoutes"
      use-type="edit"
      :draggable="true"
      @get-node="getRoute"
      @node-drop="RouteDrop"
    />
    <el-dialog
      :visible.sync="dialog_visible"
      :show-close="false"
      center
      destroy-on-close
    >
      <div slot="title">{{ dialog_title | EventFormat(event) }}</div>
      <div class="body">
        <route-form :disabled="false" :model.sync="formRoute" />
      </div>
      <span slot="footer" class="footer">
        <el-button @click="dialog_visible = false">取 消</el-button>
        <el-button type="primary" @click="saveRoute">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { Alert, Dialog, Button } from "element-ui";
import RouteTree from "./RouteTree";
import RouteForm from "./RouteForm";
import defaultAllRoutes from "@/router/generateAllRoute";
import { formatModulesToAll, pythonTitle } from "./util";
import DialogMixins from "@/mixins/dialog";
import ServiceMixins from "./mixins/Service";
import ServiceHttpMixins from "./mixins/ServiceHttp";

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
    this.eventType = [
      "Cat",
      "Edit",
      "Delete",
      "Append",
      "InsertAfter",
      "InsertBefore",
      "Drop"
    ];
    return {
      defaultAllRoutes: formatModulesToAll(this.$deepCopy(defaultAllRoutes)),
      visible: false,
      title: "",
      // 当前正在编辑的 route
      formRoute: {},
      // 选择中的 route
      selectRoute: {},
      event: ""
    };
  },
  mixins: [DialogMixins, ServiceMixins, ServiceHttpMixins],
  methods: {
    // 编辑 route
    getRoute(data, node, type) {
      this.dispenseEvent(data, node, type);
    },
    //分发事件
    dispenseEvent(data, node, type) {
      if (type > this.eventType.length)
        throw new Error("[Route tree]:未知的修改事件！");
      this["$_E_" + this.eventType[type]](data, node, type);
      if (type != 2) {
        this.beginEdit(data, node);
        return;
      }
      this.backEvent();
    },
    //开始编辑
    beginEdit(data, node) {
      this.$_setDialogTitle(pythonTitle(node));
      this.$_openDialog();
    },
    backEvent() {
      this["$_H_" + this.eventType[this.event]](
        this.selectRoute,
        this.formRoute
      )
        .then(() => {
          this.$refs.RouteTree.receiveEvent(
            this.selectRoute,
            this.formRoute,
            this.eventType[this.event],
            this.defaultAllRoutes
          );
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
    addRootRoute() {
      const lastRoute = this.defaultAllRoutes[this.defaultAllRoutes.length - 1];
      if (lastRoute) {
        const lastNode = this.$refs.RouteTree.getTreeNode(lastRoute);
        this.$_E_InsertAfter(lastRoute, lastNode, 4);
        this.beginEdit(lastRoute, lastNode);
      } else {
        this.$_E_Append({}, {}, 3);
        this.beginEdit(null, null);
      }
    },
    RouteDrop(selectNode, selfNode, location, type) {
      this.$_E_Drop(selectNode, selfNode, location).then(() => {
        this.$message.success("拖拽成功！");
      });
    },
    // 保存修改
    saveRoute() {
      this.backEvent();
      this.$_closeDialog();
    },
    saveAll() {
      //一次性保存所有节点方法
    },
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
          this.defaultAllRoutes = [];
        })
        .catch(() => {
          this.$message.warning("重置取消...");
        });
    }
  },
  filters: {
    EventFormat(v, event) {
      const word = [
        "查看",
        "编辑",
        "删除",
        "内部插入新路由",
        "后置插入新路由",
        "前置插入新路由"
      ];
      return `[ ${v} ] ${word[event]}`;
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
