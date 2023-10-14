import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "./pages/Home";
import History from "./pages/history";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
