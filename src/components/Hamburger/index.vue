<template>
  <div class="hamburger" @click="toggleClick">
    <i class="el-icon-s-fold" :class="{ collapse: isCollapse }"></i>
  </div>
</template>
<script>
export default {
  name: "Hamburger",
  props: {
    isCollapse: {
      default: false,
      required: true,
      type: Boolean
    }
  },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    }
  }
};
</script>
<style lang="less" scoped>
.hamburger {
  width: 50px;
  height: 50px;
  font-size: 20px;
  padding: 0 15px;
  line-height: 50px;
  cursor: pointer;
  transition: background 0.28s;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
  i {
    transition: transform 0.28s;
    &.collapse {
      transform: rotate(180deg);
    }
  }
}
</style>
