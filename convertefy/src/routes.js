import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import History from "./pages/Historico";
import Cadastro from "./pages/Cadastro";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<History />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
