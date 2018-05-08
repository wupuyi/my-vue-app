<template>
  <div class="hello">
    <van-cell-group>
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        :error="usernameError"
        @change="usernameValidator"
      ></van-field>
      <van-field
        v-model="password"
        label="密码"
        placeholder="请输入密码"
      >
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: '',
      usernameError: false
    }
  },
  mounted () {
    this._getMessage()
  },
  methods: {
    usernameValidator () {
      const descriptor = {
        username: {
          type: 'string',
          required: true,
          pattern: /^[a-z]+$/
        },
        password: {
          type: 'string',
          required: true
        }
      }
      let validator = new AsyncValidator(descriptor)
      validator.validate({username: this.username}, (errors, fields) => {
        if (errors) {
          console.log(errors)
          console.log(fields)
        }
      })
    },
    _getMessage () {
      this.$http.get('/api/captcha/get')
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
