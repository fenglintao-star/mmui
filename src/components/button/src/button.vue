<template>
  <button :class="classBtn" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "mm-button", //name重要性，使用组件时的名称 <mm-button></mm-button>
  data() {
    return {
      preClass: "mm-btn" //默认的class名称
    };
  },
  props: {
    isDisabled: Boolean, //是否禁用
    shape: {
      type: String,
      default: "" //'circle'圆角, 'rectangle'直角
    },
    type: {
      type: String,
      default: "default", //'default',success','warning','error'
      validator(value) {
        let types = ["default", "success", "warning", "error"];
        return types.includes(value) || "default";
      }
    },
    size: {
      type: String,
      default: "" //'big','middle', 'small'
    }
  },
  computed: {
    //绑定class
    classBtn() {
      let { preClass, type, size, shape } = this;
      let className = [
        `${preClass}`,
        {
          [`${preClass}-${type}`]: !!type,
          [`${preClass}-${size}`]: !!size,
          [`${preClass}-${shape}`]: !!shape
        }
      ];
      return className;
    }
  }
};
</script>
