import { isArray } from "@/utils/validate";
/**
 *  根据后台返回的路由表组件名称，动态替换成component
 * @param {router}
 */
export function componentToName(router, component) {
  if (!isArray(router)) {
    throw new Error("路由表不是一个数组");
  }
  let res = [];
  router.forEach(item => {
    if (component.hasOwnProperty(item.component)) {
      // introduce 如果本身设置了，就取设置值，否则取组件说明，如果引用的是main组件，就取title
      if (item.meta && !item.meta.introduce) {
        if (component[item.component] && component[item.component].introduce) {
          item.meta.introduce =
            item.component === "main"
              ? item.meta.title
              : component[item.component].introduce;
        } else {
          throw new Error(`缺少[组件|页面]介绍，组件名字为：${item.component}`);
        }
      }

      item.component = component[item.component].component;
      res.push(item);
      if (item.children && item.children.length) {
        return componentToName(item.children, component);
      }
    } else {
      if (item.hidden) {
        res.push(item);
      } else {
        throw new Error(
          `缺少一个组件映射，组件名字为：${item.component};功能描述为：${
          component[item.component].introduce
          }`
        );
      }
    }
  });
  return res;
}

export function formatRedirect(str) {
  const first = str.indexOf("?");
  if (first == -1) {
    return {
      redirect: str
    };
  } else {
    const redirect = str.substr(0, first);
    const queryAll = str.substr(first + 1);
    if (queryAll === "") {
      return {
        redirect
      };
    } else {
      const queryObj = queryAll.split("&");
      const query = {};
      queryObj.forEach(item => {
        const ad = item.split("=");
        query[ad[0]] = ad[1];
      });
      return {
        redirect,
        query
      };
    }
  }
}
