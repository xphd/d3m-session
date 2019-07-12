<template>
  <div>
    <!-- <h1>Task 1: Problem Discovery</h1> -->

    <input v-model="problemPathSelected" />

    <p>Pre-existed Problem</p>
    <input type="radio" :value="problemPathSelected" v-model="problemPathSelected" />
    {{path2name(problemPathSelected)}}
    <br />

    <!-- <button @click="generatedProblems()">Generated Problem</button>
    <button @click="getGeneratedProblems()">getGeneratedProblems</button>-->
    <br />
    <button @click="setProblemCreateHerald()">Confirm Problem and Create Herald</button>
  </div>
</template>

<script>
export default {
  name: "task-1",
  computed: {
    problemsPaths: {
      get() {
        return this.$store.state.problemsPaths;
      },
      set(value) {
        this.$store.commit("setProblemsPaths", value);
      }
    },
    preExistedProblemPath: {
      get() {
        return this.$store.state.preExistedProblemPath;
      },
      set(value) {
        this.$store.commit("setPreExistedProblemPath", value);
      }
    },
    problemPathSelected: {
      get() {
        return this.$store.state.problemPathSelected;
      },
      set(value) {
        this.$store.commit("setProblemPathSelected", value);
      }
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
      this.$store.commit("setPreExistedProblemPath", preExistedProblemPath);
      this.$store.commit("setProblemPathSelected", preExistedProblemPath);
      this.setProblemCreateHerald(); // dev purpose
    }
  }
};
</script>

<style lang="scss" scoped>
</style>