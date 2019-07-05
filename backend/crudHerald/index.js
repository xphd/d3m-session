const createHerald = require("./createHerald.js");
const deleteHerald = require("./deleteHerald.js");
const readHerald = require("./readHerald.js");

module.exports.set = function(session, socket) {
  // for dev purpose, maybe removed later
  socket.on("getAllHeraldsRequest", () => {
    let heraldsMap = session.getHeralds();
    let heraldIds = Array.from(heraldsMap.keys());
    socket.emit("getAllHeraldsResponse", heraldIds);
  });
  //

  socket.on("createHeraldRequest", () => {
    let heraldId = createHerald(session);
    socket.emit("createHeraldResponse", heraldId);
  });

  socket.on("deleteHeraldRequest", heraldIdSelected => {
    console.log("deleteHeraldRequest received:", heraldIdSelected);
    deleteHerald(session, heraldIdSelected);
    socket.emit("deleteHeraldResponse", heraldIdSelected);
  });
};
