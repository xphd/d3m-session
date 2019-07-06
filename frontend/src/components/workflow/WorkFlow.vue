<template>
  <div>
    <p>{{value}}</p>
    <button @click="addOne()">Add One</button>
    <h1>Work Flow</h1>
    <Task0 />
    <hr />
    <Task1 />
    <hr />
    <Task2 />
  </div>
</template>

<script>
import Task0 from "./Task0.vue";
import Task1 from "./Task1.vue";
import Task2 from "./Task2.vue";
export default {
  name: "work-flow",
  data() {
    return {
      // value: this.$store.state.value
    };
  },
  computed: {
    value() {
      return this.$store.state.value;
    }
  },
  components: {
    Task0,
    Task1,
    Task2
  },
  methods: {
    addOne() {
      this.$socket.emit("addOne", this.value);
    }
  },
  sockets: {
    addedOne(value) {
      console.log(value);
      this.$store.state.value = value;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>