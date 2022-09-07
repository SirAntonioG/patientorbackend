export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export type NonSensitiveDiagnoseEntry = Omit<Diagnose, "latin">;
