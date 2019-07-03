// task 0

const appRootPath = require("app-root-path");

const Herald = require(appRootPath + "/Session/Herald.js");

const getAllDatasetNames = require("./getAllDatasetNames.js");
const setDataset = require("./setDataset.js");

function task0_set(session, socket) {
  socket.on("getAllDatasetNamesRequest", () => {
    console.log("task0: getAllDatasetNames");
    let datasetNames = getAllDatasetNames();
    socket.emit("getAllDatasetNamesResponse", datasetNames);
  });

  socket.on("setDatasetRequest", datasetSelected => {
    console.log("task0: setDatasetRequest");
    const herald = new Herald();
    session.setHerald(herald);
    setDataset(session, socket, datasetSelected);
  });
}

module.exports.set = task0_set;
