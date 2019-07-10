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
const session = new Session();

const tasks = require("./tasks");
const crudHerald = require("./crudHerald");

serverSocket.on("connection", socket => {
  console.log("Server: connected!");

  tasks.set(session, socket);
  crudHerald.set(session, socket);
});
