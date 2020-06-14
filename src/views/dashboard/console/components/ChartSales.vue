<template>
  <div class="cahrt-sales">
    <h4 class="rank-list__title">{{ title }}</h4>
    <div id="cahrt-sales"></div>
  </div>
</template>
<script>
import { Chart } from "@antv/g2";
import { resizeEvent } from "@/utils";
export default {
  name: "ChartSales",
  props: {
    title: {
      required: true,
      type: String
    }
  },
  data() {
    this.chart = null;
    return {
      data: [
        { x: "1月", y: 816 },
        { x: "2月", y: 542 },
        { x: "3月", y: 914 },
        { x: "4月", y: 781 },
        { x: "5月", y: 355 },
        { x: "6月", y: 796 },
        { x: "7月", y: 714 },
        { x: "8月", y: 1195 },
        { x: "9月", y: 1055 },
        { x: "10月", y: 271 },
        { x: "11月", y: 384 },
        { x: "12月", y: 1098 }
      ]
    };
  },
  methods: {
    init() {
      this.chart = new Chart({
        container: "cahrt-sales",
        autoFit: true,
        padding: [20, 20, 40, 40],
        height: 280,
        pixelRatio: window.devicePixelRatio * 2
      });
      this.chart.tooltip({
        showCrosshairs: false, // 展示 Tooltip 辅助线
        showTitle: false,
        shared: true,
        showMarkers: false,
        itemTpl: `<li data-index="0" style="margin: 0px 0px 8px; list-style-type: none; padding: 0px;">
        <span style="background-color:{color};" class="g2-tooltip-marker"></span>{xx}
      <span class="g2-tooltip-value" style="display: inline-block; float: right; margin-left: 30px;">{yy}</span></li>`
      });
      this.chart.scale("y", {
        max: 1200,
        nice: true
      });
      this.chart.data(this.data);
      this.chart.axis("y", {
        grid: {
          line: {
            style: {
              lineDash: [3, 3]
            }
          }
        }
      });
      this.chart
        .interval()
        .position("x*y")
        .tooltip("x*y", (x, y) => {
          return { xx: x, yy: y };
        })
        .color("#58afff");
    },
    renderChart() {
      this.chart.render();
    }
  },
  mounted() {
    this.init();
    this.renderChart();
    resizeEvent();
  }
};
</script>
<style lang="less">
.cahrt-sales {
  font-size: 14px;
  overflow: hidden;
  .rank-list__title {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>
