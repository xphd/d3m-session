import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 10,
    //
    datasetNames: [],
    datasetAugNames: [],
    datasetSelected: null,
    datasetConfirmed: false,
    //
    problemPaths: null,
    preExistedProblemPath: null,
    problemPathSelected: null,
    //
    heralds: [],
    heraldIdSelected: null
  },
  getters: {
    getValue: state => id => {
      return id + state.value;
    }
  },
  mutations: {
    setDatasetNames(state, value) {
      state.datasetNames = value;
    },
    setDatasetAugNames(state, value) {
      state.datasetAugNames = value;
    },
    setDatasetSelected(state, value) {
      state.datasetSelected = value;
    },
    setDatasetConfirmed(state, value) {
      state.datasetConfirmed = value;
    },
    //
    setProblemsPaths(state, value) {
      state.problemPaths = value;
    },
    setPreExistedProblemPath(state, value) {
      state.preExistedProblemPath = value;
    },
    setProblemPathSelected(state, value) {
      state.problemPathSelected = value;
    },
    //
    setHeraldIdSelected(state,value){
      state.heraldIdSelected=value;
    }
  }
});
