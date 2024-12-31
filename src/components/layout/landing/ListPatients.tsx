import { usePatients } from "../../../hooks/usePatients";

export const ListPatients = () => {
  const { patients } = usePatients();
  console.log("🚀 ~ ListPatients ~ patients:", patients);

  return (
    <div>
      {patients &&
        patients.map((patient) => (
          <div key={patient.id}>
            <h3>{patient.name}</h3>
            <img src={patient.photo} alt={patient.name} />
            <span>Edad: {patient.age}</span>
            <p>Diagnostico: {patient.diagnostic}</p>
          </div>
        ))}
    </div>
  );
};
