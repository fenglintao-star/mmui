import Button from "./button";
import "./index.scss";

// 所有组件列表
const components = {
  Button
};

// 定义install方法，接收Vue作为参数
const install = Vue => {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  // 遍历注册所有组件
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};
// 检测到Vue才执行
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  ...components
};

export default API;
