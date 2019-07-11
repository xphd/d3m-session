// const startTask2 = require("./startTask2.js");
const appRootPath = require("app-root-path");
const relay = require(appRootPath + "/relay");

function task2_set(session, socket) {
  // socket.on("hello");
  // socket.on("search");
  // try{
  //   let herald = session.getCurrentHerald();
  //   console.log("herald id 1:", herald.getId());
  // }
  // catch (err){
  //   console.log
  // }

  socket.on("helloSearch", () => {
    let herald = session.getCurrentHerald();
    relay.connect(herald);
    relay.helloLoop(herald).then(relay.searchSolutions);
  });

  // socket.on("getAllSolutions", () => {
  //   console.log("getAllSolutions");
  //   let solutions = herald.getAllSolutions();
  //   // let solution = console.log(Array.from(solutions.keys()));
  //   socket.emit("getAllSolutionsResponse", Array.from(solutions.keys()));
  // });

  // socket.on(
  //   "scoreSelectedSolutions",
  //   (solutionIDs_selected, metrics_selected) => {
  //     console.log("scoreSelectedSolutions");
  //     // console.log(solutionIDs_selected, metrics_selected);

  //     // let metrics = ["accuracy"];
  //     herald.getScores(solutionIDs_selected, metrics_selected);
  //   }
  // );

  // socket.on("describeSolutions", solutionIDs_selected => {
  //   console.log("describeSolutions");
  //   herald.getDescriptions(solutionIDs_selected);
  // });

  // socket.on("fitSolutions", solutionIDs_selected => {
  //   console.log("fitSolutions");
  //   herald.getFitSolutions(solutionIDs_selected);
  // });

  // socket.on("produceSolutions", solutionIDs_selected => {
  //   console.log("produceSolutions");
  //   herald.getProduceSolutions(solutionIDs_selected);
  // });

  // socket.on("exportSolutions", (exportID, rank) => {
  //   console.log("exportSolutions");
  //   console.log(exportID);
  //   console.log(rank);
  //   herald.exportSolutions(exportID, rank);
  // });
}

module.exports.set = task2_set;

// searchSolutions
// then(grpcClientWrapper.scoreSolutions)
//       .then(grpcClientWrapper.describeSolutions)
//       .then(grpcClientWrapper.fitSolutions)
//       .then(grpcClientWrapper.produceSolutions)
//       .then(grpcClientWrapper.endSearchSolutions)
