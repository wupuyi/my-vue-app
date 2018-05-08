<template>
  <div class="avatar">
    <croppa
      v-model="myCroppa"
      :width="200"
      :height="200"
      :quality="1"
      accept="image/*"
      placeholder="选择头像图片"
      :placeholder-font-size="20"
      @file-type-mismatch="onFileTypeMismatch"
      :prevent-white-space="true"
      class="upload-avatar"
      :show-remove-button="false"
      :show-loading="true"
      :loading-size="180"
    ></croppa>
    <van-button type="danger" @click="removeImg()">重置</van-button>
    <van-button type="primary" @click="uploadAvatar">确定修改</van-button>
    <img :src="avatar">
  </div>
</template>

<script>
import 'vue-croppa/dist/vue-croppa.css'
export default {
  data () {
    return {
      myCroppa: {
      },
      avatar: ''
    }
  },
  methods: {
    onFileTypeMismatch (file) {
      this.$dialog.alert({
        message: '图片格式错误，请重新选择'
      }).then(() => {
        // on close
      })
    },
    removeImg () {
      this.myCroppa.remove()
    },
    uploadAvatar () {
      this.myCroppa.generateBlob((blob) => {
        let url = URL.createObjectURL(blob)
        console.log(url)
        this.avatar = url
      }, 'image/jpeg', 1)
    }
  }
}
</script>

<style scoped>
.upload-avatar {
  border: 1px solid #cccccc;
}
</style>
