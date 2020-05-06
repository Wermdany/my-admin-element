<template>
  <nav class="navbar">
    <hamburger @toggleClick="toggleClick" :is-collapse="sidebar" />
    <breadcrumb />
    <div class="nav-menu--right">
      <header-search />
      <size-selete />
      <setting />
      <redirct />
      <user />
    </div>
  </nav>
</template>
<script>
import Hamburger from "@/components/Hamburger";
import Breadcrumb from "@/components/Breadcrumb";
import SizeSelete from "@/components/SizeSelect";
import Redirct from "@/components/Redirect";
import User from "@/components/User";
import Setting from "@/layouts/components/Settings";
import HeaderSearch from "@/components/HeaderSearch";
import { mapState } from "vuex";
export default {
  name: "NavBar",
  components: {
    Hamburger,
    Breadcrumb,
    SizeSelete,
    Setting,
    User,
    Redirct,
    HeaderSearch
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
