<template>
  <div>
    <h1>Task 1: Problem Discovery</h1>

    <input v-model="problemSelected" />
    <p>Pre-existed Problem</p>
    <button @click="getPreExistedProblem()">Get Pre-existed Problem</button>
    <br />
    <li v-for="name in preExistedProblemPath" :key="name">
      <input type="radio" :value="name" v-model="problemSelected" />
      {{name}}
    </li>
    <!-- <input type="radio" :value="preExistedProblemPath" v-model="problemSelected" /> -->

    <p>Generated Problem</p>
    <li v-for="name in generatedProblemPath" :key="name">
      <input type="radio" :value="name" v-model="problemSelected" />
      {{name}}
    </li>
  </div>
</template>

<script>
export default {
  name: "task-1",
  data() {
    return {
      preExistedProblemPath: [],
      generatedProblemPath: ["gp1", "gp2"],
      problemSelected: null
    };
  },
  methods: {
    getPreExistedProblem() {
      this.$socket.emit("getPreExistedProblemRequest");
    }
  },
  sockets: {
    getPreExistedProblemResponse(preExistedProblemPath) {
      this.preExistedProblemPath.push(preExistedProblemPath);
      this.problemSelected = preExistedProblemPath;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>