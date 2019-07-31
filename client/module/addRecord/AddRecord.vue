/*
 * @Author: xu.long  
 * @Date: 2019-07-28 14:33:34  
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-29 10:34:08
 */
<template>
  <div class="add-record-container">
    <my-navigator class="my-navigator-container"></my-navigator>
    <div class="title-input-container">
      <input placeholder="填写传记标题" />
    </div>
    <div class="content-input-container"></div>
  </div>
</template>
<script>
import Navigator from "../common/navigator/Navigator";
export default {
  name: "AddRecord",
  components: {
    "my-navigator": Navigator
  },
  data() {
    return {
      a: ""
    };
  }
};
</script>
<style lang="scss">
.add-record-container {
  position: relative;
  height: 100vh;
  $navHeight: 6.4rem; //navigator的高度
  .my-navigator-container {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 11;
  }
  .title-input-container {
    width: 938px;
    padding: 20px 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #fff;
    line-height: 20px;
    position: absolute;
    top: 25px;
    z-index: 1;
    left: 50%;
    margin-left: -489px;
    box-shadow: 0 2px 2px rgba(110, 98, 85, 0.5);
    transition: 0.2s linear 0s;
    -webkit-transition: 0.2s linear 0s;
    input {
      width: 868px;
      height: 20px;
      line-height: 22px;
      font-size: 18px;
      border: 0;
      color: #666;
      float: left;
    }
  }
}
</style>
