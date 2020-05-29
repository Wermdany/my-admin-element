<template>
  <div class="authority-auth--edit">
    <el-col
      :xs="24"
      :sm="{ span: 20, offset: 2 }"
      :md="{ span: 20, offset: 2 }"
      :lg="{ span: 14, offset: 5 }"
      :xl="{ span: 12, offset: 6 }"
    >
      <base-form ref="BaseForm" />
      <auth-form ref="AuthForm" />
    </el-col>
    <div class="authority-auth--footer">
      <el-button type="primary" @click="submit">完成</el-button>
      <el-button @click="reset">清空</el-button>
    </div>
  </div>
</template>
<script>
import BaseForm from "../components/BaseForm";
import AuthForm from "../components/AuthForm";
import { Col, Button } from "element-ui";
import { auth } from "@/api/authority";
import { HTTP_PASS } from "@/namespace";
import { getChildrenNodeData } from "../utils";
export default {
  name: "authorityAuthEdit",
  components: {
    elCol: Col,
    elButton: Button,
    BaseForm,
    AuthForm
  },
  data() {
    return {
      model: {}
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    request() {
      auth().then(res => {
        if (res.code == HTTP_PASS) {
          this.model = res.data[this.id - 1];
          this.$refs.BaseForm.model = {
            name: this.model.name,
            detailed: this.model.detailed
          };
          let arr = [];
          getChildrenNodeData(this.model.route, arr);
          this.$refs.AuthForm.setNode(arr);
        }
      });
    },
    async submit() {
      const baseRes = await this.$refs.BaseForm.valid();
      const nodeRes = await this.$refs.AuthForm.valid();
      const node = this.$refs.AuthForm.model;
      const model = this.$refs.BaseForm.model;
      if (baseRes && nodeRes) {
        console.log(Object.assign({}, node, model));
      } else {
        this.$notify({
          title: "警告",
          message: "请按要求填写必填字段",
          type: "warning"
        });
      }
    },
    reset() {
      this.$refs.AuthForm.reset();
      this.$refs.BaseForm.reset();
    }
  },
  created() {
    this.request();
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/variables.less";

.authority-auth--edit {
  height: 100vh;
  .authority-auth--footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: @sideBarWidth;
    box-shadow: 0 -1px 4px rgba(0, 21, 41, 0.08);
    background: #fff;
    padding: 10px 0;
    transition: all 0.28s;
    text-align: center;
  }
}
.hidden-sidebar {
  .authority-auth--edit {
    .authority-auth--footer {
      left: @sideBarHiddenWidth;
    }
  }
}
.app-wrapper.mobile {
  .authority-auth--edit {
    .authority-auth--footer {
      left: 0;
    }
  }
}
</style>
