<template>
  <div class="daily-article">
    <div class="daily-article-title">{{ data.title }}</div>
    <div class="daily-article-content" v-html="data.body"></div>
  </div>
</template>

<script>
import $ from '../libs/util'
export default {
  props: {
    id: {
      type: Number,
      dafault: 0
    }
  },
  data () {
    return {
      data: {}
    }
  },
  methods: {
    getArticle () {
      $.ajax.get('news/' + this.id).then(res => {
        // 将文章中的图片地址替换为代理的地址
        res.body = res.body.replace(/src="http/g, 'src="' + $.imgPath + 'http')
        res.body = res.body.replace(/src="https/g, 'src="' + $.imgPath + 'https')
        this.data = res;
        // 返回文章顶端
        window.scrollTo(0, 0)
      })
    }
  },
  watch: {
    id (val) {
      if (val) this.getArticle()
    }
  }
}
</script>

<style>
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
</style>

