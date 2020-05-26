<template>
  <div class="auth-form--base">
    <el-form :model="model" :rules="rules">
      <el-form-item label="权限名：" :label-width="labelWIdth" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item
        label="权限描述："
        :label-width="labelWIdth"
        prop="detailed"
      >
        <el-input v-model="model.detailed"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Form, FormItem, Input } from "element-ui";
export default {
  name: "AuthFormBase",
  components: {
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input
  },
  data() {
    this.labelWIdth = "100px";
    this.rules = {
      name: [
        {
          required: true,
          trigger: "blur"
        }
      ],
      detailed: [
        {
          required: true,
          trigger: "blur"
        }
      ]
    };
    return {
      model: {
        name: "",
        detailed: ""
      }
    };
  }
};
</script>
