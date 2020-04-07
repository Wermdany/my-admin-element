<template>
  <nav class="navbar">
    <hamburger @toggleClick="toggleClick" :is-collapse="sidebar" />
    <breadcrumb />
    <div class="nav-menu--right">
      <size-selete />
      <setting />
    </div>
  </nav>
</template>
<script>
import Hamburger from "@/components/Hamburger";
import Breadcrumb from "@/components/Breadcrumb";
import SizeSelete from "@/components/SizeSelect";
import Setting from "@/layouts/components/Settings";
import { mapState } from "vuex";
export default {
  name: "NavBar",
  components: {
    Hamburger,
    Breadcrumb,
    SizeSelete,
    Setting
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar.isCollapse
    })
  },
  methods: {
    toggleClick() {
      this.$store.dispatch("app/toggleSideBar");
    }
  }
};
</script>
<style lang="less" scoped>
.navbar {
  height: 50px;
  background: #fff;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.nav-menu--right {
  float: right;
  margin-right: 18px;
}
</style>
