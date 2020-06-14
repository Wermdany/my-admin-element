<template>
  <div class="chart-area">
    <div id="chart-area"></div>
  </div>
</template>
<script>
import { Chart } from "@antv/g2";
import { resizeEvent } from "@/utils";
export default {
  name: "ChartArea",
  data() {
    this.chartData = [
      { x: "2020-06-12", y: 7 },
      { x: "2020-06-13", y: 5 },
      { x: "2020-06-14", y: 4 },
      { x: "2020-06-15", y: 2 },
      { x: "2020-06-16", y: 4 },
      { x: "2020-06-17", y: 7 },
      { x: "2020-06-18", y: 5 },
      { x: "2020-06-19", y: 6 },
      { x: "2020-06-20", y: 5 },
      { x: "2020-06-21", y: 9 },
      { x: "2020-06-22", y: 6 },
      { x: "2020-06-23", y: 3 },
      { x: "2020-06-24", y: 1 },
      { x: "2020-06-25", y: 5 },
      { x: "2020-06-26", y: 3 },
      { x: "2020-06-27", y: 6 },
      { x: "2020-06-28", y: 5 }
    ];
    return {};
  },
  methods: {
    init() {
      const chart = new Chart({
        container: "chart-area",
        autoFit: true,
        height: 100,
        padding: [27, 10],
        pixelRatio: window.devicePixelRatio * 2
      });
      chart.data(this.chartData);
      chart.tooltip({
        showCrosshairs: false, // 展示 Tooltip 辅助线
        showTitle: false,
        shared: true,
        itemTpl: `<li data-index="0" style="margin: 0px 0px 8px; list-style-type: none; padding: 0px;">
        <span style="background-color:{color};" class="g2-tooltip-marker"></span>{xx}
      <span class="g2-tooltip-value" style="display: inline-block; float: right; margin-left: 30px;">{yy}</span></li>`
      });
      chart
        .area()
        .position("x*y")
        .shape("smooth")
        .color("#975fe4")
        .style({
          fillOpacity: 1
        })
        .tooltip("x*y", (x, y) => {
          return { xx: x, yy: y };
        });
      chart.axis(false);
      return chart;
    }
  },
  mounted() {
    this.init().render();
    resizeEvent();
  }
};
</script>
<style lang="less" scoped>
.chart-area {
  position: relative;
  width: 100%;
  margin-bottom: -28px;
}
</style>
