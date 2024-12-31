export interface Patients {
  id: number;
  name: string;
  age: number;
  photo: string;
  diagnostic: string;
  medicalHistory: MedicalHistory;
}

export interface MedicalHistory {
  dob: string;
  gender: string;
  allergies: string;
  conditions: string;
  medications: string;
  height: number;
  weight: number;
  bloodType: string;
  emergencyContact: EmergencyContact;
  vaccines: string[];
  recentTests: string[];
  lastVisit: string;
  doctorNotes: string;
  lifestyle: Lifestyle;
}

export interface EmergencyContact {
  name: string;
  relation: string;
  phone: string;
}

export interface Lifestyle {
  smoking: string;
  alcohol: string;
  exercise: string;
}
