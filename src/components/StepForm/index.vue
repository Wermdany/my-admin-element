<template>
  <!-- 分步表单 -->
  <div class="step-form">
    <el-steps
      :active="active"
      class="step-form--steps"
      align-center
      finish-status="success"
      process-status="finish"
    >
      <el-step
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
        v-for="item in data"
        :key="item.name"
      ></el-step>
    </el-steps>
    <keep-alive :include="include">
      <component
        :is="data[active].component"
        ref="Form"
        :allModel="allData"
      ></component>
    </keep-alive>
    <div class="step-form--events">
      <el-button
        @click="submit"
        v-if="active == submitActive"
        :loading="submitLoading"
        type="success"
        >提交</el-button
      >
      <el-button @click="preStep" v-if="preStepVisible">上一步</el-button>
      <el-button @click="nexStep" type="primary" v-if="nexStepVisible"
        >下一步</el-button
      >

      <slot name="other" :active="active"></slot>
    </div>
  </div>
</template>
<script>
import { Steps, Step, Button } from "element-ui";
import { merge } from "lodash-es";
export default {
  name: "StepForm",
  inheritAttrs: false,
  props: {
    data: {
      required: true,
      type: Array
    },
    submitActive: {
      required: true,
      type: Number
    }
  },
  components: {
    elSteps: Steps,
    elStep: Step,
    elButton: Button
  },
  data() {
    return {
      active: 0,
      allData: {},
      submitLoading: false
    };
  },
  computed: {
    include() {
      return this.data.reduce((a, c) => {
        if (c.noCache) {
          return a;
        }
        a = a.concat(c.name);
        return a;
      }, []);
    },
    nexStepVisible() {
      return this.active < this.submitActive;
    },
    preStepVisible() {
      return this.active != 0 && this.active < this.submitActive + 1;
    }
  },
  methods: {
    async nexStep() {
      if (await this.validator()) {
        this.mergeModel();
        this.next();
      }
    },
    preStep() {
      this.active = this.active === 0 ? this.active : this.active - 1;
    },
    next() {
      this.active =
        this.active < this.data.length ? this.active + 1 : this.active;
    },
    mergeModel() {
      this.allData = merge(this.allData, this.$refs.Form.$data.model);
    },
    async submit() {
      if (await this.validator()) {
        this.mergeModel();
        this.submitLoading = true;
        this.$emit("form-submit", this.allData, this.nextDone);
      }
    },
    nextDone() {
      this.submitLoading = false;
      this.next();
    },
    async validator() {
      if (this.$refs.Form.valid) {
        return await this.$refs.Form.valid();
      } else {
        return true;
      }
    },
    // ref
    resetStep() {
      this.active = 0;
      this.allData = {};
    }
  }
};
</script>
<style lang="less">
.step-form {
  .step-form--steps {
    margin-bottom: 20px;
  }
  .step-form--events {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
