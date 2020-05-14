<template>
  <div class="authority-route--default">
    <el-alert type="warning" style="margin-bottom:10px;"
      >默认设置，根据系统前端路由表计算出的所有路由表配置，仅供查看</el-alert
    >
    <div class="header">
      <el-radio-group v-model="catType">
        <el-radio-button
          :label="item.label"
          v-for="item in radioButton"
          :key="item.label"
          >{{ item.text }}</el-radio-button
        >
      </el-radio-group>
      <el-select
        v-if="catType === 'module'"
        style="margin-left:10px;"
        v-model="modulesSelected"
        placeholder="请选择需要查看的模块"
        clearable
      >
        <el-option
          v-for="item in moduleList"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>
    <route-tree :data="showRoutes" @catDetail="catDetail" />
    <el-dialog :visible.sync="visible" :show-close="false" center>
      <div slot="title">{{ title }}</div>
      <div class="body">
        <route-form :disabled="true" :model.sync="formModel" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
import defaultRoutes from "@/router/generateAllRoute";
import defaultRouteConfig from "@/router/itemFormat";
import RouteTree from "./RouteTree";
import { merge } from "lodash-es";
import {
  RadioGroup,
  RadioButton,
  Select,
  Option,
  Dialog,
  Alert
} from "element-ui";
import RouteForm from "../components/RouteForm";
import { pythonTitle, formatModulesToAll } from "./util";
export default {
  name: "AuthorityRouteDefault",
  components: {
    elRadioGroup: RadioGroup,
    elRadioButton: RadioButton,
    elSelect: Select,
    elOption: Option,
    elDialog: Dialog,
    elAlert: Alert,
    RouteForm,
    RouteTree
  },
  data() {
    this.radioButton = [
      {
        label: "all",
        text: "查看全部"
      },
      {
        label: "module",
        text: "按模块查看"
      }
    ];
    return {
      //深拷贝不影响原本数据
      defaultRoutes: this.$deepCopy(defaultRoutes),
      // 查看类型
      catType: "all",
      // 按模块查看的查看模块名
      modulesSelected: "",
      // 弹出框是否可见
      visible: false,
      formModel: {},
      title: ""
    };
  },
  computed: {
    moduleList() {
      return Object.keys(this.defaultRoutes);
    },
    showRoutes() {
      if (this.catType === "all") {
        return formatModulesToAll(this.defaultRoutes);
      } else if (this.catType === "module") {
        return this.modulesSelected
          ? this.defaultRoutes[this.modulesSelected]
          : [];
      } else {
        return [];
      }
    }
  },

  methods: {
    catDetail(data, node) {
      this.visible = true;
      //合并默认属性
      this.formModel = merge(
        this.$deepCopy(defaultRouteConfig),
        this.$deepCopy(data)
      );
      this.title = pythonTitle(node);
    }
  }
};
</script>
<style lang="less" scoped>
.authority-route--default {
  .header {
    overflow: hidden;
    margin-bottom: 10px;
  }
}
</style>
