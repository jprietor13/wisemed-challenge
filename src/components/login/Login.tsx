import { useState } from "react";

export const Login = () => {
  const [data, setData] = useState({
    user: "",
    pass: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
  };

  return (
    <div
      className="container is-flex is-justify-content-center is-align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="box" style={{ width: "300px" }}>
        <h1 className="title has-text-centered">Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Nombre de usuario</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Usuario"
                name="user"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input
                type="password"
                className="input"
                placeholder="Contraseña"
                name="pass"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field is-flex is-justify-content-center">
            <button type="submit" className="button is-primary is-fullwidth">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
