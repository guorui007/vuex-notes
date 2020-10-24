<template>
  <div class="ui container notes">
    <h4 class="ui horizontal divider header">
      <i class="paw icon"></i>
      Guo Rui's Notes
    </h4>
    <a
      class="ui right floated brown button"
      v-on:click="createNote({ food: '' })"
      >编辑笔记</a
    >
    <div class="zhong"></div>
    <div class="ui section divider"></div>
    <Test></Test>
    <div class="ui section divider"></div>
    <table class="ui definition table">
      <tbody>
        <tr>
          <td class="two wide column">主题</td>
          <td>《每日老婆餐》</td>
        </tr>
        <tr>
          <td>文章个数</td>
          <td>{{ count }}</td>
        </tr>
        <tr>
          <td>平均阅读量</td>
          <td>7</td>
        </tr>
        <tr>
          <td>点赞数量</td>
          <td>7</td>
        </tr>
      </tbody>
    </table>
    <div class="ui divided items notelist">
      <Note v-for="note in notes" v-bind:note="note" v-bind:key="note.$loki" />
      <span v-if="!notes.length">如果没有笔记，请点击"添加笔记"按钮</span>
    </div>
  </div>
</template>



<script>
import Note from "./note";
import Test from "./test";
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    this.getNotes();
  },
  components: {
    Test,
    Note,
  },
  computed: {
    ...mapGetters(["notes", "count"]),
  },
  methods: {
    ...mapActions(["getNotes", "createNote"]),
  },
};
</script>

<style scope>
.zhong {
  clear: both;
}
.definition.table {
  margin-top: 5px;
}
</style>
