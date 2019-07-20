/**
* Created by xu.long on 2019/7/14.
*/
<template>
    <div class="login-container">
        <div class="title-container">
            <span>尤为</span>
        </div>
        <div class="my-input-container">
            <my-input placeholder="你的邮箱/手机号"></my-input>
            <my-input placeholder="您的密码" style="margin-top: 1rem;"></my-input>
        </div>
        <div class="forget-password-container"><a href="#">忘记密码</a></div>
        <div class="my-btn-container">
            <my-button v-on:my-click="handleLoginClick">登陆</my-button>
            <div class="register-container">还没有账号？<a href="#">马上注册</a></div>
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
        width: 37rem;
        background-color: #fff;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;
        .title-container{
            text-align: center;
            padding: 1.5rem 0;
            font-size: 2rem;
        }
        .my-input-container{
            padding: 0 2.5rem;
        }
        .forget-password-container{
            padding: .8rem 2.5rem 0 2.5rem;
            text-align: right;
            a{
                text-decoration: none;
            }
        }
        .my-btn-container{
            padding: 1.2rem 2.5rem 2rem 2.5rem;
            .register-container{
                font-size: 12px;
                text-align: center;
                padding-top: .5rem;
            }
        }
        a{
            font-size: 12px;
        }
    }
</style>