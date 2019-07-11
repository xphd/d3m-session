const fs = require("fs");

const scoreSolution = require("./scoreSolution.js");

function scoreSolutions(herald) {
  // console.log("scoreSolutions called");
  let solutions = herald.getSolutions();
  let solutions_array = Array.from(solutions.values());
  let chain = Promise.resolve();
  solutions_array.forEach(solution => {
    chain = chain.then(() => {
      return scoreSolution(herald, solution);
    });
  });

  // if (props.isResponse) {
  //   // onetime response
  //   let pathPrefix = props.RESPONSES_PATH + "scoreSolutionResponses/";
  //   if (!fs.existsSync(pathPrefix)) {
  //     fs.mkdirSync(pathPrefix);
  //   }
  //   pathPrefix = props.RESPONSES_PATH + "getScoreSolutionResultsResponses/";
  //   if (!fs.existsSync(pathPrefix)) {
  //     fs.mkdirSync(pathPrefix);
  //   }
  // }

  // if (props.isRequest) {
  //   // onetime response
  //   let pathPrefix = props.REQUESTS_PATH + "scoreSolutionRequests/";
  //   if (!fs.existsSync(pathPrefix)) {
  //     fs.mkdirSync(pathPrefix);
  //   }
  //   pathPrefix = props.REQUESTS_PATH + "getScoreSolutionResultsRequests/";
  //   if (!fs.existsSync(pathPrefix)) {
  //     fs.mkdirSync(pathPrefix);
  //   }
  // }

  let promise = new Promise((fulfill, reject) => {
    let _fulfill = fulfill;
    chain
      .then(() => {
        solutions.forEach(solution => {
          let solution_id = solution.solution_id;
          if (!solution.scores) {
            console.log(
              "WARNING: solution " +
                solution_id +
                " has no scores; removing from results set"
            );
            herald.getSolutions().delete(solution_id);
          }
        });
        _fulfill(herald);
      })
      .catch(err => {
        // console.log("ERR", err);
        reject(err);
      });
  });
  return promise;
}

module.exports = scoreSolutions;
