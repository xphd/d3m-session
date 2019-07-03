<template>
  <div>
    <h1>Heralds Overview</h1>
    <li v-for="name in heralds" :key="name">
      <input type="radio" :value="name" v-model="heraldSelected" />
      {{name}}
    </li>
    <button @click="viewHerald()">ViewHerald()</button>
  </div>
</template>

<script>
export default {
  name: "heralds-overview",
  data() {
    return {
      heralds: ["herald0", "herald1"]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>