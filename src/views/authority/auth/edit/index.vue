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
      <div class="authority-auth--footer">
        <el-button type="primary" @click="submit">完成</el-button>
        <el-button>清空</el-button>
      </div>
    </el-col>
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
    submit() {
      const node = this.$refs.AuthForm.getNode();
      const model = this.$refs.BaseForm.model;
      console.log(Object.assign({}, { route: node }, model));
    }
  },
  created() {
    this.request();
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/variables.less";
.hidden-sidebar {
  .authority-auth--edit {
    .authority-auth--footer {
      width: calc(100% - @sideBarHiddenWidth);
    }
  }
}
.app-wrapper.mobile {
  .authority-auth--edit {
    .authority-auth--footer {
      width: 100%;
    }
  }
}
.authority-auth--edit {
  .authority-auth--footer {
    position: fixed;
    bottom: 0;
    right: 0;
    width: calc(100% - @sideBarWidth);
    background: #fff;
    padding: 10px 0;
    transition: all 0.28s;
    text-align: center;
  }
}
</style>
