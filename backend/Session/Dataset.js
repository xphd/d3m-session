const fs = require("fs");

class Dataset {
  // FIXME: constructor should take a path instead of the old schema
  constructor(datasetPath) {
    this.datasetPath = datasetPath;
    this.datasetSchema = require(datasetPath + "/datasetDoc.json");
    console.log(this.datasetSchema.about.datasetID);
    this.learningDataFile = datasetPath + "/tables/learningData.csv";

    //
    this.allGeneratedProblemPaths = [];
    //

    //
    // from seed OR datamart?
    //

    // now get schema from datasetPath
    // let files = fs
    //   .readdirSync(datasetPath)
    //   .filter(filename => filename.toLowerCase().endsWith("_dataset"));
    // if (files.length != 1) {
    //   console.log(
    //     "None or more than one folder that ends in '_dataset'; can't find schema!"
    //   );
    //   // this.schema = null;
    // } else {
    //   let datasetPath = datasetPath;
    //   if (!datasetPath.endsWith("/")) {
    //     datasetPath = datasetPath + "/";
    //   }
    //   datasetPath = datasetPath + files[0];
    //   this.datasetSchema = require(datasetPath + "/datasetDoc.json");
    //   this.learningDataFile = datasetPath + "/tables/learningData.csv";
    // }
  }

  getDatasetPath() {
    return this.datasetPath;
  }

  getDatasetSchema() {
    return this.datasetSchema;
  }

  getLearningDataFile() {
    return this.learningDataFile;
  }
}

module.exports = Dataset;
