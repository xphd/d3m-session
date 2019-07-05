const appRootPath = require("app-root-path");

const Dataset = require(appRootPath + "/Session/Dataset.js");

const datasetsPath = appRootPath + "/static/local_testing_data/";

function setDataset(session, datasetSelected) {
  let datasetPath =
    datasetsPath + datasetSelected + "/" + datasetSelected + "_dataset";
  let currentDataset = session.getDataset();
  if (currentDataset) {
    let currentDatasetPath = currentDataset.getDatasetPath();
    if (datasetPath == currentDatasetPath) {
      // do nothing ?
    } else {
      let dataset = new Dataset(datasetPath);
      session.setDataset(dataset);
    }
  } else {
    let dataset = new Dataset(datasetPath);
    session.setDataset(dataset);
  }

  // if (datasetPath == currentDatasetPath) {
  //   // do nothing ?
  // } else {
  //   let dataset = new Dataset(datasetPath);
  //   session.setDataset(dataset);
  // }

  // let herald = session.getHerald();
  // herald.setDataset(dataset);
}

module.exports = setDataset;
