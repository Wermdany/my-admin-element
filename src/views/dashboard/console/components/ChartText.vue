<template>
  <div class="chart-text">
    周同比 {{ week }}%
    <i class="el-icon-caret-top" style="color:#f5222d;"></i>
    日同比 {{ day }}%
    <i class="el-icon-caret-bottom" style="color:#52c41a;"></i>
  </div>
</template>
<script>
export default {
  name: "ChartText",
  props: {
    week: {
      type: Number,
      required: true
    },
    day: {
      type: Number,
      required: true
    }
  }
};
</script>
