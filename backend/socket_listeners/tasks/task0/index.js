// task 0
const appRootPath = require("app-root-path");
// const Herald = require(appRootPath + "/Session/Herald.js");

const getAllDatasetNames = require("./getAllDatasetNames.js");
const setDataset = require("./setDataset.js");

function task0_set(session, socket) {
  socket.on("getAllDatasetNamesRequest", () => {
    let allDatasetsPath = appRootPath + "/static/local_testing_data/";
    // let allDatasetsPath = "/home/cong/datasets/seed_datasets_current/";
    let allDatasetNames = getAllDatasetNames(allDatasetsPath);
    socket.emit("getAllDatasetNamesResponse", allDatasetNames);
  });

  socket.on("setDatasetRequest", datasetSelected => {
    console.log("task0: setDatasetRequest");
    // const herald = new Herald();
    // session.setCurrentHerald(herald);
    setDataset(session, datasetSelected);
    socket.emit("setDatasetResponse"); // go to Task1.vue
  });
}

module.exports.set = task0_set;
