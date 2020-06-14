<template>
  <div class="tags-view-container">
    <div class="tags-view-box">
      <scroll-pane ref="scrollPane">
        <router-link
          v-for="tag in visitedViews"
          :key="tag.path"
          :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
          tag="span"
          ref="tag"
          :class="isActive(tag) ? 'active' : ''"
          class="tags-view-item"
          :title="tag.meta.introduce"
          @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
          @contextmenu.prevent.native="openMenu(tag, $event)"
          >{{ tag.meta.title
          }}<span
            v-if="!isAffix(tag)"
            class="el-icon-close"
            @click.prevent.stop="closeSelectedTag(tag)"
          />
        </router-link>
      </scroll-pane>
    </div>
    <ul
      v-show="visible"
      :style="{ left: left + 'px', top: top + 'px' }"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">
        <i class="el-icon-refresh"></i>刷新
      </li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        <i class="el-icon-circle-close"></i>关闭
      </li>
      <li @click="closeOthersTags(selectedTag)">
        <i class="el-icon-circle-close"></i>关闭其他
      </li>
      <li @click="closeAllTags(selectedTag)">
        <i class="el-icon-circle-close"></i>关闭所有
      </li>
    </ul>
  </div>
</template>
<script>
/**
 *
 *  标签页，可以进行缓存页面数据
 *  1. 可以显示是否显示，默认显示;
 *  2. 可以单个删除;
 *  3. 可以滚动；
 *  4. 右键，刷新当前、关闭当前、关闭其他所有、关闭所有
 *
 */
import "./index.less";

import ScrollPane from "./ScrollPane";
import { mapGetters } from "vuex";
import path from "path";
export default {
  name: "TagsView",
  components: {
    ScrollPane
  },
  data() {
    return {
      visible: false,
      left: 0,
      top: 0,
      selectedTag: {},
      affixTags: []
    };
  },
  computed: {
    ...mapGetters(["visitedViews", "routes", "indexPage"])
  },
  methods: {
    isAffix(tag) {
      return tag.meta && tag.meta.affix;
    },
    isActive(tag) {
      return tag.path === this.$route.path;
    },
    closeSelectedTag(view) {
      this.$store
        .dispatch("tagsView/delView", view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view);
          }
        });
    },
    refreshSelectedTag(view) {
      this.$store.dispatch("tagsView/delCachedView", view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router.replace({
            path: "/redirect" + fullPath
          });
        });
      });
    },
    closeAllTags(view) {
      this.$store
        .dispatch("tagsView/delAllViews", view)
        .then(({ visitedViews }) => {
          this.toLastView(visitedViews, view);
        });
    },
    closeOthersTags(view) {
      if (view.path !== this.$route.path) {
        this.$router.push(view);
      }
      this.$store.dispatch("tagsView/delOthersViews", view).then(() => {
        this.moveToCurrentTag();
      });
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addView", this.$route);
      }
      return false;
    },
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags(this.routes));
      for (const tag of affixTags) {
        if (tag.name) {
          this.$store.dispatch("tagsView/addVisitedView", tag);
        }
      }
    },
    filterAffixTags(routes, basePath = "/") {
      let tags = [];
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          });
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        if (latestView.fullPath != this.$route.fullPath) {
          this.$router.push(latestView.fullPath);
        }
      } else {
        if (view.path === this.indexPage.path) {
          this.$router.replace({ path: "/redirect" + view.fullPath });
        } else {
          this.$router.push("/");
        }
      }
    },
    openMenu(view, e) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left;
      const offsetWidth = this.$el.offsetWidth;
      const maxLeft = offsetWidth - menuMinWidth;
      const left = e.clientX - offsetLeft + 15;

      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }

      this.top = e.clientY;
      this.visible = true;
      this.selectedTag = view;
    },
    closeMenu() {
      this.visible = false;
      this.selectedTag = {};
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag);
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch("tagsView/updateVisitedView", this.$route);
            }
            break;
          }
        }
      });
    }
  },
  watch: {
    $route() {
      this.addTags();
    },
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    }
  },
  mounted() {
    this.initTags();
    this.addTags();
  }
};
</script>
