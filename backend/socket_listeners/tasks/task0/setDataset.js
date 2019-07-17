const appRootPath = require("app-root-path");

const Dataset = require(appRootPath + "/Session/Dataset.js");

const datasetsPath = appRootPath + "/static/local_testing_data/";
// const datasetsPath = "/home/cong/datasets/seed_datasets_current/";
function setDataset(session, datasetSelected) {
  let datasetPath =
    datasetsPath + datasetSelected + "/" + datasetSelected + "_dataset";
  let currentDataset = session.getCurrentDataset();
  if (currentDataset) {
    let currentDatasetPath = currentDataset.getDatasetPath();
    if (datasetPath == currentDatasetPath) {
      // do nothing ?
    } else {
      let dataset = new Dataset(
        datasetsPath + datasetSelected,
        datasetSelected
      );
      session.setCurrentDataset(dataset);
    }
  } else {
    let dataset = new Dataset(datasetsPath + datasetSelected, datasetSelected);
    session.setCurrentDataset(dataset);
  }
}

module.exports = setDataset;
