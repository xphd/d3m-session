// const Dataset = require("../Session/Dataset.js");
// const Problem = require("../Session/Problem.js");
const Herald = require("../Session/Herald.js");

// herald is characterized by a dataset and a problem,
// for now, both dataest and problem are given by seed dataset.

function createHerald(session) {
  // check for dataset path and problem path
  // if both are the same
  // herald should not be created?

  let heraldId = session.heraldId;
  let herald = new Herald(heraldId);
  herald.setDataset(session.getDataset());
  herald.setProblem(session.getProblem());
  session.setHerald(herald);

  // herald.setId(heraldId);
  session.heralds.set(heraldId, herald);

  // update id
  session.heraldId = heraldId + 1;
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
//   session.setHerald(herald);

//   session.heralds.set(newId, herald);

//   console.log("Herald created");
// }

module.exports = createHerald;