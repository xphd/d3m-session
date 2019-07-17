const fs = require("fs");
function getAllDatasetNames(datasetsPath) {
  console.log("task0: getAllDatasetNames");
  let allDatasetNames = fs.readdirSync(datasetsPath);
  // let allDatasetNames = [
  //   "LL0_acled_reduced",
  //   "LL1_336_MS_Geolife_transport_mode_prediction",
  //   "LL1_336_MS_Geolife_transport_mode_prediction_separate_lat_lon",
  //   "LL1_736_population_spawn",
  //   "LL1_736_population_spawn_simpler",
  //   "LL1_penn_fudan_pedestrian",
  //   "LL1_VTXC_1343_cora",
  //   "LL1_VTXC_1369_synthetic",
  //   "SEMI_1040_sylva_prior",
  //   "SEMI_1044_eye_movements",
  //   "SEMI_1053_jm1",
  //   "SEMI_1217_click_prediction_small",
  //   "SEMI_1459_artificial_characters",
  //   "SEMI_155_pokerhand",
  //   "SEMI_32_pendigits"
  // ];
  return allDatasetNames;
}
module.exports = getAllDatasetNames;
