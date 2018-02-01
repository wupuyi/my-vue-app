<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo@100x.png">
      <h1 class="title">我的作品集</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin-bottom: 20px;
  box-shadow: 0 1px 6px #cccccc;
}
.header .logo {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
.header .title {
  font-weight: normal;
  font-size: 26px;
  margin: 0;
}
</style>
