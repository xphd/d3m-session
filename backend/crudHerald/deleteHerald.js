function deleteHerald(session, socket, heraldId) {
  const heralds = session.getHeralds();
  if (heralds) {
    heralds.delete(heraldId);
    console.log("Herald deleted", heraldId);
  }
}

module.exports = deleteHerald;
