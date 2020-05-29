<template>
  <div class="form-step-form">
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
        <template #other="{active}">
          <el-button
            type="primary"
            v-if="active == stepData.length - 1"
            @click="again"
          >
            再来一单
          </el-button>
          <el-button v-if="active == stepData.length - 1">查看详细</el-button>
        </template>
      </step-form>
    </el-col>
  </div>
</template>
<script>
import StepForm from "@/components/StepForm";
import BaseForm from "./components/Base";
import Reconfirm from "./components/Reconfirm";
import Ok from "./components/Ok";
import { Col, Button } from "element-ui";
export default {
  name: "formStepForm",
  components: {
    elCol: Col,
    elButton: Button,
    StepForm
  },
  data() {
    return {
      stepData: [
        {
          title: "填写转账信息",
          description: "转账信息详细",
          name: "Base",
          component: BaseForm
        },
        {
          title: "确认转账信息",
          description: "确认转账信息详细",
          name: "Reconfirm",
          component: Reconfirm,
          noCache: true
        },
        {
          title: "完成转账",
          description: "完成转账信息介绍",
          name: "Ok",
          component: Ok
        }
      ]
    };
  },
  methods: {
    submit(data, done) {
      console.log(data);
      setTimeout(() => {
        done();
      }, 2000);
    },
    again() {
      console.log(this.$refs.StepForm);
      this.$refs.StepForm.resetStep();
      this.$router.replace({ path: "/redirect" + this.$route.path });
    }
  }
};
</script>
<style lang="less" scoped>
.form-step-form {
  position: relative;
}
</style>
