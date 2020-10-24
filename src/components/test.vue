<template>
  <div>
    <button class="ui button" v-for="item in items" v-bind:key="item.index">
      {{ item.number + "-" + item.text }}
    </button>
  </div>
</template>



<script lang="">
export default {
  data() {
    return {
      items: this.$store.state.items,
    };
  },
};
</script>

<style scoped>
</style>

