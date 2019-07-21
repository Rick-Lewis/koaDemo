/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:20:03 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-21 19:03:02
 */
<template>
  <div class="user-center-container">
    <div class="me-container">
      <img />
    </div>
    <list class="user-list-container">
      <list-item v-for="(item, index) in userList" v-bind:key="index">
        <div>{{item.rel_name}}</div>
      </list-item>
    </list>
  </div>
</template>

<script>
import List from '../../../components/List';
import ListItem from '../../../components/ListItem';
export default {
  name: "UserCenter",
  components: {
    'list': List,
    'list-item': ListItem
  },
  data: function() {
    return {
      userList: [
        {
          rel_name: "爷爷"
        },
        {
          rel_name: "奶奶"
        },
        {
          rel_name: "爸爸"
        },
        {
          rel_name: "妈妈"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.user-center-container {
  height: 100vh;
  background-color: #fff;
  .me-container{
    img{
      width: 4.4rem;
      height: 4.4rem;
      background-color: red;
      border-radius: 50%;
    }
  }
}
</style>