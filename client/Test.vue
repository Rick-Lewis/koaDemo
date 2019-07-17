/**
* Created by xu.long on 2019/7/13.
*/
<template>
    <div>
        <div>count:{{count}}</div>
        <div>
            <span>{{total}}</span>
            <button @click="increment"> + </button>
            <button v-on:click="subtract"> - </button>
        </div>
        <span>{{title}}</span>
        <span>{{name}}</span>
</template>

<script>
  import testStore from '../store/test';
  export default {
    name: 'Test',
    data(){
      return {
        name: 'Test',
        timer: null,
        count: 0
      }
    },
    created(){
      console.log('Test.vue created', this.$store);
      this.$store.registerModule('test', testStore);
      this.timer = setInterval(() => {
        this.count++;
      }, 1000);
    },
    // 重要信息：当多次访问路由时，
    // 避免在客户端重复注册模块。
    destroyed () {
      console.log('Test.vue destroyed');
      this.$store.unregisterModule('test');
      clearInterval(this.timer);
    },
    computed: {
      total(){
        let temp = this.$store.state.test.total;
        return temp;
      },
      title(){
        let temp = this.$store.state.test.title;
        return temp;
      }
    },
    methods: {
      increment: function () {
        this.$store.dispatch('test/inc');
      },
      subtract: function () {
        if (this.total > 0) {
          this.$store.dispatch('test/sub');
        }
      }
    }
  }
</script>

<style>
</style>