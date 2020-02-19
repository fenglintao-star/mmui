import Vue from "vue";
import Toast from "./src/toast.vue";

// 返回一个扩展实例构造器
const ToastConstructor = Vue.extend(Toast);

/**
 * @param {String} tips 提示文案
 * @param {int} duration 展示时长
 */
function showToast(tips, duration = 1000) {
  // 实例化一个 toast.vue
  const toastDom = new ToastConstructor({
    el: document.createElement("div"),
    data() {
      return {
        tips: tips,
        show: true
      };
    }
  });
  // 把实例化的toast组件添加到body里
  document.body.appendChild(toastDom.$el);
  // duration时间过后去隐藏
  setTimeout(() => {
    toastDom.show = false;
  }, duration);
}

// 注册为全局组件的函数
function mmToast() {
  Vue.prototype.$toast = showToast;
}

export default mmToast;
