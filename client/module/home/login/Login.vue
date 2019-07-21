/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:20:42 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-21 18:48:20
 */

<template>
  <div class="login-container">
    <div class="title-container">
      <span>尤为YouWe</span>
    </div>
    <div class="my-input-container">
      <my-input placeholder="您的手机号"></my-input>
      <my-input placeholder="您的密码" style="margin-top: 1rem;"></my-input>
    </div>
    <div class="forget-password-container">
      <a v-on:click="$emit('my-find-password')">忘记密码</a>
    </div>
    <div class="my-btn-container">
      <my-button v-on:my-click="handleLoginClick">登录</my-button>
      <div class="switch-container">
        还没有账号？
        <a v-on:click="$emit('my-register', 'register')">马上注册</a>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../../../components/Input";
import Button from "../../../components/Button";
export default {
  name: "Login",
  components: {
    "my-input": Input,
    "my-button": Button
  },
  methods: {
    handleLoginClick: function(e) {
      console.log("Login.vue handleLoginClick", e);
      let urlTemp = this.global_.path.baseUrl + "/sec/v1/login";
      this.axios
        .post(urlTemp, {
          username: "longxu",
          password: "123456"
        })
        .then(
          res => {
            console.log("Login.vue handleLoginClick axios /login success", res);
          },
          err => {
            console.log("Login.vue handleLoginClick axios /login success", err);
          }
        );
        this.$emit('my-login');
    }
  }
};
</script>

<style lang="scss">
.login-container {
  width: 37rem;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  .title-container {
    text-align: center;
    padding: 1.5rem 0;
    font-size: 2rem;
  }
  .my-input-container {
    padding: 0 2.5rem;
  }
  .forget-password-container {
    padding: 0.8rem 2.5rem 0 2.5rem;
    font-size: 12px;
    text-align: right;
    a {
      text-decoration: none;
    }
  }
  .my-btn-container {
    padding: 1.2rem 2.5rem 2rem 2.5rem;
    .switch-container {
      font-size: 12px;
      text-align: center;
      padding-top: 0.5rem;
    }
  }
  a {
    font-size: 12px;
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>