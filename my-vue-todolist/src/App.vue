<template>
  <div id="app">
    <div class="nav-bar">
      <!-- <i class="iconfont icon-dui logo"></i> -->
      <!-- <p class="logo">(งᵒ̌皿ᵒ̌)ง⁼³₌₃</p> -->
      <!-- <p class="logo">*٩(๑´ ∀ `๑)ง*</p> -->
      <p class="logo">(￣ε(#￣)☆╰╮o(￣▽￣///)</p>
      <p class="slogan">就是要，搞事情</p>
    </div>
    <div class="header">
      开黑了么就去敲代码
    </div>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
// import 'common/iconfont/iconfont.css'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
@import '../common/iconfont/iconfont.css';
body {
  background-color: #fafafa;
}

#app {
  text-align: center;
  color: #333333;
}

.nav-bar {
  /* background-color: #d74b3e; */
  background-color: #da413d;
  font-size: 22px;
  color: #ffffff;
  padding: 15px 0;
}
.nav-bar .logo {
  font-size: 30px;
  margin: 0 0 20px 0;
}
.nav-bar .slogan{
  margin: 10px 0 0 0 ;
  font-weight: bold;
}
.header {
  margin: 20px 0;
  font-size: 20px;
}
</style>
