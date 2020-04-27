<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="
            item.redirect === 'noRedirect' ||
              item.redirect === thisPath ||
              index == levelList.length - 1
          "
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <app-link v-else :to="handleLink(item)">{{ item.meta.title }}</app-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
import pathToRegexp from "path-to-regexp";
import AppLink from "@/layouts/components/Sidebar/Link";
import { mapGetters } from "vuex";
export default {
  components: {
    elBreadcrumb: Breadcrumb,
    elBreadcrumbItem: BreadcrumbItem,
    AppLink
  },
  data() {
    return {
      levelList: null
    };
  },
  computed: {
    ...mapGetters(["indexPage"]),
    // 如果跳转的页面和当前页面相同就不需要跳转
    thisPath() {
      return this.$route.path;
    }
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith("/redirect/")) {
        return;
      }
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      //如果当前的页面等于登录时候设置的首页，则返回首页
      if (this.thisPath === this.indexPage) {
        this.levelList = [{ path: this.indexPage, meta: { title: "首页" } }];
        return;
      } else {
        matched = [{ path: this.indexPage, meta: { title: "首页" } }].concat(
          matched
        );
      }

      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    // 改为 router-link 标签 跳转
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        return redirect;
      }
      return this.pathCompile(path);
    }
  }
};
</script>
