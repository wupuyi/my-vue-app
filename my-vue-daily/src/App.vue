<template>
  <div id="app">
    <img src="https://pic3.zhimg.com/30594279d368534c6c2f91b2c00c7806.jpg" ref="img">
    <img src="http://localhost:8080/api/https://pic3.zhimg.com/30594279d368534c6c2f91b2c00c7806.jpg" alt="">
    <button @click="getNews">111111</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getNews () {
      this.$http.get('3892357').then((result) => {
        let res = result.data
        this.nickName = ''
        console.log(res.image)
        this.$refs.img.src = res.image
      })
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
