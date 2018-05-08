<template>
  <div class="upload-idcard">
    <van-uploader
      class="select-btn"
      :after-read="onRead"
    >
      <p v-show="!content">点击上传身份证正面</p>
      <img :src="content" v-show="!!content">
    </van-uploader>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    onBeforeRead (e) {
      console.log(e)
    },
    onRead (file) {
      console.log(file)
      let name = file.file.name
      let fileName = name.slice(name.indexOf('.') + 1).toLowerCase()
      if (fileName !== 'png' && fileName !== 'jpg' && fileName !== 'gif') {
        this.$toast('图片格式有误，请重新选择')
        return false
      }
      this.content = file.content
    }
  }
}
</script>

<style scoped>
.upload-idcard {
  padding: 0 15px;
}
.select-btn {
  width: 100%;
  height: 200px;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-btn img {
  width: 100%;
  height: 100%;
}
</style>
