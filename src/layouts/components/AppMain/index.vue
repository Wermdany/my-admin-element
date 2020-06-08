<template>
  <section class="app-main">
    <div class="app-main__layout">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "AppMain",
  computed: {
    ...mapGetters(["cachedViews"]),
    key() {
      // 解决缓存创建
      if (this.$route.matched.length > 1) {
        return this.$route.matched[1].path;
      } else {
        return this.$route.path;
      }
    }
  }
};
</script>
