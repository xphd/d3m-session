const fs = require("fs");

const appRootPath = require("app-root-path");
const datasetsPath = appRootPath + "/static/local_testing_data/";

function getAllDatasetNames() {
  let datasetNames = fs.readdirSync(datasetsPath);
  return datasetNames;
}

module.exports = getAllDatasetNames;
