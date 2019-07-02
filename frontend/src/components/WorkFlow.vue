<template>
  <div>
    <h1>Work Flow</h1>
    <Task0 />
    <Task1 />
    <Task2 />
  </div>
</template>

<script>
import Task0 from "./Task0.vue";
import Task1 from "./Task1.vue";
import Task2 from "./Task2.vue";
export default {
  name: "work-flow",
  components: {
    Task0,
    Task1,
    Task2
  }
};
</script>

<style lang="scss" scoped>
</style>