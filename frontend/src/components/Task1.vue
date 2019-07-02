<template>
  <div>
    <h1>Task 1: Problem Discovery</h1>

    <input v-model="problemSelected" />
    <p>Pre-existed Problem</p>
    <li v-for="name in datasetNames" :key="name">
      <input type="radio" :value="name" v-model="datasetSelected" />
      {{name}}
    </li>

    <p>Generated Problem</p>
    <li v-for="name in datasetNames" :key="name">
      <input type="radio" :value="name" v-model="datasetSelected" />
      {{name}}
    </li>
  </div>
</template>

<script>
export default {
  name: "task-1",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>