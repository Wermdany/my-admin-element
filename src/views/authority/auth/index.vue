<template>
  <keep-alive :include="include">
    <router-view :key="key" />
  </keep-alive>
</template>
<script>
export default {
  name: "authorityAuth",
  data() {
    return {
      key: this.$route.path
    };
  },
  computed: {
    include() {
      return this.$store.getters.findCachedByName("authorityAuth");
    }
  },
  watch: {
    $route(v) {
      if (v.name.includes("authorityAuth")) {
        this.key = v.path;
      }
      if (this.include.length === 0) {
        this.key === undefined;
      }
    }
  }
};
</script>
