import React from "react";
import { DetailsProps } from "./PatientDetails";

export const TableDetails: React.FC<DetailsProps> = ({ patients }) => {
  const normalizeText = (value: string[]): string => {
    return value.map((item) => item).join(", ");
  };

  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <tbody>
          <tr>
            <td>Fecha de nacimiento: {patients?.medicalHistory?.dob}</td>
            <td>Genero: {patients?.medicalHistory?.gender}</td>
            <td>Alergias: {patients?.medicalHistory?.allergies}</td>
          </tr>

          <tr>
            <td>Condiciones: {patients?.medicalHistory?.conditions}</td>
            <td colSpan={2}>
              Medicamentos: {patients?.medicalHistory?.medications}
            </td>
          </tr>

          <tr>
            <td>Altura: {patients?.medicalHistory?.height}</td>
            <td>Peso: {patients?.medicalHistory?.weight}</td>
            <td>Tipo de sangre: {patients?.medicalHistory?.bloodType}</td>
          </tr>

          <tr>
            <td colSpan={3}>DATOS CONCACTO DE EMERGENCIA</td>
          </tr>

          <tr>
            <td>Nombre: {patients?.medicalHistory?.emergencyContact?.name}</td>
            <td>
              Relación: {patients?.medicalHistory?.emergencyContact?.relation}
            </td>
            <td>
              Teléfono: {patients?.medicalHistory?.emergencyContact?.phone}
            </td>
          </tr>

          <tr>
            <td colSpan={3}>
              Vacunas: {normalizeText(patients?.medicalHistory?.vaccines)}
            </td>
          </tr>

          <tr>
            <td>
              Examenes recientes:{" "}
              {normalizeText(patients?.medicalHistory?.recentTests)}
            </td>
            <td colSpan={2}>
              Fecha ultima visita: {patients?.medicalHistory?.lastVisit}
            </td>
          </tr>

          <tr>
            <td colSpan={3}>
              Observaciones: {patients?.medicalHistory?.doctorNotes}
            </td>
          </tr>

          <tr>
            <td colSpan={3}>ESTILOS DE VIDA</td>
          </tr>

          <tr>
            <td>Fumador</td>
            <td colSpan={2}>{patients?.medicalHistory?.lifestyle?.smoking}</td>
          </tr>

          <tr>
            <td>Bebe alcohol</td>
            <td colSpan={2}>{patients?.medicalHistory?.lifestyle?.alcohol}</td>
          </tr>

          <tr>
            <td>Realiza ejercicio</td>
            <td colSpan={2}>{patients?.medicalHistory?.lifestyle?.exercise}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
