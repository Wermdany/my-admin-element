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
        >{{ item.meta.title }}</span>
        <app-link v-else :to="handleLink(item)">{{ item.meta.title }}</app-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
import pathToRegexp from "path-to-regexp";
import AppLink from "@/layouts/components/Sidebar/Link";
import Item from "@/layouts/components/Sidebar/Item";
export default {
  components: {
    elBreadcrumb: Breadcrumb,
    elBreadcrumbItem: BreadcrumbItem,
    AppLink,
    Item
  },
  data() {
    return {
      levelList: null
    };
  },
  computed: {
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
      const first = matched[0];

      if (!this.isDashboard(first)) {
        matched = [{ path: "/index", meta: { title: "首页" } }].concat(matched);
      }

      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === "index".toLocaleLowerCase();
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

<style lang="less" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
