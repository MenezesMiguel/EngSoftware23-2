import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import History from "../src/pages/History";
import Home from "../src/pages/Home";

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
