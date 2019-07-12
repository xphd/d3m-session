<template>
  <div>
    <h1>Heralds Overview</h1>
    <li v-for="name in heralds" :key="name">
      <input type="radio" :value="name" v-model="heraldIdSelected" />
      {{name}}
    </li>
    <button @click="deleteHerald()">Delete herald</button>
    <button @click="readHerald()">Read Herald</button>
    <!-- <button @click="viewHerald()">ViewHerald()</button> -->

    <Task0 />
    <hr />
    <Task1 />
    <hr />
  </div>
</template>

<script>
import Task0 from "./Task0.vue";
import Task1 from "./Task1.vue";
export default {
  name: "heralds-overview",
  // data() {
  //   // return {
  //   //   heralds: [], // for now, they are nothing but ids of heralds
  //   //   heraldIdSelected: null
  //   // };
  // },
  components: {
    Task0,
    Task1
  },
  computed: {
    heralds: {
      get() {
        return this.$store.state.heralds;
      }
    },
    heraldIdSelected: {
      get() {
        return this.$store.state.heraldIdSelected;
      },
      set(value) {
        this.$store.commit("setHeraldIdSelected", value);
      }
    }
    // heralds() {
    //   return this.$store.state.heralds;
    // },
    // heraldIdSelected() {
    //   return this.$store.state.heraldIdSelected;
    // }
  },
  mounted() {
    this.$socket.emit("getAllHeraldsRequest"); // for dev purpose
  },
  methods: {
    getAllHeralds() {
      this.$socket.emit("getAllHeraldsRequest");
    },
    deleteHerald() {
      this.$socket.emit("deleteHeraldRequest", this.heraldIdSelected);
    },
    readHerald() {
      this.$socket.emit("readHeraldRequest", this.heraldIdSelected);
    }
  },
  sockets: {
    getAllHeraldsResponse(heraldIds) {
      this.$store.state.heralds = heraldIds;
    },
    setProblemResponse() {
      this.$socket.emit("createHeraldRequest");
    },
    createHeraldResponse(heraldId) {
      this.$store.state.heralds.push(heraldId);
      this.$store.state.heraldIdSelected = heraldId;
    },
    deleteHeraldResponse(heraldId) {
      console.log("Id of heralds to be deleted is:", heraldId);
      let heralds = this.$store.state.heralds;
      for (let index = 0; index < heralds.length; index++) {
        let item = heralds[index];
        if (item == heraldId) {
          heralds.splice(index, 1);
          break;
        }
      }
    },
    readHeraldResponse(heraldObj) {
      // console.log(heraldObj);
      // heraldIdSelected = heraldObj.heraldIdSelected
      let datasetSelected = heraldObj.datasetSelected;
      let problemPathSelected = heraldObj.problemPathSelected;
      // this.$store.commit("",heraldIdSelected)
      this.$store.commit("setDatasetSelected", datasetSelected);
      this.$store.commit("setProblemPathSelected", problemPathSelected);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>