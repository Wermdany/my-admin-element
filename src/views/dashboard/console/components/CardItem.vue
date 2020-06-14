<template>
  <el-col
    :xs="{ span: 8 }"
    :sm="{ span: 6 }"
    :lg="{ span: 3 }"
    class="grid-item"
  >
    <el-card shadow="hover" class="grid-item--card">
      <item-link :to="to">
        <div class="grid-item--card__body">
          <div class="card__body-icon">
            <slot name="icon"></slot>
          </div>
          <div class="card__body-title">{{ title }}</div>
        </div>
      </item-link>
    </el-card>
  </el-col>
</template>
<script>
import { Card, Col } from "element-ui";
import Link from "@/layouts/components/Link";
export default {
  name: "CardItem",
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    to: {
      type: String,
      required: true
    }
  },
  components: {
    elCard: Card,
    elCol: Col,
    ItemLink: Link
  }
};
</script>
<style lang="less" scoped>
.grid-item {
  margin-bottom: 15px;
  .grid-item--card {
    border: none;
    border-radius: 0;
    /deep/.el-card__body {
      padding: 15px;
    }
    .grid-item--card__body {
      text-align: center;
      .card__body-icon {
        font-size: 32px;
        line-height: 1;
        color: #000;
      }
      .card__body-title {
        margin-top: 8px;
        font-size: 14px;
        color: #000;
      }
    }
  }
}
</style>
