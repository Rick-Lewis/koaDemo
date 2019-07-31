/*
 * @Author: xu.long  
 * @Date: 2019-07-31 15:54:42  
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-31 16:10:23
 */
<template>
  <div class="root-container">
    <my-navigator class="my-navigator-container"></my-navigator>
    <drawer class="my-drawer-container">
      <template v-if="targetElement === 'login'">
        <my-login
          v-on:my-register="setDrawerStatus"
          v-on:my-find-password="findPassword"
          @my-login="login"
        ></my-login>
      </template>
      <template v-else-if="targetElement === 'register'">
        <my-register v-on:my-register="signIn" v-on:my-login="setDrawerStatus"></my-register>
      </template>
      <template v-else-if="targetElement === 'userCenter'">
        <my-user-center></my-user-center>
      </template>
    </drawer>
    <router-view></router-view>
  </div>
</template>
<script>
import Navigator from "./common/navigator/Navigator";

import Drawer from "../components/Drawer";

import Login from "./home/login/Login";
import Register from "./home/register/Register";
import UserCenter from "./home/userCenter/UserCenter";

export default {
  components: {
    "my-navigator": Navigator,
    drawer: Drawer,
    "my-login": Login,
    "my-register": Register,
    "my-user-center": UserCenter
  },
  name: "Root",
  data() {
    return {
      targetElement: "login"
    };
  },
  methods: {
    //忘记密码
    findPassword: function() {
      console.log("Home methods findPassword");
    },
    //登陆
    login: function() {
      console.log("Home methods login");
      this.setDrawerStatus("userCenter");
    },
    //注册
    signIn: function() {
      console.log("Home methods signIn");
      this.setDrawerStatus("userCenter");
    },
    //route
    setDrawerStatus: function(val) {
      console.log("Home methods signIn");
      this.targetElement = val;
    }
  }
};
</script>
<style lang="scss">
.root-container {
  .my-navigator-container {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 11;
  }
  // .my-drawer-container {}
}
</style>
