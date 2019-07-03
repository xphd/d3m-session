<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <HeraldsOverview />
        </div>
        <div class="col-8">
          <WorkFlow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeraldsOverview from "./components/heraldsoverview/HeraldsOverview.vue";
import WorkFlow from "./components/workflow/WorkFlow.vue";
export default {
  name: "app",
  components: {
    HeraldsOverview,
    WorkFlow
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
