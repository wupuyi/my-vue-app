<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="getApiContent">111111</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getApi() {
      axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then((res) => {
        console.log(res)
        return Promise.resolve(res.data)
      })
    },
    getApiContent() {
      console.log(this.getApi())
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
