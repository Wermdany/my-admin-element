<template>
  <el-select
    ref="select"
    v-model="search"
    :remote-method="querySearch"
    filterable
    default-first-option
    remote
    placeholder="搜索功能"
    class="header-search-select"
    @change="change"
  >
    <el-option
      v-for="item in options"
      :key="item.path"
      :value="item"
      :disabled="thisPath === item.path"
      class="header-search-option"
    >
      <div class="name">{{ item.title.join(" - ") }}</div>
      <div class="path">
        {{ item.path }}
      </div>
    </el-option>
  </el-select>
</template>
<script>
import Fuse from "fuse.js";
import path from "path";
import { Select, Option } from "element-ui";
import "./index.less";
import { mapGetters } from "vuex";
export default {
  name: "HeaderSearch",
  components: {
    elSelect: Select,
    elOption: Option
  },
  data() {
    this.fuseOptions = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        {
          name: "title",
          weight: 0.7
        },
        {
          name: "path",
          weight: 0.3
        }
      ]
    };
    return {
      search: "",
      options: [],
      fuse: undefined,
      searchPool: []
    };
  },
  computed: {
    ...mapGetters(["routes"]),
    thisPath() {
      return this.$route.path;
    }
  },
  mounted() {
    this.searchPool = this.generateRoutes(this.routes);
  },
  watch: {
    searchPool(list) {
      this.initFuse(list);
    }
  },
  methods: {
    generateRoutes(routes, basePath = "/", prefixTitle = []) {
      let res = [];
      for (const router of routes) {
        // skip hidden router
        if (router.hidden) {
          continue;
        }

        const data = {
          path: path.resolve(basePath, router.path),
          title: [...prefixTitle]
        };

        if (router.meta && router.meta.title) {
          data.title = [...data.title, router.meta.title];

          if (router.redirect !== "noRedirect") {
            // only push the routes with title
            // special case: need to exclude parent router without redirect
            res.push(data);
          }
        }

        // recursive child routes
        if (router.children) {
          const tempRoutes = this.generateRoutes(
            router.children,
            data.path,
            data.title
          );
          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes];
          }
        }
      }
      return res;
    },
    querySearch(query) {
      if (query !== "") {
        this.options = this.fuse.search(query).map(val => val.item);
      } else {
        this.options = [];
      }
    },
    change(val) {
      //会进行刷新，如果已经在当前页面，会取消选择，但是重定向的页面会刷新
      this.$router.replace({ path: "/redirect" + val.path });
      this.search = "";
      this.options = [];
    },
    initFuse(list) {
      this.fuse = new Fuse(list, this.fuseOptions);
    }
  }
};
</script>
