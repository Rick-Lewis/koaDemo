/**
 * Created by xu.long on 2019/5/19.
 */
import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';
import { sync } from 'vuex-router-sync';
import global_ from './Global';
import axios from 'axios';
import VueAxios from 'vue-axios';

// 导出一个工厂函数，用于创建新的应用程序、router 和 store 实例
export function createApp () {
  // 创建 store 实例
  const store = createStore();
  // 创建 router 实例
  const router = createRouter();
  // 同步路由状态(route state)到 store
  sync(store, router);
  Vue.prototype.global_= global_;
  Vue.use(VueAxios, axios);
  const app = new Vue({
    store,
    // 注入 router 到根 Vue 实例
    router,
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
  });
  return { app, router, store };
}
