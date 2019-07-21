/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:20:11 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-21 18:14:56
 */

<template>
    <button v-on:click="$emit('my-click')" type="button" class="button-container" v-bind:class="extendClass">
        <slot />
    </button>
</template>

<script>
  export default {
    name: 'Button',
    data(){
      return{
        extendClass: ''
      }
    },
    props: [],
    methods: {}
  }
</script>

<style lang="scss">
    .button-container {
        color: #fff;
        background-color: rgb(24, 144, 255);
        border-color: rgb(24, 144, 255);
        text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
        -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);
        box-shadow: 0 2px 0 rgba(0,0,0,0.045);
        height: 4.2rem;
        padding: 0 1.5rem;
        border-radius: .4rem;
        line-height:1.5;
        position: relative;
        display: inline-block;
        white-space: nowrap;
        text-align: center;
        background-image: none;
        width: 100%;
        outline: none;
        font-size: 1.6rem;
        cursor: pointer;
        &:active{
          background-color: rgba(24, 144, 255, .5);
          border-color: rgba(24, 144, 255, .5);
        }
    }
</style>