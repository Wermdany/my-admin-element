<template>
  <div class="step-form--ok">
    <i class="el-icon-check"></i>
    <p>操作成功</p>
  </div>
</template>
<script>
export default {
  name: "Ok",
  inheritAttrs: false
};
</script>
<style lang="less" scoped>
.step-form--ok {
  text-align: center;
  .el-icon-check {
    font-size: 50px;
    padding: 5px;
    background: #19be6b;
    border-radius: 50%;
    color: #fff;
    margin-bottom: 20px;
    & + p {
      font-size: 18px;
      font-weight: bold;
      color: #17233d;
    }
  }
}
</style>
