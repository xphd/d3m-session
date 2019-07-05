<template>
  <div>
    <h1>Heralds Overview</h1>
    <li v-for="name in heralds" :key="name">
      <input type="radio" :value="name" v-model="heraldSelected" />
      {{name}}
    </li>
    <button @click="deleteHerald()">Delete herald</button>
    <button @click="readHerald()">Read Herald</button>
    <!-- <button @click="viewHerald()">ViewHerald()</button> -->
  </div>
</template>

<script>
export default {
  name: "heralds-overview",
  data() {
    return {
      heralds: [],
      heraldIdSelected: null
    };
  },
  methods: {
    getAllHeralds() {
      socket.emit("getAllHeraldsRequest");
    },
    deleteHerald() {
      socket.emit("deleteHeraldRequest", heraldIdSelected);
    },
    readHerald() {}
  },
  sockets: {
    setProblemRequest() {
      this.$socket.emit("createHeraldRequest");
    },
    createHeraldResponse(heraldId) {
      this.heralds.push(heraldId);
      this.heraldIdSelected = heraldId;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>