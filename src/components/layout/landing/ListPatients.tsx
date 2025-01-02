import { useState } from "react";
import { usePatients } from "../../../hooks/usePatients";
import { PatientDetails } from "./PatientDetails";
import femalePhoto from "../../../assets/image/corporate-user-icon-female.svg";
import malePhoto from "../../../assets/image/corporate-user-icon.svg";

export const ListPatients = () => {
  const { patients } = usePatients();

  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="columns is-multiline mx-1 mt-2">
      {patients &&
        patients.map((patient) => (
          <div className="column is-one-third" key={patient.id}>
            <div
              className="card has-background-light is-flex is-flex-direction-column"
              style={{ minHeight: "320px", maxHeight: "320px" }}
            >
              <div className="card-content is-flex is-flex-direction-column is-justify-content-space-between">
                <div>
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          src={
                            patient.medicalHistory?.gender === "Masculino"
                              ? malePhoto
                              : femalePhoto
                          }
                          alt={patient.name}
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4 has-text-primary">
                        {patient.name}
                      </p>
                      <p className="subtitle is-6 has-text-grey-dark">
                        Edad: {patient.age}
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <p className="has-text-info">
                      <strong className="has-text-info">Diagnóstico:</strong>{" "}
                      {patient.diagnostic}
                    </p>
                  </div>
                </div>
                <div className="button-content">
                  <button
                    className="button is-primary is-fullwidth"
                    onClick={() => {
                      setId(patient.id);
                      setOpen(true);
                    }}
                  >
                    Ver mas detalles
                  </button>
                </div>
              </div>
              {id === patient.id && (
                <PatientDetails
                  patients={patient}
                  open={open}
                  setOpen={setOpen}
                />
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
