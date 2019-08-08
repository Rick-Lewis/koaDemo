/*
 * @Author: xu.long
 * @Date: 2019-07-20 17:22:04
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-08-06 17:29:55
 */

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/staticPage",
        component: () => import("./module/Root.vue"),
        children: [
          { path: "", component: () => import("./module/home/Home.vue") },
          { path: "home", component: () => import("./module/home/Home.vue") },
          {
            path: "addRecord",
            component: () => import("./module/addRecord/AddRecord.vue")
          }
        ]
      }
    ]
  });
}
