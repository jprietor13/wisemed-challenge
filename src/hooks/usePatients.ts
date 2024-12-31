import { useEffect, useState } from "react";
import { Patients } from "../types/global";
import { getData } from "../services/getData";

export const usePatients = () => {
  const [patients, setPatients] = useState<Patients[]>([]);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const response: Patients[] = await getData();
        if (response) {
          setPatients(response);
        }
      } catch (err) {
        console.log("Error to load data: ", err);
      }
    };

    getPatients();
  }, []);

  return { patients };
};
