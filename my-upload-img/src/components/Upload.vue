<template>
<div class="center">
  <img :src="src">
  <vue-core-image-upload
    class="btn btn-primary"
    :crop="false"
    @imageuploaded="imageuploaded"
    @imagechanged="imagechanged"
    :multiple="true"
    :multiple-size="4"
    :data="data"
    :max-file-size="5242880"
    url="http://101.198.151.190/api/upload.php"
    text="上传图片"
  >
  </vue-core-image-upload>
</div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'

export default {
  components: {
    VueCoreImageUpload
  },
  data () {
    return {
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
    }
  },
  methods: {
    imageuploaded (res) {
      if (res.errcode === 0) {
        this.src = res.data.src
      }
    },
    imagechanged (res) {
      console.log(res)
    }
  }
}
</script>
