/**
 * Created by xu.long on 2019/6/9.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store();
};
