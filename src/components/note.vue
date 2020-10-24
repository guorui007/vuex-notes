<template>
  <div class="item">
    <div class="meta updateTime" v-if="note.meta">
      {{ note.meta.updated }}
    </div>
    <div class="content">
      <a class="header" v-on:click="open = !open">{{ title || "新建笔记" }}</a>
      <div class="extra">
        <Editor v-bind:note="note" v-if="open" />
        {{ note.food.length }} 个字;
        <i class="right floated brown trash icon" v-if="open"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "./Editor";
import _ from "lodash";
//import { mapGetters } from "vuex";

export default {
  props: ["note"],
  data() {
    return {
      words: this.note.food.length,
      open: false,
    };
  },
  computed: {
    title() {
      return _.truncate(this.note.food, { length: 30 });
    },
  },
  components: {
    Editor,
  },
};
</script>

<style lang="css">
</style>