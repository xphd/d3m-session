const appRootPath = require("app-root-path");

const problem = require(appRootPath + "/Session/problem.js");

const datasetsPath = appRootPath + "/static/local_testing_data/";

function setproblem(session, socket, problemSelected) {
  let problemPath = datasetsPath + problemSelected;
  let problem = new problem(problemPath);
  let herald = session.getHerald();
  herald.setproblem(problem);
}

module.exports = setproblem;
