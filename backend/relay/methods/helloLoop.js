const proto = require("../proto.js");

const fs = require("fs");
const fse = require("fs-extra");

const appRootPath = require("app-root-path");

function helloLoop(herald) {
  console.log("helloLoop begin");
  if (herald.isRequest) {
    let REQUESTS_PATH =
      appRootPath + "/output/herald_" + herald.getId() + "/requests";
    let RESPONSES_PATH =
      appRootPath + "/output/herald_" + herald.getId() + "/responses";

    herald.REQUESTS_PATH = REQUESTS_PATH;
    herald.RESPONSES_PATH = RESPONSES_PATH;

    let pathPrefix = herald.REQUESTS_PATH;
    if (fs.existsSync(pathPrefix)) {
      console.log("Remove old request folder!");
      fse.removeSync(pathPrefix);
    }
    console.log("Create new request folder!!");
    fs.mkdirSync(pathPrefix);
  }

  if (herald.isResponse) {
    let pathPrefix = herald.RESPONSES_PATH;
    if (fs.existsSync(pathPrefix)) {
      console.log("Remove old responses folder!");
      fse.removeSync(pathPrefix);
    }
    console.log("Create new responses folder!!");
    fs.mkdirSync(pathPrefix);
  }
  let request = new proto.HelloRequest();
  let waiting = false;
  let promise = new Promise((fulfill, reject) => {
    setInterval(() => {
      if (waiting || herald.isConnected) {
        return;
      }
      waiting = true;
      let client = herald.getClient();
      client.Hello(request, (err, response) => {
        if (err) {
          console.log("Error!Hello", err);
          herald.isConnected = false;
          waiting = false;
          // we do not reject here, because ta2 can becaome available at some point
          // reject(err);
        } else {
          console.log("Success!Hello");
          herald.isConnected = true;
          herald.ta2Ident = response;
          console.log("response");
          fulfill(herald);

          // Added by Alex, for the purpose of Pipeline Visulization
          if (herald.isResponse) {
            let pathPrefix = herald.RESPONSES_PATH;
            let pathMid = "helloResponse";
            let pathAffix = ".json";
            let path = pathPrefix + pathMid + pathAffix;
            let responseStr = JSON.stringify(response);
            fs.writeFileSync(path, responseStr);
          }
        }
      });
    }, 10000);
  });
  // let promise = new Promise(fun);
  return promise;
}

module.exports = helloLoop;
