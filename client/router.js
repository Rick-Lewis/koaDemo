/**
 * Created by xu.long on 2019/6/9.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/index', component: () => import('./module/home/Home.vue') }
      // { path: '/home', name: 'Home', component: Home }
    ]
  });
}
