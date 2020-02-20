<template>
  <div class="mmToast" v-if="show" :class="show ? 'fadein' : 'fadeout'">
    <slot>{{ tips }}</slot>
  </div>
</template>
<script>
export default {
  name: "mm-toast"
};
</script>
