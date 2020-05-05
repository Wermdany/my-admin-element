<template>
  <ul class="main">
    <el-input v-model="Input"></el-input>
    <el-button @click="get" type="primary">请求</el-button>
    <el-button @click="cancel" type="danger">取消请求</el-button>
    <li v-for="i in 100" :key="i">{{ i }}</li>
  </ul>
</template>
<script>
import { test, testOne } from "@/api/test";
import { Button, Input } from "element-ui";
import { alwayResolve } from "@/utils";
export default {
  name: "index",
  components: {
    elButton: Button,
    elInput: Input
  },
  data() {
    return {
      Input: ""
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      // alwayResolve({
      //   test: test,
      //   testOne: testOne
      // })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(res => {
      //     console.log(res);
      //   });
      testOne()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    cancel() {
      this.$store.dispatch("http/cancel", { funNames: ["testOne"] });
    }
  }
};
</script>
