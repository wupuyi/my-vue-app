import * as types from './mutation_type'

export default {
  // 增加todo
  addTodo ({ commit }, todoText) {
    commit(types.ADD_TODO, todoText)
  },
  // 或者写成
  // addTodo (context , todoText) {
  //   context.commit(types.ADD_TODO, todoText)
  // }
  doneTodo ({ commit }, id) {
    commit(types.DONE_TODO, id)
  },
  selectType ({ commit }, type) {
    commit(types.SELECT_TYPE, type)
  }
}
