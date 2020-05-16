<template>
  <el-tooltip v-bind="$attrs">
    <div v-if="htmlContent" slot="content" v-html="htmlContent"></div>
    <i :class="className" :style="styles"></i>
  </el-tooltip>
</template>
<script>
import { Tooltip } from "element-ui";
export default {
  name: "Tips",
  inheritAttrs: false,
  props: {
    icon: {
      default: "warning",
      type: String
    },
    htmlContent: {
      default: "",
      type: String
    }
  },
  components: {
    elTooltip: Tooltip
  },
  computed: {
    className() {
      return "el-icon-" + this.icon;
    },
    styles() {
      return {
        cursor: "pointer",
        color: "inherit"
      };
    }
  }
};
</script>
