const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isPro ? 'http://news-at.zhihu.com/api/4/news/' : 'api/'
}
