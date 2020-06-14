<template>
  <ul class="components-sticky">
    <!-- TODO: 卸载时页面top闪烁 -->
    <!-- TODO: 在浮动时，改变宽度，不能随动 -->
    <sticky :sticky-top="95" :z-index="888"
      ><div class="sticky-box">111</div></sticky
    >
    <li v-for="i in 100" :key="i.id">{{ i }}</li>
  </ul>
</template>
<script>
import Sticky from "@/components/Sticky";
export default {
  name: "componentsSticky",
  components: {
    Sticky
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixins.less";
.components-sticky {
  .box(15px, #fff);
  .sticky-box {
    background: #000;
    color: #fff;
  }
}
</style>
