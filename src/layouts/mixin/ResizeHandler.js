import store from "@/store";
import { SM_WIDTH, LG_WIDTH } from "@/namespace";
const { body } = document;
import { debounce } from "@/utils";
export default {
  watch: {
    $route() {
      if (this.device === "SM" && this.sidebar.isCollapse) {
        store.dispatch("app/changeSideBar", {
          isCollapse: true,
          withoutAnimation: false
        });
      }
    },
    device: {
      handler(newV, oldV) {
        this.$_Handler(newV, oldV);
      }
    }
  },
  beforeMount() {
    window.addEventListener("resize", debounce(this.$_resizeHandler, 100));
  },
  beforeDestroy() {
    window.removeEventListener("resize", debounce(this.$_resizeHandler, 100));
  },
  mounted() {
    const state = this.$_getNowState();
    store.dispatch("app/changeDevice", state);
    this.$_Handler(state, undefined);
  },
  methods: {
    $_Handler(newV, oldV) {
      if (newV === "SM") {
        store.dispatch("app/changeSideBar", {
          isCollapse: true,
          withoutAnimation: true
        });
      }
      if (newV === "MD") {
        if (oldV === undefined) {
          //解决刷新中等尺寸下动画效果Bug
          store.dispatch("app/changeSideBar", {
            isCollapse: true,
            withoutAnimation: true
          });
        }
        if (oldV === "SM") {
          store.dispatch("app/changeSideBar", {
            withoutAnimation: true,
            isCollapse: true
          });
        } else {
          store.dispatch("app/changeSideBar", {
            isCollapse: true,
            withoutAnimation: false
          });
        }
      }
      if (newV === "LG") {
        store.dispatch("app/changeSideBar", {
          isCollapse: false,
          withoutAnimation: false
        });
      }
    },
    $_getNowState() {
      const rect = body.getBoundingClientRect().width - 1;
      if (rect < SM_WIDTH) {
        return "SM";
      }
      if (rect >= SM_WIDTH && rect < LG_WIDTH) {
        return "MD";
      }
      if (rect >= LG_WIDTH) {
        return "LG";
      }
    },
    $_resizeHandler() {
      if (!document.hidden) {
        store.dispatch("app/changeDevice", this.$_getNowState());
      }
    }
  }
};
