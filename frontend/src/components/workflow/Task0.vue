<template>
  <div>
    <h1>Task 0: Select (Augmented) Dataset</h1>
    <input v-model="datasetSelected" />

    <h2>Select from Seed Datasets</h2>
    <li v-for="name in datasetNames" :key="name">
      <input type="radio" :value="name" v-model="datasetSelected" />
      {{name}}
    </li>
    <h2>Or Select from Augmented Datasets</h2>
    <li v-for="name in datasetAugNames" :key="name">
      <input type="radio" :value="name" v-model="datasetSelected" />
      {{name}}
    </li>
    <h3>Augment Data</h3>

    <button @click="setDataset()" :disabled="confirmed">Confirm Dataset</button>
    <button @click="confirmed=false" :disabled="!confirmed">Reset</button>
  </div>
</template>

<script>
export default {
  name: "task-0",
  data() {
    return {
      datasetNames: null,
      datasetAugNames: ["augData_1", "augData_2"],
      datasetSelected: null,
      confirmed: false
    };
  },
  mounted() {
    this.getAllDatasetNames();
  },
  methods: {
    getAllDatasetNames() {
      this.$socket.emit("getAllDatasetNamesRequest");
    },
    setDataset() {
      // console.log("setDatasetRequest sent");
      this.$socket.emit("setDatasetRequest", this.datasetSelected);
      this.confirmed = true;
    }
  },
  sockets: {
    getAllDatasetNamesResponse(datasetNames) {
      if (datasetNames) {
        this.datasetNames = datasetNames;
        this.datasetSelected = datasetNames[0];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>