import { useState } from "react";
import { usePatients } from "../../../hooks/usePatients";
import { PatientDetails } from "./PatientDetails";

export const ListPatients = () => {
  const { patients } = usePatients();

  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="grid">
      {patients &&
        patients.map((patient) => (
          <div className="cell" key={patient.id}>
            <h3>{patient.name}</h3>
            <img src={patient.photo} alt={patient.name} />
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
