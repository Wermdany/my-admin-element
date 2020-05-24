import Vue from "vue";

const getReference = (el, binding, vnode) => {
  const _ref = binding.expression ? binding.value : binding.arg;
  const popper = vnode.context.$refs[_ref];
  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el;
    } else {
      popper.$refs.reference = el;
    }
  }
};
const popconfirm = {
  bind(el, binding, vnode) {
    getReference(el, binding, vnode);
  },
  inserted(el, binding, vnode) {
    getReference(el, binding, vnode);
  }
};

Vue.directive("popconfirm", popconfirm);

const install = function(Vue) {
  Vue.directive("popconfirm", popconfirm);
};
popconfirm.install = install;
export default popconfirm;
