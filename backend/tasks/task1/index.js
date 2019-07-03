const appRootPath = require("app-root-path");

const getPreExistedProblemPath = require("./getPreExistedProblemPath");

const setProblem = require("./setProblem");

function task1_set(session, socket) {
  // setProblem(session, socket, problemSelected);

  socket.on("getPreExistedProblemPathRequest", () => {
    let preExistedProblemPath = getPreExistedProblemPath(session);
    console.log("preExistedProblemPath", preExistedProblemPath);
    socket.emit("getPreExistedProblemPathResponse", preExistedProblemPath);
  });

  socket.on("getPreExistedProblemPathRequest", () => {});

  socket.on("setProblem", problemPathSelected => {
    setProblem(session, socket, problemPathSelected);
    // socket.emit()
  });
}

module.exports.set = task1_set;
