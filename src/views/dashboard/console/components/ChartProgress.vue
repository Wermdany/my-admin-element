<template>
  <div class="chart-progress">
    <el-progress v-bind="$attrs"></el-progress>
  </div>
</template>
<script>
import { Progress } from "element-ui";
export default {
  name: "ChartProgress",
  inheritAttrs: false,
  components: {
    elProgress: Progress
  }
};
</script>
