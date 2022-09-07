import diagnoses from "../../data/diagnoses";

import { NonSensitiveDiagnoseEntry, Diagnose } from "../types";

const getDiagnoseEntries = (): Array<Diagnose> => {
  return diagnoses;
};

const getNonSensitiveEntries = (): NonSensitiveDiagnoseEntry[] => {
  return diagnoses.map(({ code, name }) => ({ code, name }));
};

const addDiagnose = () => {
  return null;
};

export default {
  getDiagnoseEntries,
  addDiagnose,
  getNonSensitiveEntries,
};
