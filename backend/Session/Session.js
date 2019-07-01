// import Dataset from "./Dataset.js";
// import Problem from "./Problem.js";

class Session {
  constructor(devMode = false) {
    this.devMode = devMode;
    console.log("this is session constructor", this.devMode);
    // * callbacks:
    this.datasetCallbacks = [];
    // * state objects
    // this.dataset = null;
    // this.problem = null;

    // current herald
    this.herald = null;

    // this is new.
    this.heralds = null; // new Map()
    this.heraldId = 0; // alse as counter for heralds

    // are we running in development mode (without a ta2)
    // this.devMode = false;

    // configPath looks like "shared/static/config_files/dev_mode/example_dev_regression_config.json"
    // legacy, compatible for old version
    this.config = null;
  }

  //* callbacks:
  // datasetCallbacks = [];
  //* state objects
  // dataset = null;
  // problem = null;
  // are we running in development mode (without a ta2)
  // devMode = false;

  // getters
  // getDataset() {
  //   return this.herald.getDataset();
  // }

  // getProblem() {
  //   return this.herald.getProblem();
  // }

  getHerald() {
    return this.herald;
  }

  getHeralds() {
    return this.heralds;
  }

  // setters
  // setDataset(dataset) {
  //   // try {
  //   this.dataset = dataset;
  //   // this.handleDatasetChange();
  //   // } catch {
  //   //   console.log("WARNING: setting dataset to 'null'");
  //   //   if (this.dataset) {
  //   //     this.dataset = null;
  //   //     this.handleDatasetChange();
  //   //   }
  //   // }
  // }

  // setProblem(problem) {
  //   this.problem = problem;
  // }

  setHerald(herald) {
    this.herald = herald;
  }

  /**
  all the methods for registering and handling callbacks (observer pattern)
  **/
  registerDatasetUpdates(f) {
    this.datasetCallbacks.push(f);
    if (this.dataset) {
      process.nextTick(() => f(this.dataset));
    }
  }

  handleDatasetChange() {
    this.datasetCallbacks.forEach(f => process.nextTick(() => f(this.dataset)));
  }
}

module.exports = Session;
