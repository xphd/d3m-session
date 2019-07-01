"use strict";

const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const serverSocket = socketIO(server, { origins: "*:*" });

console.log("Server listening 9090");
server.listen(9090);

const appRootPath = require("app-root-path");
const datasetsPath = appRootPath + "/static/local_testing_data/";

const datasetNames = fs.readdirSync(datasetsPath);
// console.log(datasetsPath);

const Session = require("./Session/Session.js");
const createHerald = require("./crudHerald/createHerald.js");
const deleteHerald = require("./crudHerald/deleteHerald.js");

const session = new Session();

serverSocket.on("connection", socket => {
  console.log("Server: connected!");

  socket.on("getAllDatasetNamesRequest", () => {
    console.log("getAllDatasetNamesRequest");
    console.log(datasetNames);

    socket.emit("getAllDatasetNamesResponse", datasetNames);
    console.log("getAllDatasetNamesResponse");
  });

  socket.on("createHerald", datasetSelected => {
    console.log(datasetSelected);

    // herald is a wrapper for dataset and problem
    // once the dataset path is selected,
    // both dataset and problem are set.
    createHerald(session, datasetsPath, datasetSelected);
  });

  socket.on("getAllHeraldsRequest", () => {
    const heralds = session.getHeralds();
    let heraldsList = [];
    if (heralds) {
      heralds.forEach(herald => {
        let item = {};
        item.id = herald.getId();
        item.dataset = herald.getDataset().getDatasetPath();
        item.problem = herald.getProblem().getProblemPath();
        heraldsList.push(item);
      });
    }
    // console.log(heraldsList);
    console.log("getAllHeraldsRequest");
    socket.emit("getAllHeraldsResponse", heraldsList);
  });

  socket.on("deleteHerald", id => {
    deleteHerald(session, id);
  });
});
