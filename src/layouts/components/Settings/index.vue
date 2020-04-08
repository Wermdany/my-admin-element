<template>
  <el-tooltip
    style="vertical-align:top;"
    effect="dark"
    content="修改全局设置"
    placement="bottom"
    :enterable="false"
    :open-delay="openDelay"
  >
    <div class="header-icon-item" @click.stop="handleVisible">
      <i class="el-icon-s-operation"></i>
      <el-dialog
        :visible.sync="visible"
        lock-scroll
        append-to-body
        custom-class="setting--dialog"
        width="300px"
        :show-close="false"
        title="系统设置"
      >
        <div class="setting-item">
          <span>固定头部：</span>
          <el-switch v-model="fixedHeader" class="switch"></el-switch>
        </div>
      </el-dialog>
    </div>
  </el-tooltip>
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
      this.visible = true;
    }
  }
};
</script>
