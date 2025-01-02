import { Patients } from "../types/global";
import { patientsData } from "./data";

export const getData = (): Promise<Patients[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(patientsData);
    }, 1);
  });
};
