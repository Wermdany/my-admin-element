<template>
  <div class="authority-auth--add">
    <el-col
      :xs="24"
      :sm="{ span: 20, offset: 2 }"
      :md="{ span: 20, offset: 2 }"
      :lg="{ span: 14, offset: 5 }"
      :xl="{ span: 12, offset: 6 }"
    >
      <step-form
        :data="stepData"
        ref="StepForm"
        @form-submit="submit"
        :submit-active="1"
      >
        <template #other="{ active }">
          <el-button
            v-if="active == stepData.length - 1"
            type="success"
            @click="cancel"
            >完成</el-button
          >
          <el-button v-if="active == stepData.length - 1" @click="again"
            >再次添加</el-button
          >
        </template>
      </step-form>
    </el-col>
  </div>
</template>
<script>
import StepForm from "@/components/StepForm";
import BaseForm from "../components/BaseForm";
import AuthForm from "../components/AuthForm";
import Ok from "@/views/form/step-form/components/Ok";
import { Col, Button } from "element-ui";
export default {
  name: "authorityAuthAdd",
  components: {
    elCol: Col,
    elButton: Button,
    StepForm
  },
  data() {
    return {
      stepData: [
        {
          title: "填写基本信息",
          name: "AuthFormBase",
          component: BaseForm
        },
        {
          title: "设置权限",
          name: "AuthFormAuth",
          component: AuthForm
        },
        {
          title: "完成权限新增",
          name: "Ok",
          component: Ok
        }
      ]
    };
  },
  methods: {
    submit(data, done) {
      console.log(data);
      done();
    },
    cancel() {
      this.$store.dispatch("tagsView/delView", this.$route);
      this.$router.push("/authority/auth/list");
    },
    again() {
      this.$refs.StepForm.resetStep();
      this.$router.replace({ path: "/redirect" + this.$route.path });
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixins.less";
.authority-auth--add {
  .box(15px, #fff);
  .clearFloat();
}
</style>
