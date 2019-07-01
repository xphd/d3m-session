<template>
  <div>
    <h1>Session Manage</h1>
    <button @click="createHerald()">Create Herald</button>
    <input v-model="datasetSelected" />
    <li v-for="name in datasetNames" :key="name">
      <input type="radio" :value="name" v-model="datasetSelected" />
      {{name}}
    </li>
    <button @click="getAllHeralds()">Get All Heralds</button>

    <li v-for="herald in heraldsList" :key="herald.id">
      <input type="radio" :value="herald.id" v-model="heraldIdSelected" />
      {{herald.id}}
      <br />
      {{herald.dataset}}
      <br />
      {{herald.problem}}
    </li>
    <button @click="readHerald()">Read Herald</button>
    <button @click="deleteHerald()">Delete Hreald</button>
  </div>
</template>

<script>
export default {
  name: "session-manage",
  data() {
    return {
      datasetNames: null,
      datasetSelected: null,
      heraldsMap: new Map(),
      heraldsList: null,
      heraldIdSelected: null
    };
  },
  mounted() {
    this.getAllDatasetNames();
  },
  methods: {
    deleteHerald() {
      this.$socket.emit("deleteHerald", this.heraldIdSelected);
      this.$socket.emit("getAllHeraldsRequest");
    },
    getAllHeralds() {
      this.$socket.emit("getAllHeraldsRequest");
    },
    createHerald() {
      this.$socket.emit("createHerald", this.datasetSelected);
    },
    getAllDatasetNames() {
      this.$socket.emit("getAllDatasetNamesRequest");
    }
  },
  sockets: {
    getAllHeraldsResponse(heraldsList) {
      this.heraldsList = heraldsList;
      heraldsList.forEach(herald => {
        let id = herald.id;
        this.heraldsMap.set(id, herald);
      });
    },

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