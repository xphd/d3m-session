//  This function translate is used to deal tranlate problemObj into what compatible with problemDoc.json
//  One of differences is that problemObj doesn't have "about" files, while problemDoc.json does
//  This is neither a rule nor a fact, but just a provisional way to deal with the discrepancy between
//  problemObj sent from frontend and problemDoc.json given

module.exports = translate;

function translate(problemObj) {
  let problemSchema = null;
  if (problemObj.about) {
    // if there exist "about" field in "problmeObj", then assumemedly it is from problemDoc.json
    // in this case, just return it
    problemSchema = problemObj;
  } else {
    let problemSchemaTemplate = getProblemSchemaTemplate();
    // do translate, aka modify problemSchemaTemplate
    console.log("use problemObj");
  }
  return problemSchema;
}

function getProblemSchemaTemplate() {
  let problemSchemaTemplate = {
    about: {
      problemID: "", // "185_baseball_problem"
      problemName: "", //"baseball_problem",
      taskType: "", // "classification"
      taskSubType: "", // "multiClass"
      problemVersion: "2.0",
      problemSchemaVersion: "3.2.0"
    },
    inputs: {
      data: [
        {
          datasetID: "", // "185_baseball_dataset",
          targets: [
            {
              targetIndex: 0, // must change
              resID: "learningData", // must change
              colIndex: 18, // must change
              colName: "Hall_of_Fame" // must change
            }
          ]
        }
      ],
      dataSplits: {
        method: "holdOut",
        testSize: 0.2,
        stratified: true,
        numRepeats: 0,
        randomSeed: 42,
        splitsFile: "dataSplits.csv"
      },
      performanceMetrics: [
        {
          metric: "f1Macro"
        }
      ]
    },
    expectedOutputs: {
      predictionsFile: "predictions.csv"
    }
  };
  return problemSchemaTemplate;
}
