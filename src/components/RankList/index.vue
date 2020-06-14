<template>
  <div class="rank-list">
    <h4 class="rank-list__title" v-if="title">{{ title }}</h4>
    <ul class="rank-list__body">
      <li class="rank-list__body-item" v-for="(item, i) in formatList" :key="i">
        <span
          class="rank-list-number"
          :style="{
            backgroundColor: i < 3 && '#314659',
            color: i < 3 && '#FFF'
          }"
          >{{ i + 1 }}</span
        >
        <span class="rank-list-title">{{ item.title }}</span>
        <span class="rank-list-value">{{ item.value | parseNumber }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RankList",
  props: {
    title: {
      type: String,
      default: ""
    },
    max: {
      type: Number,
      default: 5
    },
    list: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  computed: {
    formatList() {
      return this.list.slice(0, this.max);
    }
  }
};
</script>
<style lang="less">
.rank-list {
  font-size: 14px;
  .rank-list__title {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
  }
  .rank-list__body {
    line-height: 22px;
    margin-top: 25px;
    .rank-list__body-item {
      display: flex;
      align-items: center;
      margin-top: 16px;
      zoom: 1;
      .rank-list-number {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-top: 1.5px;
        margin-right: 16px;
        font-weight: 600;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        background-color: #fafafa;
        border-radius: 20px;
      }
      .rank-list-title {
        flex: 1 1;
        margin-right: 8px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: rgba(0, 0, 0, 0.65);
      }
      .rank-list-value {
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}
</style>
