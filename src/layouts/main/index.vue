<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar
      class="sidebar-container"
      :class="{ 'has-logo': sidebarLogo }"
    ></sidebar>
    <el-scrollbar
      wrap-class="scorllbar"
      :noresize="false"
      style="height: 100%;"
    >
      <div class="main-container" :class="{ 'has-tags-view': needTagsView }">
        <header
          class="header-container"
          :class="{ 'fixed-header': fixedHeader }"
        >
          <navbar />
          <tags-view />
        </header>
        <app-main />
        <my-footer />
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import { AppMain, TagsView, Sidebar, Navbar, Footer } from "../components/main";
import { mapState } from "vuex";
import { Scrollbar } from "element-ui";
export default {
  name: "LayOutMain",
  components: {
    elScrollbar: Scrollbar,
    AppMain,
    TagsView,
    Sidebar,
    Navbar,
    myFooter: Footer
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      needTagsView: state => state.app.openTagsView,
      fixedHeader: state => state.app.fixedHeader,
      sidebarLogo: state => state.app.sidebarLogo
    }),
    classObj() {
      return {
        "hidden-sidebar": this.sidebar.isCollapse,
        openSidebar: this.sidebar.isCollapse,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  }
};
</script>
