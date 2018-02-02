<template>
  <div>
    <div class="main">
      <div class="item">
        <img class="project-img" src="../common/image/logo@500x.png">
        <router-link  class="project-title" to="/shopping-cart" tag="div">购物车</router-link>
      </div>
      <div class="item">
        <img class="project-img" src="../common/image/logo@500x.png">
        <router-link  class="project-title" to="/input-number" tag="div">计数器</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .my-title {
    font-weight: normal;
  }
  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
  }
  .main .item {
    width: 30%;
    border: 1px solid #cccccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .project-img {
    width: 200px;
    display: block;
    margin: 20px auto;
  }
  .project-title {
    font-size: 18px;
    margin: 0 auto;
    margin-bottom: 15px;
    width: 100px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #cccccc
  }
  .project-title:hover {
    background: #333333;
    color: #ffffff;
    border-color: #333333;
    cursor: pointer;
  }
</style>
