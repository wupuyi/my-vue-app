<template>
  <div>
    <div class="todoList">
      <p class="todoItem" v-for="todo in todoList" :key="todo.id">
        <span class="radio" @click="doneTodo(todo.id)"></span><span :class="{ 'isDone': todo.isDone }">{{ todo.text }}</span>
      </p>
    </div>
    <div class="select-section">
      <!-- <p class="space"></p> -->
      <span :class="{ 'select-type': selected === 0, 'select': true }" @click="selectType(0)">全部</span>
      <span :class="{ 'select-type': selected === 1, 'select': true }" @click="selectType(1)">已完成</span>
      <span :class="{ 'select-type': selected === 2, 'select': true }" @click="selectType(2)">未完成</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    todoList () {
      let selected = this.$store.state.todo.selected
      // 根据不同类型的选择，返回不同的todoList
      if (selected === 0) {
        return this.$store.state.todo.todoList
      } else if (selected === 1) {
        return this.$store.getters.filterDoned
      } else if (selected === 2) {
        return this.$store.getters.filterNoDoned
      }
    },
    selected () {
      return this.$store.state.todo.selected
    }
  },
  methods: {
    doneTodo (id) {
      this.$store.dispatch('doneTodo', id)
    },
    selectType (type) {
      this.$store.dispatch('selectType', type)
    }
  }
}
</script>

<style scoped>
  .todoList {
    text-align: left;
    padding: 0 52px;
    margin: 40px auto;
  }
  .todoItem {
    border-bottom: 1px solid #b8b8bf;
    padding-bottom: 10px;
  }
  .radio {
    display: inline-block;
    width: 15px;
    height: 15px;
    float: left;
    border: 1px solid #979797;
    margin-top: 2px;
    margin-right: 5px;
    border-radius: 8px;
  }
  .todoItem:hover {
    color: black;
  }
  .radio:hover {
    border: 1px solid #141414;
  }
  .isDone {
    text-decoration: line-through;
  }
  .select-type {
    background-color: #f17c67;
    color: white;
  }
  .select {
    display: inline-block;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
    cursor: pointer;
  }
  .select-selection {
    width: 300px;
    height: 40px;
    margin: 0 auto;
    margin-top: -40px;
  }
</style>
