<template>
  <el-col :xs="24" :sm="{ span: 12 }" :lg="{ span: 6 }" class="card-item">
    <el-card shadow="never">
      <template slot="header">
        <div class="card-header__title">
          {{ title }}
        </div>
        <div class="card-header__tips">
          <el-tooltip :content="tip" placement="top">
            <i class="el-icon-warning-outline"></i
          ></el-tooltip>
        </div>
        <div class="card-header__content">
          <slot name="content"></slot>
        </div>
      </template>
      <div class="card-header__chart">
        <div class="card-header__chart-fixed">
          <slot name="body"></slot>
        </div>
      </div>
      <div class="card-header__footer">
        <slot name="footer"></slot>
      </div>
    </el-card>
  </el-col>
</template>
<script>
import { Card, Col, Tooltip } from "element-ui";
export default {
  name: "CardItem",
  components: {
    elCard: Card,
    elCol: Col,
    elTooltip: Tooltip
  },
  props: {
    title: {
      type: String,
      required: true
    },
    tip: {
      type: String,
      default: "指标说明"
    }
  }
};
</script>
<style lang="less" scoped>
.card-item {
  margin-bottom: 15px;
  /deep/.el-card {
    border: none;
    border-radius: 0;
    padding: 20px 18px 8px;
    .el-card__header {
      padding: 0;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      position: relative;
      border: none;
      .card-header__tips {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
      }
      .card-header__content {
        margin-top: 4px;
        font-size: 30px;
        color: #000;
      }
    }
    .el-card__body {
      padding: 0;
      .card-header__chart {
        height: 46px;
        margin-bottom: 10px;
        font-size: 14px;
        position: relative;
        .card-header__chart-fixed {
          width: 100%;
          position: absolute;
          bottom: 0;
        }
      }
      .card-header__footer {
        font-size: 14px;
        border-top: 1px solid #f0f0f0;
        color: rgba(0, 0, 0, 0.65);
        margin-top: 8px;
        padding-top: 8px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
