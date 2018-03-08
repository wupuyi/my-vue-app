<template>
  <div id="app">
    <!-- <router-view/> -->
    <header>
      <h2>搞事情，(＾Ｕ＾)ノ~ＹＯ</h2>
    </header>
    <div class="main">
      <div class="login">
        <p>我要<b>"登陆"</b>搞事情</p>
      </div>
      <!-- 添加啊 -->
      <add-todo></add-todo>
    </div>

  </div>
</template>

<script>
import Login from '@/components/login'
import AddTodo from '@/components/addTodo'
import TodoList from '@/components/todoList'
export default {
  name: 'App',
  components: {
    Login,
    AddTodo,
    TodoList
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}
header {
  background-color: #f17c67;
  width: 100%;
  text-align: center;
  color: #ffffff;
}
header h2 {
  margin: 0;
  padding: 20px 0;
}
.main {
  /* background-color: #cccccc; */
  width: 600px;
  text-align: center;
  margin: 0 auto;
}

.login p {
  cursor: pointer;
  color: #006fff;
}
</style>
