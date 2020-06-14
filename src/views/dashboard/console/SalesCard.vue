<template>
  <el-card class="sales-card" shadow="never">
    <template slot="header">
      <div class="sales-card__tabs">
        <el-button
          type="text"
          :class="{ active: tabIndex == 0 }"
          v-on:click="tabSwitch(0)"
          >销售额</el-button
        >
        <el-button
          type="text"
          :class="{ active: tabIndex == 1 }"
          v-on:click="tabSwitch(1)"
          >访问量</el-button
        >
        <div class="sales-card__tabs--bar" :style="{ left: tabLeft }"></div>
      </div>
      <div class="sales-card__date">
        <div class="sales-card__date-select" v-if="device != 'SM'">
          <a @click="setTime('day')" :class="{ active: active('day') }">今日</a>
          <a @click="setTime('week')" :class="{ active: active('week') }"
            >本周</a
          >
          <a @click="setTime('month')" :class="{ active: active('month') }"
            >本月</a
          >
          <a @click="setTime('year')" :class="{ active: active('year') }"
            >全年</a
          >
        </div>
        <div class="sales-card__date-picker">
          <el-date-picker
            style="width:280px;"
            value-format="yyyy-MM-dd"
            v-model="date"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </div>
    </template>
    <el-col :xs="24" :sm="{ span: 16 }" :lg="{ span: 18 }">
      <chart-sales
        ref="ChartSales"
        :title="'$趋势' | parse(tabIndex)"
      ></chart-sales>
    </el-col>
    <el-col :xs="24" :sm="{ span: 8 }" :lg="{ span: 6 }">
      <rank-list
        :title="'门店$排名' | parse(tabIndex)"
        :list="list"
        style="margin-left:20px;"
        :max="7"
      ></rank-list>
    </el-col>
  </el-card>
</template>
<script>
import { Card, Col, DatePicker, Button } from "element-ui";
import RankList from "@/components/RankList";
import ChartSales from "./components/ChartSales";
import { mapState } from "vuex";
import { getMonth, getDay, getYear, getWeek } from "@/utils/day";
export default {
  name: "SalesCard",
  components: {
    elCard: Card,
    elCol: Col,
    elDatePicker: DatePicker,
    elButton: Button,
    RankList,
    ChartSales
  },
  data() {
    this.dateMap = {
      day: getDay(),
      week: getWeek(),
      month: getMonth(),
      year: getYear()
    };
    this.list = [
      { title: "大门一号", value: "456789" },
      { title: "大门二号", value: "456789" },
      { title: "大门三号", value: "456789" },
      { title: "大门四号", value: "456789" },
      { title: "大门五号", value: "456789" },
      { title: "大门六号", value: "456789" },
      { title: "大门七号", value: "456789" },
      { title: "大门八号", value: "456789" },
      { title: "大门九号", value: "456789" },
      { title: "大门十号", value: "456789" }
    ];
    return {
      date: getDay(),
      tabIndex: 0
    };
  },
  computed: {
    ...mapState({
      device: state => state.app.device
    }),
    tabLeft() {
      return 10 + this.tabIndex * 58 + "px";
    }
  },
  mounted() {},
  methods: {
    tabSwitch(index) {
      if (this.tabIndex != index) {
        this.tabIndex = index;
        this.$refs.ChartSales.renderChart();
      }
    },
    setTime(type) {
      this.date = this.dateMap[type];
    },
    active(type) {
      return (
        this.date[0] == this.dateMap[type][0] &&
        this.date[1] == this.dateMap[type][1]
      );
    }
  },
  filters: {
    parse(v, i) {
      const arr = ["销售额", "访问量"];
      return v.replace("$", arr[i]);
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixins.less";
.sales-card {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  border: none;
  border-radius: 0;
  /deep/ .el-card__body {
    .clearFloat();
  }
  /deep/ .el-card__header {
    display: flex;
    align-items: center;
    position: relative;
    flex: none;
    padding: 10px;
  }
  .sales-card__tabs {
    flex: auto;
    .sales-card__tabs--bar {
      height: 2px;
      width: 48px;
      bottom: 0;
      background: #1890ff;
      position: absolute;
      transition: 0.28s ease-in;
    }
    .el-button.el-button--text {
      font-size: 16px;
      border: none;
      color: rgba(0, 0, 0, 0.65);
      &:hover {
        color: #1890ff;
      }
      &.active {
        color: #1890ff;
      }
    }
  }
  .sales-card__date-select,
  .sales-card__date-picker {
    display: inline-block;
    > a {
      margin-left: 24px;
      cursor: pointer;
      &:hover {
        color: #1890ff;
      }
      &.active {
        color: #1890ff;
      }
    }
  }
  .sales-card__date-select {
    margin-right: 16px;
  }
}
</style>
