<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
    <h1>{{ msg }}</h1>
    <mm-button>蚂木提交按钮</mm-button>
    <mm-toast></mm-toast>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: `蚂木的UI组件库`
    };
  },
  mounted() {
    setTimeout(() => {
      this.$toast("蚂木toast提示", 3000);
    }, 1200);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
