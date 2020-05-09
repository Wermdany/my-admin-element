<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'SM' && !sidebar.isCollapse"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar
      class="sidebar-container"
      :class="{ 'has-logo': sidebarLogo }"
    ></sidebar>
    <el-scrollbar
      wrap-class="scorllbar"
      :noresize="false"
      style="height: 100%;"
    >
      <div class="main-container" :class="{ 'has-tags-view': openTagsView }">
        <header
          class="header-container"
          :class="{ 'fixed-header': fixedHeader }"
        >
          <navbar />
          <tags-view v-if="openTagsView" />
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
import ResizeMixin from "@/layouts/mixin/ResizeHandler";
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
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      openTagsView: state => state.app.openTagsView,
      fixedHeader: state => state.app.fixedHeader,
      sidebarLogo: state => state.app.sidebarLogo
    }),
    classObj() {
      return {
        "hidden-sidebar": this.sidebar.isCollapse,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "SM"
      };
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/changeSideBar", {
        isCollapse: true,
        withoutAnimation: false
      });
    }
  },
  watch: {
    aa: {
      handler() { },
      deep: true
    }
  }
};
</script>
