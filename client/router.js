/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:22:04 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-20 17:22:26
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
