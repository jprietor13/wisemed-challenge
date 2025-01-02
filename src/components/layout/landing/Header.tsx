import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const onHandleClick = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  useEffect(() => {
    const getUserName = localStorage.getItem("userName");
    if (getUserName) {
      setUserName(getUserName);
    }
  }, []);

  return (
    <div className="header-content pt-5 pb-5 is-flex is-justify-content-space-between">
      <div className="user-info">
        <span className="is-size-2 pl-4">Hola {userName}</span>
        <p className="is-size-6 pl-4">
          Esta es la lista de pacientes, puede ver la informacion mas detallada
          con el boton "Ver mas detalles".
        </p>
      </div>
      <>
        <button
          className="button is-secondary mr-4 mt-5"
          onClick={onHandleClick}
        >
          Cerrar sesión
        </button>
      </>
    </div>
  );
};
