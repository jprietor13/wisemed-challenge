import { Dispatch, SetStateAction } from "react";
import { Patients } from "../../../types/global";
import { TableDetails } from "./TableDetails";

export type DetailsProps = {
  patients: Patients;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export const PatientDetails: React.FC<DetailsProps> = ({
  patients,
  open,
  setOpen = () => {},
}) => {
  const handleClose = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <>
      <div className={`modal ${open ? "is-active" : ""}`}>
        <div className="modal-background" onClick={handleClose}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title has-text-centered">
              <strong>Ficha clinica de {patients.name}</strong>
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={handleClose}
            ></button>
          </header>
          <section className="modal-card-body">
            <TableDetails patients={patients} />
          </section>
          <div className="modal-card-foot">
            <button
              className="button is-primary is-fullwidth"
              onClick={handleClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
