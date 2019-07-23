/*
 * @Author: xu.long 
 * @Date: 2019-07-20 15:45:25 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-22 09:31:28
 */

<template>
  <div class="list-container">
    <slot />
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {};
  },
  methods: function() {}
};
</script>
<style lang="scss">
.list-container {
  background-color: #ffffff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: 11;
    width: 100%;
    height: 1px;
    top: 0;
    left: 0;
    background-color: rgb(230, 232, 238);
    transform: scaleY(0.5);
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 11;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: rgb(230, 232, 238);
    transform: scaleY(0.5);
  }
}
</style>
