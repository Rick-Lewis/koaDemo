/**
* Created by xu.long on 2019/7/14.
*/
<template>
    <button v-on:click="$emit('my-click', test)" type="button" class="button-container">
        <slot />
    </button>
</template>

<script>
  export default {
    name: 'Button',
    data(){
      return{
        test: 'hello'
      }
    },
    props: []
  }
</script>

<style>
    .button-container {
        color: #fff;
        background-color: #1890ff;
        border-color: #1890ff;
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
    }
</style>