<template>
  <div>
    <h1>Task 1: Problem Discovery</h1>

    <input v-model="problemPathSelected" />

    <p>Pre-existed Problem</p>
    <input type="radio" v-model="problemPathSelected" />
    {{path2name(problemPathSelected)}}
    <br />
    <!-- <li v-for="(path,index) in problemPaths" :key="index">
      <input type="radio" :value="path" v-model="problemPathSelected" />
      {{path2name(path)}}
    </li>-->

    <!-- <input type="radio" :value="preExistedProblemPath" v-model="problemPathSelected" />
    {{getNameFromPath(preExistedProblemPath)}}-->
    <!-- <input type="radio" :value="preExistedProblemPath" v-model="problemPathSelected" /> -->

    <button @click="generatedProblems()">Generated Problem</button>
    <button @click="getGeneratedProblems()">getGeneratedProblems</button>
    <br />
    <button @click="setProblemCreateHerald()">Confirm Problem and Create Herald</button>
  </div>
</template>

<script>
export default {
  name: "task-1",
  // data() {
  //   return {
  //     problemPaths: [],
  //     preExistedProblemPath: null,
  //     // generatedProblemPath: ["gp1", "gp2"],
  //     problemPathSelected: null
  //   };
  // },
  computed: {
    problemsPaths() {
      return this.$store.state.problemsPaths;
    },
    preExistedProblemPath() {
      return this.$store.state.preExistedProblemPath;
    },
    problemPathSelected() {
      return this.$store.state.problemPathSelected;
    }
  },
  methods: {
    getGeneratedProblems() {
      this.$socket.emit("getGeneratedProblemsRequest");
    },
    generatedProblems() {
      this.$socket.emit("generatedProblemsRequest");
    },
    getPreExistedProblemPath() {
      this.$socket.emit("getPreExistedProblemPathRequest");
    },
    getGeneratedProblemPaths() {
      this.$socket.emit("getGeneratedProblemPathsRequest");
    },
    setProblemCreateHerald() {
      this.$socket.emit("setProblemRequest", this.problemPathSelected);
      // this.$socket.emit("createHeraldRequest");
    },
    path2name(path) {
      if (path) {
        let index = path.lastIndexOf("/");
        return path.substring(index + 1, path.length);
      }
    }
  },
  sockets: {
    setDatasetResponse() {
      this.getPreExistedProblemPath();
    },
    getPreExistedProblemPathResponse(preExistedProblemPath) {
      this.$store.state.preExistedProblemPath = preExistedProblemPath;
      this.$store.state.problemPathSelected = preExistedProblemPath;
      // let len = this.problemPaths.length;
      // if (len < 1) {
      //   this.problemPaths.push(preExistedProblemPath);
      //   this.problemPathSelected = preExistedProblemPath;
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>