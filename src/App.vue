<template>
  <Notes msg="Guo Rui Notes"></Notes>
</template>

<script>
import Notes from "./components/notes";
import "semantic-ui-css/semantic.min.css";

export default {
  name: "App",
  components: {
    Notes,
  },
};
</script>

<style>
.notes {
  margin-top: 32px;
}
.notelist {
  margin-top: 30px;
}

.notes .ui textarea {
  border: none;
  padding: 0;
  font-size: 16px;
  margin: 32px 0;
}

.item > .content > .header {
  display: block;
  cursor: pointer;
}
.updateTime {
  width: 88px;
  color: cadetblue;
  margin-top: 0;
  margin-bottom: 16px;
}

.trash.icon {
  cursor: pointer;
}
</style>
