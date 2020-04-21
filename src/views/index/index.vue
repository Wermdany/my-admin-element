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
      test()
        .then(res1 => {
          console.log(res1);
        })
        .catch(res => {
          console.log(res);
        });
      testOne()
        .then(res2 => {
          console.log(res2);
        })
        .catch(res2 => {
          console.log(res2);
        });
    },
    cancel() {
      this.$store.dispatch("http/cancel", { funNames: ["testOne"] });
    }
  }
};
</script>
