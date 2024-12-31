import { useState } from "react";
import { usePatients } from "../../../hooks/usePatients";
import { PatientDetails } from "./PatientDetails";
import malePhoto from "../../../assets/image/corporate-user-icon-female.svg";
import femalePhto from "../../../assets/image/corporate-user-icon.svg";

export const ListPatients = () => {
  const { patients } = usePatients();

  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="grid">
      {patients &&
        patients.map((patient) => (
          <div className="cell" key={patient.id}>
            <h1>{patient.name}</h1>
            <img
              src={
                patient.medicalHistory?.gender === "Masculino"
                  ? malePhoto
                  : femalePhto
              }
              alt={patient.name}
            />
            <p>Edad: {patient.age}</p>
            <p>Diagnostico: {patient.diagnostic}</p>
            <button
              onClick={() => {
                setId(patient.id);
                setOpen(true);
              }}
            >
              Ver detalles
            </button>
            {id === patient.id && (
              <PatientDetails
                patients={patient}
                open={open}
                setOpen={setOpen}
              />
            )}
          </div>
        ))}
    </div>
  );
};
