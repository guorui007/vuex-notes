<template>
  <div class="ui form">
    <div class="field">
      <textarea
        rows="5"
        placeholder="今天中午老婆给你做了啥？"
        v-model="entity.food"
        v-on:input="update(entity)"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["entity"],
  ...mapActions(["update"]),
};
</script>

<style lang="css"></style>;
