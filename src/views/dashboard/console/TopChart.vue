<template>
  <el-row :gutter="15">
    <card-item title="总销售额">
      <template #content> ¥ {{ 126560 | parseNumber }} </template>
      <template #body>
        <chart-text :week="12" :day="11"></chart-text>
      </template>
      <template #footer>日销售额 ¥ {{ 12423 | parseNumber }} </template>
    </card-item>
    <card-item title="营销活动效果">
      <template #content> {{ 8974 | parseNumber }} </template>
      <template #body>
        <chart-area></chart-area>
      </template>
      <template #footer>日访问量 {{ 12423 | parseNumber }} </template>
    </card-item>
    <card-item title="支付比数">
      <template #content> {{ 6871 | parseNumber }} </template>
      <template #body>
        <chart-interval></chart-interval>
      </template>
      <template #footer>转化率 {{ 58 }}% </template>
    </card-item>
    <card-item title="营销活动效果">
      <template #content> {{ 78 }}% </template>
      <template #body>
        <chart-progress
          :percentage="78"
          :show-text="false"
          color="#2d8cf0"
        ></chart-progress>
      </template>
      <template #footer>
        <chart-text :week="9" :day="11"></chart-text>
      </template>
    </card-item>
  </el-row>
</template>
<script>
import { Row } from "element-ui";
import CardItem from "@/components/CardItem";
import ChartText from "./components/ChartText";
import ChartProgress from "./components/ChartProgress";
import ChartArea from "./components/ChartArea";
import ChartInterval from "./components/ChartInterval";
export default {
  name: "TopChart",
  components: {
    elRow: Row,
    CardItem,
    ChartText,
    ChartProgress,
    ChartArea,
    ChartInterval
  }
};
</script>
