<template>
  <div id="container">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="swipe-item-img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        './static/swipe/swipe001.jpg',
        './static/swipe/swipe002.jpg',
        './static/swipe/swipe003.jpg'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.swipe-item-img
  display: block;
  width: 100%;
</style>
