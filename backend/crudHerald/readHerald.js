function readHerald(session, heraldIdSelected) {
  let heralds = session.getHeraldsMap();
  let herald = heralds.get(heraldIdSelected);
  let dataset = herald.getDataset();
  let problem = herald.getProblem();
  session.setCurrentHerald(herald);
  session.setCurrentDataset(dataset);
  session.setCurrentProblem(problem);

  let heraldObj = {
    heraldIdSelected: herald.getId(),
    datasetSelected: dataset.getDatasetName(),
    problemPathSelected: problem.getProblemPath()
  };
  return heraldObj;
}
module.exports = readHerald;
