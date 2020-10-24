<template lang="html">
  <div class="ui form">
    <div class="field">
      <textarea
        rows="5"
         v-model="foodcontent"
         v-on:input="updateNote(foodupdate)"
         debounce="8000"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["note"],
  data() {
    return {
      foodcontent: this.note.food,
    };
  },
  methods: {
    ...mapActions(["updateNote"]),
  },
  computed: {
    foodupdate() {
      return { ...this.note, food: this.foodcontent };
    },
  },
};
</script>

<style lang="css"></style>;
