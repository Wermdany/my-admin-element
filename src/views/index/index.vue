<template>
  <ul class="main">
    <el-button @click="get" type="primary">请求</el-button>
    <el-button @click="cancel" type="danger">取消请求</el-button>
    <li v-for="i in 100" :key="i">{{ i }}</li>
  </ul>
</template>
<script>
import { test, testOne } from "@/api/test";
import { Button } from "element-ui";
import { alwayResolve } from "@/utils";
export default {
  name: "index",
  components: {
    elButton: Button
  },
  data() {
    return {};
  },
  methods: {
    get() {
      alwayResolve({ test1: test, test2: testOne })
        .then(res => {
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        });
    },
    cancel() {
      this.$store.dispatch("http/cancel", { funNames: ["testOne", "test"] });
    }
  },
  created() {
    this.get();
  }
};
</script>
