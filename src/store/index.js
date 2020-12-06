import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 111
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store