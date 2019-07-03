<template>
  <div>
    <h1>Task 1: Problem Discovery</h1>

    <input v-model="problemPathSelected" />

    <p>Pre-existed Problem</p>
    <li v-for="(path,index) in problemPaths" :key="index">
      <input type="radio" :value="path" v-model="problemPathSelected" />
      {{path2name(path)}}
    </li>

    <!-- <input type="radio" :value="preExistedProblemPath" v-model="problemPathSelected" />
    {{getNameFromPath(preExistedProblemPath)}}-->
    <!-- <input type="radio" :value="preExistedProblemPath" v-model="problemPathSelected" /> -->

    <button>Generated Problem</button>
    <button>getGeneratedProblemPaths</button>
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
      this.$socket.emit("getGeneratedProblemPathsRequest");
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