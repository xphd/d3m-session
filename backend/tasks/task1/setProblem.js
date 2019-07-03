const appRootPath = require("app-root-path");

const Problem = require(appRootPath + "/Session/Problem.js");

const datasetsPath = appRootPath + "/static/local_testing_data/";

function setproblem(session, socket, problemSelected) {
  let problemPath = datasetsPath + problemSelected;
  let problem = new Problem(problemPath);
  let herald = session.getHerald();
  herald.setproblem(problem);
}

module.exports = setproblem;
