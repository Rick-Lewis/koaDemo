/**
* Created by xu.long on 2019/7/14.
*/
<template>
    <input class="input-container"/>
</template>

<script>
  export default {
    name: 'Input'
  }
</script>

<style lang="scss">
    .input-container {
        input {
            font-size: 1.6rem;
            padding: .8rem 1rem;
            line-height: 1.5;
            border: 1px solid #ced4da;
            background-color: #fff;
            border-radius: .3rem;
            display: block;
            width: 100%;
            box-sizing: border-box;
            outline: none;
        }
    }
</style>