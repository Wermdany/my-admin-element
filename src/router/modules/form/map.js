export default {
  baseForm: {
    component: () => import("@/views/form/base-form"),
    introduce: "基础表单"
  },
  stepForm: {
    component: () => import("@/views/form/step-form")
  }
};
