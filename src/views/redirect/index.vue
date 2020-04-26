<script>
export default {
  created() {
    const { params, query } = this.$route;
    const { path } = params;
    console.log(query);
    this.$router.replace({ path: "/" + path, query });
  },
  render(h) {
    return h();
  }
};
</script>
