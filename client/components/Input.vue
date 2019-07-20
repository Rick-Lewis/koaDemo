/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:20:32 
 * @Last Modified by:   xu.long 
 * @Last Modified time: 2019-07-20 17:20:32 
 */

<template>
    <input v-bind:placeholder="placeholder" class="input-container"/>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      placeholder: String
    }
  }
</script>

<style lang="scss">
    .input-container {
        font-size: 1.6rem;
        padding: .8rem 1rem;
        line-height: 1.5;
        border: 1px solid #ced4da;
        background-color: #fff;
        border-radius: .4rem;
        display: block;
        width: 100%;
        box-sizing: border-box;
        outline: none;
    }
</style>