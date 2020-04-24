<template>
  <div
    class="header-icon-item"
    style="vertical-align:top;"
    title="刷新当前页面"
    @click="refreshPage"
  >
    <i class="el-icon-refresh" :class="{ rotate }"></i>
  </div>
</template>
<script>
export default {
  name: "Redirect",
  data() {
    return {
      rotate: false
    };
  },
  methods: {
    refreshPage() {
      this.rotate = true;
      this.$router.replace({ path: "/redirect" + this.$route.fullPath });
      setTimeout(() => {
        this.rotate = false;
      }, 1000);
    }
  }
};
</script>
