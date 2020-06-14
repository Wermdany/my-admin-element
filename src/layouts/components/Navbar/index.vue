<template>
  <nav class="navbar">
    <hamburger @toggleClick="toggleClick" :is-collapse="sidebar" />
    <breadcrumb v-if="device !== 'SM'" />
    <div class="nav-menu--right">
      <template v-if="device !== 'SM'">
        <header-search />
        <size-selete />
        <setting />
        <redirct />
      </template>
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
import { resizeEvent } from "@/utils";
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
      sidebar: state => state.app.sidebar.isCollapse,
      device: state => state.app.device
    })
  },
  methods: {
    toggleClick() {
      this.$store.dispatch("app/toggleSideBar");
      if (this.device !== "SM") resizeEvent();
    }
  }
};
</script>
