/**
* Created by xu.long on 2019/7/14.
*/
<template>
    <div class="drawer-container" v-bind:class="extendClass">
        <div class="hook-container" v-on:click="handleHookClick"></div>
        <div class="content-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Drawer',
    data(){
      return{
        extendClass: ''
      }
    },
    methods: {
      handleHookClick: function (e) {
        console.log('Drawer.vue handleHookClick', e);
        this.extendClass = !this.extendClass ? 'extend-class' : '';
      }
    }
  }
</script>

<style lang="scss">
    $navHeight: 6.4rem; //navigator的高度
    .drawer-container {
        position: fixed;
        top: 0;
        right: 0;
        width: 0;
        height: 100vh;
        padding-top: $navHeight;
        box-sizing: border-box;
        background-color: red;
        -webkit-transition: width .5s;
        -moz-transition: width .5s;
        -ms-transition: width .5s;
        -o-transition: width .5s;
        transition: width .5s;
        .hook-container {
            width: 4rem;
            height: 4rem;
            position: absolute;
            top: 0;
            bottom: 0;
            left: -2rem;
            margin: auto 0;
            background-color: #000;
        }
        .content-container {
            height: 100%;
        }
    }
    .extend-class{
        width: 48rem;
    }
</style>