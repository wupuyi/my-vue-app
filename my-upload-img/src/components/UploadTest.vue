<template>
  <div class="upload-test">
    <div class="inputArea">
      <input
        type="file"
        name="picture"
        ref="upload"
        accept="image/*"
        @change="onUpload"
      >
      <img :src="uploadImg">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      uploadImg: ''
    }
  },
  methods: {
    onUpload (e) {
      let file = e.target
      let that = this
      let name = file.files[0].name
      let name2 = name.slice(name.indexOf('.') + 1).toLowerCase()
      // 判断文件类型是否符合要求
      if (name2 !== 'png' && name2 !== 'jpg' && name2 !== 'gif') {
        return false
      }
      // 把文件中的图片显示出来
      // console.log(file.files[0])
      if (file.files && file.files[0]) {
        let reader = new FileReader()
        reader.onload = function (ele) {
          that.uploadImg = ele.target.result
          console.log(ele.target.result)
          that.compressPictures(ele.target.result)
        }
        reader.readAsDataURL(file.files[0])
      }
      this.file = null
    },
    compressPictures (imageSrc) {
      let that = this
      // 压缩图片需要的一些元素
      let img = new Image()
      // 选择的文件对象
      // let file = null

      // 把图片预览
      img.src = imageSrc

      // 缩放图片需要的canvas
      let canvas = document.createElement('canvas')
      let context = canvas.getContext('2d')
      // base64地址图片加载完毕后
      img.onload = function () {
        // 图片原始尺寸
        let originWidth = this.width
        let originHeight = this.height

        // 最大尺寸限制
        let maxWidth = 400
        let maxHeight = 400
        // 目标尺寸
        let targetWidth = originWidth
        let targetHeight = originHeight
        // 图片超过400x400的限制
        if (originWidth > maxWidth || originHeight > maxHeight) {
          if (originWidth / originHeight > maxWidth / maxHeight) {
            // 更宽，按照宽度限定尺寸
            targetWidth = maxWidth
            targetHeight = Math.round(maxWidth * (originHeight / originWidth))
          } else {
            targetHeight = maxHeight
            targetWidth = Math.round(maxHeight * (originWidth / originHeight))
          }
        }

        // canvas对图片进行缩放
        canvas.width = targetWidth
        canvas.height = targetHeight
        // 清除画布
        context.clearRect(0, 0, targetWidth, targetHeight)
        // 图片压缩
        context.drawImage(img, 0, 0, targetWidth, targetHeight)
        // let dataURL = canvas.toDataURL('image/jpeg')
        // console.log(dataURL)

        // 把canvas内容转换为blob
        canvas.toBlob((blob) => {
          let formData = new FormData()
          formData.append('home[]', blob)
          // that.$http.post('/api/index/file', formData).then(res => {
          //   console.log(res)
          // }).catch(error => {
          //   console.log(error)
          // })
          that.$http({
            url: '/api/index/file',
            method: 'post',
            data: formData
          }).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        }, 'image/jpeg')
      }
    }
  },
  computed: {
  }
}
</script>

<style lang="css" scoped>
</style>
