/**
 * Created by xu.long on 2019/7/13.
 */
export default {
  namespaced: true,
  // 重要信息：state 必须是一个函数，
  // 因此可以创建多个实例化该模块
  state: () => ({
    title: 'Hello',
    total: 0
  }),
  actions: {
    inc: ({ commit }) => commit('inc'),
    sub: ({ commit }) => commit('sub')
  },
  mutations: {
    inc: state => state.total++,
    sub: state => state.total--
  }
};