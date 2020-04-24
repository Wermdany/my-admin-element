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
