/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:21:35 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-20 17:22:34
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