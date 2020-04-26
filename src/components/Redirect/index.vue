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
  methods: {
    refreshPage() {
      this.$router.replace({
        path: "/redirect" + this.$route.fullPath
      });
    }
  },
  computed: {
    rotate() {
      return this.$store.state.app.pageLoading;
    }
  }
};
</script>
