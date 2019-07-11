function deleteHerald(session, heraldId) {
  const heraldsMap = session.getHeraldsMap();
  if (heraldsMap) {
    heraldsMap.delete(heraldId);
    console.log("Herald deleted", heraldId);
  }
}

module.exports = deleteHerald;
