import { merge } from "lodash-es";
import defaultRouteVal from "@/router/itemFormat";
export default {
  methods: {
    $_E_Cat(data, node, type) {
      this.formRoute = merge(this.$deepCopy(defaultRouteVal), data);
      this.event = type;
    },
    $_E_Edit(data, node, type) {
      this.selectRoute = data;
      this.formRoute = merge(this.$deepCopy(defaultRouteVal), data);
      this.event = type;
    },
    $_E_Delete(data, node, type) {
      this.selectRoute = data;
      this.event = type;
    },
    $_E_Append(data, node, type) {
      this.selectRoute = data;
      this.formRoute = this.$deepCopy(defaultRouteVal);
      this.event = type;
    },
    $_E_InsertAfter(data, node, type) {
      this.selectRoute = data;
      this.formRoute = this.$deepCopy(defaultRouteVal);
      this.event = type;
    },
    $_E_InsertBefore(data, node, type) {
      this.selectRoute = data;
      this.formRoute = this.$deepCopy(defaultRouteVal);
      this.event = type;
    }
  }
};
