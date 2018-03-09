<template>
  <div>
    <div class="add-todo">
      <input type="text" name="" v-model.trim="todoText" class="todo-input">
      <button class="todo-button" @click="addTodo">添加</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    addTodo () {
      // 提交action，并把输入内容置空
      this.$store.dispatch('addTodo', this.todoText)
      this.todoText = ''
    }
  }
}
</script>

<style scoped>
.add-todo {
  width: 100%;
}
.todo-input {
  width: 360px;
  height: 36px;
  border: 1px solid #cccccc;
  padding-left: 10px;
  border-radius: 5px;
}
.todo-button {
  width: 120px;
  height: 39px;
  background-color: #f17c67;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
}
</style>
