<template>
  <div class="daily">
    <div class="daily-menu">
      <div class="daily-menu-item"
           @click="handleToRecommend"
           :class="{ on: type === 'recommend' }">每日推荐</div>
      <div class="daily-menu-item"
           :class="{ on: type === 'daily' }"
           @click="showThemes = !showThemes">主题日报</div>
      <ul v-show="showThemes">
        <li v-for="item in themes">
          <a :class="{ on: item.id === themeId && type === 'daily' }"
             @click="handleToTheme(item.id)">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="daily-list">
      <template v-if="type === 'recommend'">
        <div v-for="list in recommendList">
          <div class="daily-date">{{ formatDay(list.date) }}</div>
          <item v-for="item in list.stories"
                :data="item"
                :key="item.id"></item>
        </div>
      </template>
      <template v-if="type === 'daily'">
        <item v-for="item in list"
              :data="item"
              :key="item.id">
        </item>
      </template>
    </div>
    <!-- <daily-article></daily-article> -->
  </div>
</template>

<script>
import $ from './libs/util'
import Item from './components/item'
export default {
  name: 'Daily',
  data () {
    return {
      themes: [],
      showThemes: false,
      type: 'recommend',
      list: [],
      themeId: 0,
      recommendList: [],
      dailyTime: $.getTodayTime(),
      isLoading: false
    }
  },
  computed: {},
  methods: {
    formatDay (date) {
      // 转换为带汉字的月日
      let month = date.substr(4, 2)
      let day = date.substr(6, 2)
      if (month.substr(0, 1) === '0') month = month.substr(1, 1)
      if (day.substr(0, 1) === '0') day = day.substr(1, 1)
      return `${month} 月 ${day} 日`
    },
    getThemes () {
      // axios发起get请求
      $.ajax.get('themes').then(res => {
        this.themes = res.others
      })
    },
    handleToTheme (id) {
      // 改变菜单分类
      this.type = 'daily'
      // 设置当前点击子类的主题日报id
      this.themeId = id
      // 清空中间栏的数据
      this.list = []
      $.ajax.get('theme/' + id).then(res => {
        // 过滤掉类型为1的文章，该类型下的文章为空
        this.list = res.stories.filter(item => item.type !== 1)
        // console.log(this.list)
      })
    },
    handleToRecommend () {
      this.type = 'recommend'
      this.recommendList = []
      this.dailyTime = $.getTodayTime()
      this.getRecommendList()
    },
    getRecommendList () {
      this.isLoading = true
      const prevDay = $.prevDay(this.dailyTime + 86400000)
      $.ajax.get('news/before/' + prevDay).then(res => {
        this.recommendList.push(res)
        this.isLoading = false
      })
    }
  },
  mounted () {
    // 初始化时调用
    this.getRecommendList()
    this.getThemes()
  },
  components: {
    Item
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  color: #657180;
  font-size: 16px;
}
.daily-menu {
  width: 150px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: #f5f7f9;
}
.daily-menu-item {
  font-size: 18px;
  text-align: center;
  margin: 5px 0;
  padding: 10px 0;
  cursor: pointer;
  border-right: 2px solid transparent;
  transition: all 0.3s ease-in-out;
}
.daily-menu-item:hover {
  background: #e3e8ee;
}
.daily-menu-item.on {
  border-right: 2px solid #3399ff;
}

.daily-menu ul {
  list-style: none;
}
.daily-menu ul li a {
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 5px 0;
  margin: 5px 0;
  cursor: pointer;
}
.daily-menu ul li a:hover,
.daily-menu ul li a.on {
  color: #3399ff;
}

.daily-list {
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 150px;
  overflow: auto;
  border-right: 1px solid #d7dde4;
}
.daily-date {
  text-align: center;
  margin: 10px 0;
}

.daily-article {
  margin-left: 450px;
  padding: 20px;
}
.daily-article-title {
  font-size: 28px;
  font-weight: bold;
  color: #222;
  padding: 10px 0;
}

.view-more a {
  display: block;
  cursor: pointer;
  background: #f5f7f9;
  text-align: center;
  color: inherit;
  text-decoration: none;
  padding: 4px 0;
  border-radius: 3px;
}

.daily-comments {
  margin: 10px 0;
}
.daily-comments span {
  display: block;
  margin: 10px 0;
  font-size: 20px;
}
.daily-comment {
  overflow: hidden;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #e3e8ee;
}
.daily-comment-avatar {
  width: 50px;
  height: 50px;
  float: left;
}
.daily-comment-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
.daily-comment-content {
  margin-left: 65px;
}
.daily-comment-name {
}
.daily-comment-time {
  color: #9ea7b4;
  font-size: 14px;
  margin-top: 5px;
}
.daily-comment-text {
  margin-top: 10px;
}
</style>
