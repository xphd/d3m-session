const setProblem = require("./setProblem");

function task1_set(session, socket) {
  setProblem(session, socket, problemSelected);

  socket.on("", () => {});
}

module.exports.set = task1_set;
