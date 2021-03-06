// const Dataset = require("../Session/Dataset.js");
// const Problem = require("../Session/Problem.js");
const appRootPath = require("app-root-path");
const Herald = require(appRootPath + "/Session/Herald.js");

// herald is characterized by a dataset and a problem,
// for now, both dataest and problem are given by seed dataset.

function createHerald(session) {
  // check for dataset path and problem path
  // if both are the same
  // herald should not be created?

  let heraldsMap = session.getHeraldsMap();

  let heraldId = Math.floor(Math.random() * 1000); //0-999
  // posible infinite loop

  while (heraldsMap.has(heraldId)) {
    heraldId = Math.floor(Math.random() * 1000); //0-999
  }
  // check if heraldId is unique

  let herald = new Herald(heraldId);
  herald.setDataset(session.getCurrentDataset());
  herald.setProblem(session.getCurrentProblem());
  // portNum = 50054
  // portRoot = "localhost:"
  // ta2_port = portRoot+portNum
  // herald.setPort(ta2_port);

  session.setCurrentHerald(herald);

  heraldsMap.set(heraldId, herald);

  return heraldId;
  // socket.emit("createHerald", heraldId);
}

// function createHerald(session, datasetsPath, datasetSelected) {
//   const datasetPath =
//     datasetsPath + datasetSelected + "/" + datasetSelected + "_dataset";
//   const problemPath =
//     datasetsPath + datasetSelected + "/" + datasetSelected + "_problem";
//   const dataset = new Dataset(datasetPath);
//   const problem = new Problem(problemPath);

//   let id = session.heraldId;
//   if (id == 0) {
//     session.heralds = new Map();
//   }
//   let newId = id + 1;
//   session.heraldId = newId;
//   const herald = new Herald(newId);

//   herald.setDataset(dataset);
//   herald.setProblem(problem);
//   session.setCurrentHerald(herald);

//   session.heralds.set(newId, herald);

//   console.log("Herald created");
// }

module.exports = createHerald;
