<template>
  <div>
    <router-view></router-view>
    <!-- 导航 -->
    <van-tabbar v-model="active" @change="goto(active)">
      <van-tabbar-item>
        <span>首页</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.homeActive : icon.homeNormal">
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>搜索</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.searchActive : icon.searchNormal">
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>购物车</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.cartActive : icon.cartNormal">
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>个人中心</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.mineActive : icon.mineNormal">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      icon: {
        homeNormal: 'static/icon/home.png',
        homeActive: 'static/icon/home-active.png',
        searchNormal: 'static/icon/search.png',
        searchActive: 'static/icon/search-active.png',
        cartNormal: 'static/icon/cart.png',
        cartActive: 'static/icon/cart-active.png',
        mineNormal: 'static/icon/mine.png',
        mineActive: 'static/icon/mine-active.png'
      },
      routeList: [
        '/home/index',
        '/home/search',
        '/cart',
        '/home/vip'
      ]
    }
  },
  methods: {
    goto (active) {
      // active.style.color = 'red'
      console.log(active)
      let toUrl = this.routeList[active]
      this.$router.push(toUrl)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
