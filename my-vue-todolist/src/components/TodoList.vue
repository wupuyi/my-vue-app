<template>
  <div class="main">
    <div class="add-things">
      <input type="text" placeholder="(งᵒ̌皿ᵒ̌)ง⁼³₌₃ 搞事，搞事" class="add-things-input" v-model="newItem">
      <button class="add-things-btn" @click="addThings">Add</button>
    </div>
    <div class="task">
      <h3 class="task-title">将要搞的事</h3>
      <ul class="task-list" v-if="todoList.length">
        <!-- <li v-for="item in todoList" :key="item.id">{{item.content}}</li> -->
        <li v-for="item in todoList">{{item.content}}</li>
      </ul>
    </div>
    <div class="task">
      <h3 class="task-title">已经搞过了</h3>
      <ul class="task-list">
        <li>123123</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoList: [],
      newItem: ''
    }
  },
  methods: {
    addThings () {
      let newItems = this._newItems(this.newItem)
      this.todoList.push(newItems)
    },
    _newItems (content) {
      let obj = {}
      if (!content) {
        return
      }
      obj.content = content
      obj.complted = false
      return obj
    }
  }
}
</script>

<style scoped>
.main {
  background-color: #cccccc;
}
.add-things {
  background-color: #cccccc;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
}
.add-things-input {
  width: 100%;
}
.task {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}
.task-title {
  font-weight: normal;
  color: #999999;
  font-size: 18px;
}
ul.task-list {
  list-style: none;
  padding-left: 0;
}
</style>
