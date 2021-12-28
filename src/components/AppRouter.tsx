import React from "react";
import { Routes, Route } from "react-router-dom";
import CalculatorIBU from "./pages/CalculatorIBU";
import Login from "./pages/Login";

function AppRouter() {
  return (
    <Routes>
      <Route path="/calc" element={<CalculatorIBU />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Login />} />
      <Route path="/*" element={<CalculatorIBU />} />
    </Routes>
  );
}

export default AppRouter;
