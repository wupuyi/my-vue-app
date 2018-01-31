<template>
  <div id="app">
    <div class="nav-bar">
      <i class="iconfont icon-dui logo"></i>
      <p class="slogan">我就是那个TodoList</p>
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
  font-size: 50px;
}
.nav-bar .slogan{
  margin: 10px 0 0 0 ;
}
.header {
  margin: 15px 0;
  font-size: 20px;
}
</style>
