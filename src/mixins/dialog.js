/**
 * el-dialog mixin
 */
export default {
  data() {
    return {
      dialog_title: "",
      dialog_visible: false
    };
  },
  methods: {
    $_openDialog() {
      this.dialog_visible = true;
    },
    $_closeDialog() {
      this.dialog_visible = false;
    },
    $_setDialogTitle(title) {
      this.dialog_title = title;
    }
  }
};
