const appRootPath = require("app-root-path");

const Dataset = require(appRootPath + "/Session/Dataset.js");

const datasetsPath = appRootPath + "/static/local_testing_data/";

function setDataset(session, socket, datasetSelected) {
  let datasetPath = datasetsPath + datasetSelected;
  let dataset = new Dataset(datasetPath);
  let herald = session.getHerald();
  herald.setDataset(dataset);
}

module.exports = setDataset;
