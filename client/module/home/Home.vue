/**
* Created by xu.long on 2019/6/9.
*/
<template>
    <div class="home-container">
        <my-navigator class="my-navigator-container"></my-navigator>
        <my-carousel class="my-carousel-container">
            <my-carousel-item v-for="(item, index) in bannerList" v-bind:key="index" class="my-carousel-item-container">
                <img :src="item"/>
            </my-carousel-item>
        </my-carousel>
        <my-drawer class="my-drawer-container">
            <template v-if="targetElement === 'login'">
                <login></login>
            </template>
        </my-drawer>
    </div>
</template>

<script>
  import homeStore from '../../store/home';
  import Carousel from '../../components/Carousel';
  import CarouselItem from '../../components/CarouselItem';
  import Navigator from './navigator/Navigator';
  import Drawer from '../../components/Drawer';
  import Login from './login/Login';

  import kidsPic from '../../public/images/kids.png';
  import loversPic from '../../public/images/lovers.png';
  import parentsPic from '../../public/images/parents.png';

  export default {
    components: {
      'my-carousel': Carousel,
      'my-carousel-item': CarouselItem,
      'my-navigator': Navigator,
      'my-drawer': Drawer,
      'login': Login
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
    methods: {}
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