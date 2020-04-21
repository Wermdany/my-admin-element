<template>
  <el-tooltip v-bind="$attrs">
    <i :class="className" :style="styles"></i>
  </el-tooltip>
</template>
<script>
import { Tooltip } from "element-ui";
export default {
  name: "Tips",
  props: {
    icon: {
      default: "warning",
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
        padding: "0 5px",
        cursor: "pointer",
        color: "inherit"
      };
    }
  }
};
</script>
