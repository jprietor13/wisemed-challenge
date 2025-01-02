import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const navigate = useNavigate()  
  const formik = useFormik({
    initialValues: {
      user: "",
      pass: "",
    },
    validationSchema: Yup.object({
      user: Yup.string()
        .required("El nombre de usuario es obligatorio")
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
      pass: Yup.string()
        .required("La contraseña es obligatoria")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
    }),
    onSubmit: (values) => {
      if (values) {
        localStorage.setItem("userName", JSON.stringify(values.user));
        navigate("/home")
      }
    },
  });

  return (
    <div
      className="container is-flex is-justify-content-center is-align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="box" style={{ width: "300px" }}>
        <h1 className="title has-text-centered">Iniciar sesión</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="field">
            <label className="label">Nombre de usuario</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Usuario"
                name="user"
                value={formik.values.user}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.user && formik.errors.user ? (
              <p className="help is-danger">{formik.errors.user}</p>
            ) : null}
          </div>

          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input
                type="password"
                className="input"
                placeholder="Contraseña"
                name="pass"
                value={formik.values.pass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.pass && formik.errors.pass ? (
              <p className="help is-danger">{formik.errors.pass}</p>
            ) : null}
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
