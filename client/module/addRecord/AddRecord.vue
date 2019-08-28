/*
 * @Author: xu.long  
 * @Date: 2019-07-28 14:33:34  
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-08-09 14:05:01
 */
<template>
  <div class="add-record-container">
    <div class="title-input-container">
      <input placeholder="填写传记标题" />
    </div>
    <div class="content-input-container">
      <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
    </div>
  </div>
</template>
<script>
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Navigator from "../common/navigator/Navigator";
export default {
  name: "AddRecord",
  components: {
    "my-navigator": Navigator
  },
  data() {
    return {
      // editor: ClassicEditor,
      // editorData: "<p>Content of the editor.</p>",
      // editorConfig: {
      //   // The configuration of the editor.
      // }
    };
  }
};
</script>
<style lang="scss">
.add-record-container {
  position: relative;
  height: calc(100vh - 6.4rem);
  background: url("../../public/images/page_bg.jpg") no-repeat;
  background-size: 100% 100%;
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
      outline: none;
    }
  }
}
</style>
