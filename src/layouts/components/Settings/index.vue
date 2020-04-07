<template>
  <div class="size-icon-item" @click.stop="handleVisible">
    <el-tooltip
      class="item"
      effect="dark"
      content="修改全局设置"
      placement="bottom"
      :enterable="false"
      :open-delay="openDelay"
    >
      <i class="el-icon-s-operation"></i>
    </el-tooltip>
    <el-dialog
      :visible.sync="visible"
      lock-scroll
      append-to-body
      custom-class="setting--dialog"
      width="180px"
    >
      <div class="setting-item">
        <span>固定头部：</span>
        <el-switch v-model="fixedHeader" class="switch"></el-switch>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { Tooltip, Dialog, Switch } from "element-ui";
export default {
  name: "Setting",
  components: {
    elTooltip: Tooltip,
    elDialog: Dialog,
    elSwitch: Switch
  },
  data() {
    this.openDelay = 800;
    return {
      visible: false
    };
  },
  computed: {
    size() {
      return this.$store.state.app.size;
    },
    fixedHeader: {
      get() {
        return this.$store.state.app.fixedHeader;
      },
      set() {
        this.$store.dispatch("app/toggleFixedHeader");
      }
    }
  },
  methods: {
    handleVisible() {
      console.log(1);
      this.visible = true;
    }
  }
};
</script>
