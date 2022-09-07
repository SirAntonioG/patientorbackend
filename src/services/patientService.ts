import patients from "../../data/patients";

import { NonSensitivePatientEntry, Patient } from "../types";

const getPatientEntries = (): Array<Patient> => {
  return patients;
};

const getNonSensitivePatientEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = () => {
  return null;
};

export default {
  getPatientEntries,
  addPatient,
  getNonSensitivePatientEntries,
};
