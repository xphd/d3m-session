<template>
  <div>
    <h1>Task 1: Problem Discovery</h1>

    <input v-model="problemPathSelected" />

    <p>Pre-existed Problem</p>
    <!-- <button @click="getPreExistedProblem()">Get Pre-existed Problem</button> -->
    <br />

    <li v-for="(path,index) in problemPaths" :key="index">
      <input type="radio" :value="path" v-model="problemPathSelected" />
      {{path2name(path)}}
    </li>

    <!-- <input type="radio" :value="preExistedProblemPath" v-model="problemPathSelected" />
    {{getNameFromPath(preExistedProblemPath)}}-->
    <!-- <input type="radio" :value="preExistedProblemPath" v-model="problemPathSelected" /> -->

    <p>Generated Problem</p>
    <!-- <li v-for="name in generatedProblemPath" :key="name">
      <input type="radio" :value="name" v-model="problemPathSelected" />
      {{name}}
    </li>-->
  </div>
</template>

<script>
export default {
  name: "task-1",
  data() {
    return {
      problemPaths: [],
      preExistedProblemPath: null,
      // generatedProblemPath: ["gp1", "gp2"],
      problemPathSelected: null
    };
  },
  methods: {
    getPreExistedProblemPath() {
      this.$socket.emit("getPreExistedProblemPathRequest");
    },
    getGeneratedProblemPaths() {
      // this.$socket.emit("getGeneratedProblemPathsRequest")
    },
    setProblem() {
      this.$socket.emit("setProblem", problemPathSelected);
    },
    path2name(path) {
      let index = path.lastIndexOf("/");
      return path.substring(index + 1, path.length);
    }
  },
  sockets: {
    setDatasetResponse() {
      this.getPreExistedProblemPath();
    },
    getPreExistedProblemPathResponse(preExistedProblemPath) {
      let len = this.problemPaths.length;
      if (len < 1) {
        this.problemPaths.push(preExistedProblemPath);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>