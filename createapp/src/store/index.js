import { createStore } from 'vuex'

export default createStore({
  state: {
    // 数据存放
    userid: 0,
    punch: true,
  },
  getters: {
  },
  mutations: {
    userid2(state,id){
      state.userid = id;
    },
    punch2(state,flag) {
      state.punch = flag;
    }
  },
  actions: {
    userid(context,id){
      context.commit('userid2',id);
    },
    punch(context,flag) {
      context.commit('punch2',flag);
    },
  },
  modules: {
  }
})
