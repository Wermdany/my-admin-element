<template>
  <ul>
    <!-- TODO: 卸载时页面top闪烁 -->
    <!-- TODO: 在浮动时，改变宽度，不能随动 -->
    <sticky :sticky-top="85" :z-index="888"
      ><div class="sticky-box">111</div></sticky
    >
    <li v-for="i in 100" :key="i.id">{{ i }}</li>
  </ul>
</template>
<script>
import Sticky from "@/components/Sticky/index.vue";
export default {
  name: "componentsSticky",
  components: {
    Sticky
  }
};
</script>
<style lang="less" scoped>
.sticky-box {
  background: #000;
  color: #fff;
}
</style>
