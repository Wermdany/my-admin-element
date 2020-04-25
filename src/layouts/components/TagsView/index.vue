<template>
  <div class="tags-view-container">
    <scroll-pane>
      <router-link
        v-for="tag in visitedViews"
        :key="tag.path"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
      ></router-link>
    </scroll-pane>
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
export default {
  name: "TagsView",
  components: {
    ScrollPane
  },
  computed: {
    ...mapGetters(["visitedViews"])
  }
};
</script>
