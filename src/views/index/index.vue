<template>
  <ul class="main">
    <el-button @click="get" type="primary">请求</el-button>
    <el-button @click="cancel" type="danger">取消请求</el-button>
    <once-popconfirm ref="popconfirm"></once-popconfirm>
    <el-button v-popconfirm:popconfirm>111</el-button>
  </ul>
</template>
<script>
import { test, testOne } from "@/api/test";
import { Button } from "element-ui";
import { alwayResolve } from "@/utils";
import OncePopconfirm from "@/components/OncePopconfirm";
export default {
  name: "index",
  components: {
    elButton: Button,
    OncePopconfirm
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    get() {
      alwayResolve({
        test: test,
        testOne: testOne
      })
        .then(res => {
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        });
    },
    cancel() {
      this.$store.dispatch("http/cancel", { funNames: ["testOne"] });
    }
  }
};
</script>
