import productData from '../product'

// 请求商品列表
export const getProductList = function (context) {
  // 真是环境通过Ajax获取，这里用异步模拟
  setTimeout(() => {
    context.commit('setProductList', productData)
  }, 500)
}
