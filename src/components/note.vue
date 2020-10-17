<template>
  <div class="item">
    <div class="meta updateTime">
      {{ "updateTime" }}
    </div>
    <div class="content">
      <a class="header">每日老婆餐</a>
      <div class="description">
        <p>{{ entity.food || "新品期待上菜" }}</p>
      </div>
      <div class="extra">
        <editor v-bind:entity="entity"></editor>
        {{ "words" }} 个字
        <i class="right floated brown trash icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "./editor";

export default {
  props: ["entity"],
  components: {
    editor: Editor,
  },
};
</script>

<style lang="css">
</style>