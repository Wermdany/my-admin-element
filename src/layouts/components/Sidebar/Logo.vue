<template>
  <div class="logo-container">
    <transition name="sidebarLogoFade">
      <app-link to="/" v-if="collapse">
        <img src="@/assets/logo.png" alt="logo" />
      </app-link>
    </transition>
    <transition name="sidebarLogoFade">
      <app-link to="/" v-if="!collapse">
        <img src="@/assets/logo.png" alt="logo" />
        <h1>My-Admin-Element</h1>
      </app-link>
    </transition>
  </div>
</template>
<script>
/**
 * 侧边栏logo组件
 *  1. 固定到侧边栏顶部
 *  2. 支持显示logo或者不显示 logo
 *  3. 在显示logo的情况下，支持展开和收缩，展开显示系统名字和logo,收缩只展示logo
 */
import Link from "./Link";
export default {
  name: "Logo",
  props: {
    collapse: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  components: {
    appLink: Link
  }
};
</script>
