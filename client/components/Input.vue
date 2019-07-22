/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:20:32 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-22 20:41:28
 */

<template>
    <input v-bind:placeholder="placeholder" v-bind:value="value" v-on:input="updateVal" class="input-container"/>
</template>

<script>
  export default {
    name: 'Input',
    data(){
      return {}
    },
    props: {
      placeholder: String,
      value: String
    },
    methods: {
      updateVal: function(e){
        console.log('Input.vue methods updateVal', e.target.value);
        this.$emit('input', e.target.value);
      }
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