import * as types from './mutation_type'

export default {
  // 新增todo
  [types.ADD_TODO] (state, todoText) {
    // 判断输入内容是否为空
    if (todoText) {
      let todoInfo = {}
      todoInfo.isDone = false
      // 如果todoList为空，则todoInfo.id为0
      if (state.todoList.length === 0) {
        todoInfo.id = 0
      } else if (state.todoList.length > 0) {
        // todoList中的最后一个元素
        let todoFirst = state.todoList[state.todoList.length - 1]
        console.log(todoFirst.text + ',' + todoFirst.id)
        // 确定todoInfo.id的值
        todoInfo.id = todoFirst.id + 1
      }
      todoInfo.text = todoText
      state.todoList.push(todoInfo)
    }
  },
  [types.DONE_TODO] (state, id) {
    // 将数组中与完成元素相同id的元素设置为已完成
    // 因为对象是引用类型，所以此处用map修改了对象的值后，原数组也发生改变
    state.todoList.map((item) => {
      console.log(item.id)
      if (item.id === id) {
        item.isDone = true
      }
    })
  },
  [types.SELECT_TYPE] (state, type) {
    state.selected = type
  }
}
