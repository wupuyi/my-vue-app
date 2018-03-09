import actions from './actions'
import mutations from './mutations'

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
  actions,
  mutations,
  getters: {
    // 已完成的todo
    filterDoned (state) {
      let todoList = state.todoList.filter((item) => {
        if (item.isDone) {
          return item
        }
      })
      return todoList
    },
    // 未完成的todo
    filterNoDoned (state) {
      let todoList = state.todoList.filter((item) => {
        if (!item.isDone) {
          return item
        }
      })
      return todoList
    }
  }
}
