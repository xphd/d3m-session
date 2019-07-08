function readHerald(session, heraldIdSelected) {
  let heralds = session.getHeralds();
  let herald = heralds.get(heraldIdSelected);
  let dataset = herald.getDataset();
  let problem = herald.getProblem();
  session.setHerald(herald);
  session.setDataset(dataset);
  session.setProblem(problem);

  let heraldObj = {
    heraldIdSelected: herald.getId(),
    datasetSelected: dataset.getDatasetName(),
    problemPathSelected: problem.getProblemPath()
  };
  return heraldObj;
}
module.exports = readHerald;
