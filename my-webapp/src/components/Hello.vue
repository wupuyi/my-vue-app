<template>
  <div class="main">
    <h1>欢迎来到我的小站</h1>
    <h2>思考，思考，思考</h2>
    <div class="nav-bar">
      <p class="item">我的作品</p>
      <p class="item">我的博客</p>
      <p class="item">关于我</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-weight: normal;
    color: #333333;
    margin-bottom: 0;
  }
  h2 {
    font-weight: normal;
    color: #999999;
    margin-bottom: 30px;
  }
  .nav-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item {
    color: #999999
  }
  .item:hover {
    color: #333333;
    cursor: pointer;
  }
</style>
