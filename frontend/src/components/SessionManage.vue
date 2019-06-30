<template>
  <div>
    <h1>Session Manage</h1>
    <input v-model="datasetSelected" />
    <li v-for="name in datasetNames" :key="name">
      <input type="radio" :value="name" v-model="datasetSelected" />
      {{name}}
    </li>
    <button @click="getDataset()">Confirm</button>
  </div>
</template>

<script>
export default {
  name: "session-manage",
  data() {
    return {
      datasetNames: null,
      datasetSelected: null
    };
  },
  mounted() {
    this.getAllDatasetNames();
  },
  methods: {
    getAllDatasetNames() {
      this.$socket.emit("getAllDatasetNamesRequest");
    },
    getDataset() {
      this.$socket.emit("getDataset", this.datasetSelected);
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