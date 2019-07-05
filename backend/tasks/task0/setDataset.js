const appRootPath = require("app-root-path");

const Dataset = require(appRootPath + "/Session/Dataset.js");

const datasetsPath = appRootPath + "/static/local_testing_data/";

function setDataset(session, datasetSelected) {
  let datasetPath =
    datasetsPath + datasetSelected + "/" + datasetSelected + "_dataset";
  let dataset = new Dataset(datasetPath);
  // let herald = session.getHerald();
  // herald.setDataset(dataset);
  session.setDataset(dataset);
}

module.exports = setDataset;
