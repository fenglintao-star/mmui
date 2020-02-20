<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
    <h1>{{ msg }}</h1>
    <h3>Button组件</h3>
    <p>1.基础样式 - type + disabled</p>
    <mm-button disabled>default</mm-button>
    <mm-button type="success">success</mm-button>
    <mm-button type="error">error</mm-button>
    <mm-button type="warning">warning</mm-button>
    <mm-button type="info">info</mm-button>
    <p>2.按钮尺寸 - size</p>
    <mm-button size="big">big</mm-button>
    <mm-button size="small">small</mm-button>
    <mm-button size="middle">middle</mm-button>
    <p>3.按钮形状 - shape </p>
    <mm-button shape="circle">big</mm-button>
    <mm-button shape="rectangle">small</mm-button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: `蚂木的UI组件库`
    };
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
