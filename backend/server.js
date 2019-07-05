"use strict";

const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const serverSocket = socketIO(server, { origins: "*:*" });

console.log("Server listening 9090");
server.listen(9090);

const Session = require("./Session/Session.js");
// const Herald = require("./Session/Herald.js");

// const createHerald = require("./crudHerald/createHerald.js");
// const deleteHerald = require("./crudHerald/deleteHerald.js");

const session = new Session();
session.setHeralds(new Map());

const tasks = require("./tasks");
const crudHerald = require("./curdHerald");

serverSocket.on("connection", socket => {
  console.log("Server: connected!");

  tasks.set(session, socket);
  crudHerald.set(session, socket);
  // socket.on("createHerald", datasetSelected => {
  //   console.log(datasetSelected);

  //   // herald is a wrapper for dataset and problem
  //   // once the dataset path is selected,
  //   // both dataset and problem are set.
  //   createHerald(session, datasetsPath, datasetSelected);
  // });

  // socket.on("getAllHeraldsRequest", () => {
  //   const heralds = session.getHeralds();
  //   let heraldsList = [];
  //   if (heralds) {
  //     heralds.forEach(herald => {
  //       let item = {};
  //       item.id = herald.getId();
  //       item.dataset = herald.getDataset().getDatasetPath();
  //       item.problem = herald.getProblem().getProblemPath();
  //       heraldsList.push(item);
  //     });
  //   }
  //   // console.log(heraldsList);
  //   console.log("getAllHeraldsRequest");
  //   socket.emit("getAllHeraldsResponse", heraldsList);
  // });

  // socket.on("deleteHerald", id => {
  //   deleteHerald(session, id);
  // });
});
