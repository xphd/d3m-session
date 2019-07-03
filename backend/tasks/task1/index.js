const appRootPath = require("app-root-path");

const getPreExistedProblem = require("./getPreExistedProblem");
const setProblem = require("./setProblem");

function task1_set(session, socket) {
  // setProblem(session, socket, problemSelected);

  socket.on("getPreExistedProblemRequest", () => {
    let preExistedProblemPath = getPreExistedProblem(session);
    console.log("preExistedProblemPath", preExistedProblemPath);
    socket.emit("getPreExistedProblemResponse", preExistedProblemPath);
  });
}

module.exports.set = task1_set;
