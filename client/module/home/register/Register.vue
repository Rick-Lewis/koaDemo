/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:20:57 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-22 21:19:41
 */

<template>
  <div class="register-container">
    <div class="title-container">
      <span>尤为YouWe</span>
    </div>
    <div class="my-input-container">
      <my-input
        placeholder="您的姓名"
        v-bind:value="username"
        @input="handleInputChange('username', $event)"
      ></my-input>
      <my-input
        style="margin-top: 1rem;"
        placeholder="您的手机号"
        v-bind:value="phone"
        @input="handleInputChange('phone', $event)"
      ></my-input>
    </div>
    <div class="protocol-container">
      <span>
        注册表示您同意
        <a>《尤为YouWe用户使用协议》</a>
      </span>
    </div>
    <div class="my-btn-container">
      <my-button v-on:my-click="handleRegisterClick">立即注册</my-button>
      <div class="switch-container">
        已经注册？
        <a v-on:click="$emit('my-login', 'login')">马上登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../../../components/Input";
import Button from "../../../components/Button";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      phone: ""
    };
  },
  components: {
    "my-input": Input,
    "my-button": Button
  },
  methods: {
    handleRegisterClick: function() {
      console.log("Register.vue methods handleRegisterClick");
      if (!!this.username && !!this.phone) {
        let urlTemp = this.global_.path.baseUrl + "/home/create";
        this.axios
          .post(urlTemp, {
            username: this.username,
            phone: this.phone
          })
          .then(
            res => {
              console.log(
                "Register.vue handleRegisterClick axios /home/create success",
                res
              );
              this.$emit("my-register");
            },
            err => {
              console.log(
                "Register.vue handleRegisterClick axios /home/create failure",
                err
              );
            }
          );
      } else {
        console.log("username or phone is empty");
      }
    },
    handleInputChange: function(key, val) {
      console.log("Register.vue methods handleInputChange", key, val);
      if (key === "username") {
        this.username = val;
      } else if (key === "phone") {
        this.phone = val;
      }
      console.log("Register.vue methods handleInputChange", this.username, this.phone);
    }
  }
};
</script>

<style lang="scss">
.register-container {
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
  .protocol-container {
    padding: 0.8rem 2.5rem 0 2.5rem;
    text-align: right;
    font-size: 12px;
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