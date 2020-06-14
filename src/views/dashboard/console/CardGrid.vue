<template>
  <el-row :gutter="15">
    <card-item
      v-for="item in row"
      :key="item.id"
      :title="item.title"
      :to="item.to"
    >
      <template #icon>
        <i :class="item.icon" :style="{ color: item.color }"></i>
      </template>
    </card-item>
  </el-row>
</template>
<script>
import { Row } from "element-ui";
import CardItem from "./components/CardItem";
export default {
  name: "CardGrid",
  components: {
    elRow: Row,
    CardItem
  },
  data() {
    this.row = [
      {
        icon: "el-icon-s-custom",
        color: "rgb(105, 192, 255)",
        to: "",
        title: "用户"
      },
      {
        icon: "el-icon-s-data",
        color: "rgb(149, 222, 100)",
        to: "",
        title: "分析"
      },
      {
        icon: "el-icon-shopping-cart-2",
        color: "rgb(255, 156, 110)",
        to: "",
        title: "商城"
      },
      {
        icon: "el-icon-s-claim",
        color: "rgb(179, 127, 235)",
        to: "",
        title: "订单"
      },
      {
        icon: "el-icon-s-ticket",
        color: "rgb(255, 214, 102)",
        to: "",
        title: "票据"
      },
      {
        icon: "el-icon-message-solid",
        color: "rgb(92, 219, 211)",
        to: "",
        title: "消息"
      },
      {
        icon: "el-icon-collection-tag",
        color: "rgb(255, 133, 192)",
        to: "",
        title: "标签"
      },
      {
        icon: "el-icon-s-tools",
        color: "rgb(255, 192, 105)",
        to: "",
        title: "配置"
      }
    ];
    return {};
  }
};
</script>
