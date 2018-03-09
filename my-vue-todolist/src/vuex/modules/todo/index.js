export default {
  state: {
    todoList: [],
    todoInfo: {
      id: 0,
      text: '',
      isDone: false
    },
    selected: 0
  },
  getters: {
    // 已完成的todo
    filterDoned (state) {
      let todoList = state.todoList.filter((item) => {
        if (item.isDone) {
          return item
        }
      })
      return todoList
    }
  }
}
