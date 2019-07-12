<template>
  <div>
    <h1>Task 2: Model View</h1>
    <!-- <button @click="startTask2()">Start Task 2</button> -->
    <button @click="helloSearch">Hello and Search Solutions</button>
    <br />
    <button @click="getAllSolutions()">GetAll</button>
    <br />
    <button @click="scoreSelectedSolutions()">scoreSelected</button>
    <br />
    <button @click="describeSolutions()">describe</button>
    <br />
    <button @click="fitSolutions()">fit</button>
    <br />
    <button @click="produceSolutions()">produce</button>
    <br />
    <button @click="exportSolutions()">export</button>

    <div>
      <li v-for="(solutionID, index) in solutionIDs" :key="index">
        <input type="checkbox" :value="solutionID" v-model="solutionIDs_selected" />
        {{solutionID}}
      </li>
      <p>{{solutionIDs_selected}}</p>

      <!-- <input v-model="solutionID_selected" /> -->
      <button @click="describeSolution">describeSolution</button>
    </div>
    <div>
      <li v-for="(metric, index) in metrics" :key="index">
        <input type="checkbox" :value="metric" v-model="metrics_selected" />
        {{metric}}
      </li>
      <p>{{metrics_selected}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      solutionIDs: [],
      solutionIDs_selected: [],
      metrics_selected: ["rootMeanSquaredError"],
      exportID: "",
      rank: 0.0,
      metrics: [
        // "accuracy",
        // "recall",
        // "f1",
        // "f1Micro",
        // "f1Macro"
        // "rocAuc",
        // "rocAucMicro",
        // "rocAucMacro",
        // "meanSquaredError",
        "rootMeanSquaredError"
        // "rootMeanSquareErrorAvg",
        // "meanAbsoluteError",
        // "rSquared",
        // "normalizedMutualInformation",
        // "jaccardSimilarityScore",
        // "precisionAtTopK",
        // "objectDetectionAveragePrecision",
        // "loss"
      ]
    };
  },
  mounted() {
    // this.helloSearch();
  },
  methods: {
    // startTask2() {
    //   this.$socket.emit("startTask2Request");
    // },
    helloSearch() {
      this.$socket.emit("helloSearch");
    },
    getAllSolutions() {
      console.log("getAllSolutions");
      this.$socket.emit("getAllSolutions");
    },
    scoreSelectedSolutions() {
      console.log("scoreSelectedSolutions");
      this.$socket.emit(
        "scoreSelectedSolutions",
        this.solutionIDs_selected,
        this.metrics_selected
      );
    },
    describeSolutions() {
      console.log("describeSolutions");
      this.$socket.emit("describeSolutions", this.solutionIDs_selected);
    },
    describeSolution() {
      this.solutionIDs_selected = [];
      this.solutionIDs_selected.push(this.solutionID_selected);
      this.$socket.emit("describeSolutions", this.solutionIDs_selected);
    },

    fitSolutions() {
      this.$socket.emit("fitSolutions", this.solutionIDs_selected);
    },

    produceSolutions() {
      this.$socket.emit("produceSolutions", this.solutionIDs_selected);
    },
    exportSolutions() {
      this.$socket.emit("exportSolutions", this.exportID, this.rank);
    }
  },
  sockets: {
    connect() {
      console.log("Client: try to connect!");
    },
    getAllSolutionsResponse(solutionIDs) {
      console.log("getAllSolutionsResponse");
      // const solutions = JSON.parse(solutionsStr)
      console.log(solutionIDs);
      this.solutionIDs = solutionIDs;
      console.log("Size of solutions:", this.solutionIDs.length);
    },
    setProblemResponse() {
      this.helloSearch();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>