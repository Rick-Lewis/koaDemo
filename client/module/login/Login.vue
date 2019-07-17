/**
* Created by xu.long on 2019/7/14.
*/
<template>
    <div class="login-container">
        <div class="title-container">
            <h3>团饭饭团</h3>
        </div>
        <div class="input-container">
            <my-input></my-input>
            <my-input></my-input>
        </div>
        <div class="btn-container">
            <my-button v-on:my-click="handleLoginClick">登陆</my-button>
        </div>
    </div>
</template>

<script>
  import Input from '../../components/Input';
  import Button from '../../components/Button';
  export default {
    name: 'Login',
    components: {
      'my-input': Input,
      'my-button': Button
    },
    methods: {
      handleLoginClick: function (e) {
        console.log('Login.vue handleLoginClick', e);
        let urlTemp = this.global_.path.baseUrl + '/sec/v1/login';
        this.axios.post(urlTemp, {
          username: 'longxu',
          password: '123456'
        }).then(res => {
          console.log('Login.vue handleLoginClick axios /login success', res);
        }, err => {
          console.log('Login.vue handleLoginClick axios /login success', err);
        });
      }
    }
  }
</script>

<style lang="scss">
    .login-container{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        .title-container{
            text-align: center;
        }
    }
</style>