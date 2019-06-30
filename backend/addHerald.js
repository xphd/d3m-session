const Dataset = require("./Session/Dataset.js");
const Problem = require("./Session/Problem.js");
const Herald = require("./Session/Herald.js");

// herald is characterized by a dataset and a problem,
// for now, both dataest and problem are given by seed dataset.

function addHerald(session, datasetsPath, datasetSelected) {
  const datasetPath = datasetsPath + datasetSelected + "_dataset";
  const problemPath = datasetsPath + datasetSelected + "_problem";
  const dataset = new Dataset(datasetPath);
  const problem = new Problem(problemPath);
  const herald = new Herald();
  herald.setDataset(dataset);
  herald.setProblem(problem);
  session.set(herald);
}

module.exports = addHerald;
