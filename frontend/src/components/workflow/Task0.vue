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

    <button @click="setDataset()" :disabled="datasetConfirmed">Confirm Dataset</button>
    <button @click="setDatasetConfirmed(false)" :disabled="!datasetConfirmed">Reset</button>
  </div>
</template>

<script>
export default {
  name: "task-0",
  // data() {
  //   return {
  //     datasetNames: null,
  //     datasetAugNames: ["augData_1", "augData_2"],
  //     datasetSelected: null,
  //     confirmed: false
  //   };
  // },
  computed: {
    datasetNames: {
      get() {
        return this.$store.state.datasetNames;
      },
      set(value) {
        this.$store.commit("setDatasetNames", value);
      }
    },
    datasetAugNames: {
      get() {
        return this.$store.state.datasetAugNames;
      },
      set(value) {
        this.$store.commit("setDatasetAugNames", value);
      }
    },
    datasetSelected: {
      get() {
        return this.$store.state.datasetSelected;
      },
      set(value) {
        this.$store.commit("setDatasetSelected", value);
      }
    },
    datasetConfirmed: {
      get() {
        return this.$store.state.datasetConfirmed;
      },
      set(value) {
        this.$store.commit("setDatasetConfirmed", value);
      }
    }

    // datasetNames() {
    //   return this.$store.state.datasetNames;
    // },
    // datasetAugNames() {
    //   return this.$store.state.datasetAugNames;
    // },
    // datasetSelected() {
    //   return this.$store.state.datasetSelected;
    // },
    // confirmed() {
    //   return this.$store.state.datasetConfirmed;
    // }
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
      if (this.datasetSelected) {
        this.$socket.emit("setDatasetRequest", this.datasetSelected);
        this.setDatasetConfirmed(true);
        // this.$socket.commit("setDatasetConfirmed", true);
        // this.confirmed = true;
      } else {
        // ask user to select dataset
      }
    },
    setDatasetConfirmed(value) {
      this.$store.commit("setDatasetConfirmed", value);
    }
  },
  sockets: {
    getAllDatasetNamesResponse(datasetNames) {
      if (datasetNames) {
        this.$store.commit("setDatasetNames", datasetNames);
        this.$store.commit("setDatasetSelected", datasetNames[0]);
        // this.$store.state.datasetNames = datasetNames;
        // this.$store.state.datasetSelected = datasetNames[0];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>