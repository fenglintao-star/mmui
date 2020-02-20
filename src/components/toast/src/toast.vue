<template>
  <div :class="classTost" v-show="true" :style="{width:size.width + 'px',height:size.height+'px'}">
    <slot>toast提示</slot>
  </div>
</template>
<script>
export default {
  name: "mm-toast",
  data() {
    return {};
  },
  props: {
    default: "default", //'success','wran','error'
    size: {
      type: Object,
      default: () => {
        return {
          width: "100",
          height: "30"
        };
      }
    }
  },
  computed: {
    classTost() {}
  }
};
</script>