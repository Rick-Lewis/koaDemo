/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:21:03 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-31 16:10:21
 */

<template>
  <div class="home-container">
    <carousel class="my-carousel-container">
      <carousel-item
        v-for="(item, index) in bannerList"
        v-bind:key="index"
        class="my-carousel-item-container"
      >
        <img :src="item" />
      </carousel-item>
    </carousel>
  </div>
</template>

<script>
import homeStore from "../../store/home";
import Carousel from "../../components/Carousel";
import CarouselItem from "../../components/CarouselItem";

import kidsPic from "../../public/images/kids.png";
import loversPic from "../../public/images/lovers.png";
import parentsPic from "../../public/images/parents.png";

export default {
  //纯组件用中划线声明，命名不带‘my’；业务container用中划线声明，命名带‘my’
  components: {
    carousel: Carousel,
    "carousel-item": CarouselItem
  },
  data() {
    return {
      bannerList: [kidsPic, loversPic, parentsPic]
    };
  },
  created() {
    console.log("Home.vue created", this.global_);
    this.$store.registerModule("home", homeStore);
  },
  mounted() {
    console.log("Home.vue mounted");
  },
  // 重要信息：当多次访问路由时，
  // 避免在客户端重复注册模块。
  destroyed() {
    console.log("Home.vue destroyed");
    this.$store.unregisterModule("home");
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.home-container {
  height: 100vh;
  $navHeight: 6.4rem; //navigator的高度
  .my-carousel-container {
    padding-top: $navHeight;
    .my-carousel-item-container {
      img {
        width: 100%;
      }
    }
  }
}
</style>