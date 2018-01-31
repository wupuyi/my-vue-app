<template>
  <div id="app">
    <img src="./assets/logo/logo@200x.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

  body,html {
    height: 100%;
  }
  #app {
    height: 100%;
    /* margin-top: 120px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #app img {
    width: 150px;
    display: block;
  }
</style>
