<template>
  <div class="auth-form--auth">
    <el-form :model="model" :rules="rules" ref="Form">
      <el-form-item label="路由表：" label-width="100px" prop="route">
        <route-tree
          :data="routeTree"
          ref="RouteTree"
          use-type="select"
          :use-search="false"
          default-expand-all
          @selected-change="selectedChange"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import RouteTree from "@/views/authority/route/components/RouteTree";
import { formatModulesToAll } from "@/views/authority/route/components/util";
import allRoute from "@/router/generateAllRoute";
import { Form, FormItem } from "element-ui";
export default {
  name: "AuthFormAuth",
  components: {
    elForm: Form,
    elFormItem: FormItem,
    RouteTree
  },
  data() {
    this.routeTree = formatModulesToAll(this.$deepCopy(allRoute), "common");
    this.rules = {
      route: [
        {
          required: true,
          trigger: "blur"
        }
      ]
    };
    return {
      model: {
        route: []
      }
    };
  },
  methods: {
    setNode(node) {
      this.$refs.RouteTree.setSelectedByNode(node);
      this.model.route = node;
    },
    getNode() {
      return this.$refs.RouteTree.getSelectedNode();
    },
    async selectedChange() {
      this.model.route = await this.$refs.RouteTree.getSelectedNode();
    },
    valid() {
      return new Promise(resolve => {
        this.$refs.Form.validate(valid => {
          resolve(valid);
        });
      });
    },
    async reset() {
      await this.$refs.RouteTree.resetSelected();
      this.$refs.Form.resetFields();
    }
  }
};
</script>
