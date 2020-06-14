<template>
  <div class="dashboard-console">
    <top-chart></top-chart>
    <card-grid></card-grid>
    <sales-card></sales-card>
  </div>
</template>
<script>
import TopChart from "./TopChart";
import CardGrid from "./CardGrid";
import SalesCard from "./SalesCard";
export default {
  name: "dashboardConsole",
  components: {
    TopChart,
    CardGrid,
    SalesCard
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixins.less";
.dashboard-console {
  .clearFloat();
}
</style>
