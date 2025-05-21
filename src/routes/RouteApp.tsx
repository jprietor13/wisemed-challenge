import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Layout } from "../components/layout/Layout";

export const RouteApp = () => {
  return (
    <BrowserRouter basename="/patient-card">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};
