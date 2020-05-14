import { isArray, isExternal } from "@/utils/validate";
/**
 *  根据后台返回的路由表组件名称，动态替换成component
 * @param {router}
 */
export function componentToName(router, component) {
  if (!isArray(router)) {
    throw new Error("路由表不是一个数组");
  }
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
      if (item.children && item.children.length) {
        componentToName(item.children, component);
      }
    } else {
      //如果不在侧边栏显示或者不是一个外部链接就抛出错误
      if (!item.hidden && !isExternal(item.path)) {
        throw new Error(`缺少一个组件映射，组件名字为：${item.component}`);
      }
    }
  });
  return router;
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
/**
 * 增加模块化命名前缀
 *
 * @export
 * @param {Array} route 路由对象
 * @param {String} name 模块名
 * @returns {Array} 处理后的路由表
 */
export function formatComponentName(route, name) {
  if (!isArray(route)) {
    throw new Error("路由表不是一个数组");
  }
  route.forEach(item => {
    if (item.component) {
      if (item.component === "main") {
        item.component = `common_${item.component}`;
      } else {
        item.component = `${name}_${item.component}`;
      }
      if (item.children && item.children.length) {
        return formatComponentName(item.children, name);
      }
    }
  });
  return route;
}
/**
 *去除外部链接
 *
 * @export
 * @param {Array} routes 路由表
 * @returns
 */
export function delExternalRoute(routes) {
  if (!isArray(routes)) throw new Error("路由表不是一个数组");
  let res = [];
  routes.forEach(route => {
    if (!isExternal(route.path)) {
      res.push(route);
    }
    if (route.children && route.children.length) {
      return delExternalRoute(route.children);
    }
  });
  return res;
}
