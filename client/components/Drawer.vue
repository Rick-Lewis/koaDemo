/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:20:27 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-21 11:43:48
 */

<template>
  <div class="drawer-container" v-bind:class="extendClass">
    <div class="hook-container" v-on:click="handleHookClick"></div>
    <div class="content-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      extendClass: ""
    };
  },
  methods: {
    handleHookClick: function(e) {
      console.log("Drawer.vue handleHookClick", e);
      this.extendClass = !this.extendClass ? "extend-class" : "";
    }
  }
};
</script>

<style lang="scss">
$navHeight: 6.4rem; //navigator的高度
.drawer-container {
  position: fixed;
  top: 0;
  right: -48rem;
  width: 48rem;
  height: 100vh;
  padding-top: $navHeight;
  box-sizing: border-box;
  -webkit-transition: right 0.5s;
  -moz-transition: right 0.5s;
  -ms-transition: right 0.5s;
  -o-transition: right 0.5s;
  transition: right 0.5s;
  .hook-container {
    width: 2rem;
    height: 4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -2rem;
    margin: auto 0;
    background-color: #000;
    border-radius: 3px 0px 0px 3px;
  }
  .content-container {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.extend-class {
  right: 0;
}
</style>