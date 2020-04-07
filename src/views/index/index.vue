<template>
  <ul>
    <li v-for="i in index" :key="i">{{ i }}</li>
  </ul>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      index: 100
    };
  }
};
</script>
