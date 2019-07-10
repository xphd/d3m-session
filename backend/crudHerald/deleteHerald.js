function deleteHerald(session, heraldId) {
  const heralds = session.getHeraldsMap();
  if (heralds) {
    heralds.delete(heraldId);
    console.log("Herald deleted", heraldId);
  }
}

module.exports = deleteHerald;
