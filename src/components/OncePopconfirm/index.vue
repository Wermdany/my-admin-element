<template>
  <el-popconfirm v-bind="$attrs"></el-popconfirm>
</template>
<script>
import { Popconfirm, Popover } from "element-ui";
import directive from "./directive";
export default {
  name: "OncePopconfirm",
  inheritAttrs: false,
  directives: { directive },
  components: {
    elPopconfirm: Popconfirm,
    elPopover: Popover
  }
};
</script>
