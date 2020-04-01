<template>
  <div id="app">
    <el-scrollbar wrap-class="scorllbar" :noresize="true" style="height: 100%;">
      <ul>
        <li v-for="i in 100" :key="i">{{ i }}</li>
      </ul>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { Scrollbar } from "element-ui";
export default {
  components: {
    elScrollbar: Scrollbar
  },
  methods: {
    ...mapMutations(["changeConfig"]),
    changeAllSize(size) {
      this.changeConfig({ size });
      console.log(this);
    }
  },
  created() {
    console.log(this);
  }
};
</script>
<style>
#app {
  height: 100%;
  overflow: hidden;
  min-height: auto;
}
.el-scrollbar__wrap.scorllbar {
  max-height: 100vh;
  overflow-x: hidden;
}
</style>
