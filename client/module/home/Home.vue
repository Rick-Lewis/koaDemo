/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:21:03 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-22 20:16:46
 */

<template>
    <div class="home-container">
        <my-navigator class="my-navigator-container"></my-navigator>
        <carousel class="my-carousel-container">
            <carousel-item v-for="(item, index) in bannerList" v-bind:key="index" class="my-carousel-item-container">
                <img :src="item"/>
            </carousel-item>
        </carousel>
        <drawer class="my-drawer-container">
            <template v-if="targetElement === 'login'">
                <my-login v-on:my-register="setDrawerStatus" v-on:my-find-password="findPassword" @my-login="login"></my-login>
            </template>
            <template v-else-if="targetElement === 'register'">
                <my-register v-on:my-register="signIn" v-on:my-login="setDrawerStatus"></my-register>
            </template>
            <template v-else-if="targetElement === 'userCenter'">
                <my-user-center></my-user-center>
            </template>
        </drawer>
    </div>
</template>

<script>
  import homeStore from '../../store/home';
  import Carousel from '../../components/Carousel';
  import CarouselItem from '../../components/CarouselItem';
  import Navigator from './navigator/Navigator';
  import Drawer from '../../components/Drawer';
  import Login from './login/Login';
  import Register from './register/Register';
  import UserCenter from './userCenter/UserCenter';

  import kidsPic from '../../public/images/kids.png';
  import loversPic from '../../public/images/lovers.png';
  import parentsPic from '../../public/images/parents.png';

  export default {
    //纯组件用中划线声明，命名不带‘my’；业务container用中划线声明，命名带‘my’
    components: {
      'carousel': Carousel,
      'carousel-item': CarouselItem,
      'my-navigator': Navigator,
      'drawer': Drawer,
      'my-login': Login,
      'my-register': Register,
      'my-user-center': UserCenter
    },
    data(){
      return {
        bannerList: [
          loversPic,
          kidsPic,
          parentsPic
        ],
        targetElement: 'login'
      }
    },
    created(){
      console.log('Home.vue created', this.global_);
      this.$store.registerModule('home', homeStore);
    },
    mounted() {
      console.log('Home.vue mounted');
    },
    // 重要信息：当多次访问路由时，
    // 避免在客户端重复注册模块。
    destroyed () {
      console.log('Home.vue destroyed');
      this.$store.unregisterModule('home');
    },
    computed: {},
    methods: {
      //忘记密码
      findPassword: function() {
        console.log('Home methods findPassword');
      },
      //登陆
      login: function() {
        console.log('Home methods login');
        this.setDrawerStatus('userCenter');
      },
      //注册
      signIn: function() {
        console.log('Home methods signIn');
        this.setDrawerStatus('userCenter');
      },
      //设置右边抽屉里面的展示内容
      setDrawerStatus: function(val){
        console.log('Home methods setStatus', val);
        this.targetElement = val;
      }
    }
  }
</script>

<style lang="scss">
    .home-container {
        height: 100vh;
        $navHeight: 6.4rem; //navigator的高度
        .my-navigator-container {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 11;
        }
        .my-carousel-container {
            padding-top: $navHeight;
            .my-carousel-item-container {
                img {
                    width: 100%;
                }
            }
        }
        // .my-drawer-container {}
    }
</style>