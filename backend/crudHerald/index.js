const createHerald = require("./createHerald.js");
const deleteHerald = require("./deleteHerald.js");
const readHerald = require("./readHerald.js");

module.exports.set = function(session, socket) {
  socket.on("createHeraldRequest", () => {
    let heraldId = createHerald(session);
    socket.emit("createHeraldResponse", heraldId);
  });

  socket.on("deleteHeraldRequest", heraldIdSelected => {
    deleteHerald(session, socket, heraldIdSelected);
  });
};
