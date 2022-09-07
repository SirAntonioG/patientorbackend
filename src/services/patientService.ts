/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();

import patients from '../../data/patients';
import { NewPatientEntry, NonSensitivePatientEntry, Patient } from '../types';

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

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatientEntry = {
    id: id,
    ...entry,
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatientEntries,
  addPatient,
  getNonSensitivePatientEntries,
};
