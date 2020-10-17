<template>
  <div class="ui container notes">
    <h4 class="ui horizontal divider header">
      <i class="paw icon"></i>
      Guo Rui's Notes
    </h4>
    <a class="ui right floated brown button" @click="create">编辑笔记</a>

    <div class="ui divided items notelist">
      <note
        v-for="entity in entities"
        v-bind:entity="entity"
        v-bind:key="entity.index"
      ></note>
      <span>如果没有笔记，请点击"添加笔记"按钮</span>
    </div>
  </div>
</template>

<script>
import Note from "./note";
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    this.initial();
  },
  methods: {
    ...mapActions(["initial", "create"]),
  },
  computed: {
    ...mapGetters(["entities"]),
  },
  props: ["msg"],
  components: {
    Note,
  },
};
</script>

<style>
</style>
