export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}
export type NonSensitiveDiagnoseEntry = Omit<Diagnose, 'latin'>;

export enum Gender {
  Male = 'male',
  Female = 'female',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn?: string;
  gender: Gender;
  occupation: string;
  entries?: Entry[];
}
export type NonSensitivePatientEntry = Omit<Patient, 'ssn'>;
export type NewPatientEntry = Omit<Patient, 'id' | 'entries'>;
export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;
