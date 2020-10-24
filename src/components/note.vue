<template>
  <div class="item">
    <div class="meta updateTime">
      {{ "updatetime(entity)" }}
    </div>
    <div class="content">
      <a class="header">{{ note.food }}</a>
      <div class="description">
        <p>{{ "entity.food" }}</p>
      </div>
      <div class="extra">
        <Editor v-bind:note="note"></Editor>
        {{ "words(entity)" }} 个字;
        <i class="right floated brown trash icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "./editor";
//import { mapGetters } from "vuex";

export default {
  props: ["note"],
  components: {
    Editor,
  },
};
</script>

<style lang="css">
</style>