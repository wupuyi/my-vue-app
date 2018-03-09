import * as types from './mutation_type'

export default {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECMENT] (state) {
    state.count--
  }
}
