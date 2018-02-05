<template>
  <div class="container">
    <button @click="getAxios">我是axios实现</button>
    <button @click="getAjax">我是ajax和Promise实现</button>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    getAxios() {
      axios.get('https://www.vue-js.com/api/v1/topics')
           .then(function(response) {
             console.log(response)
           })
           .catch(function(error) {
             console.log(error)
           })
    },
    getAjax() {
      var p = this._ajax('GET', 'https://www.vue-js.com/api/v1/topics')
      p.then(function(text) {
        console.log(JSON.parse(text))
      }).catch(function(status) {
        console.log(status)
      })
    },
    _ajax(method, url, data) {
      var request = new XMLHttpRequest()
      return new Promise(function(resolve, reject) {
        request.onreadystatechange = function() {
          if(request.readyState === 4) {
            if(request.status === 200) {
              resolve(request.responseText)
            } else {
              reject(request.status)
            }
          }
        }
        request.open(method, url)
        request.send(data)
      });
    }
  }  
}
</script>

<style scoped>

</style>
