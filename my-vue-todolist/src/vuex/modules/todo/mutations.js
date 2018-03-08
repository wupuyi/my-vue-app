import * as types from './mutation_type'

export default {
  [types.ADD_TODO] (state, data) {
    state.todoList.push(data)
  }
}
