import React from "react";
import { Routes, Route } from "react-router-dom";
import CalculatorIBU from "./pages/CalculatorIBU";
import Login from "./pages/Login";
import Registration from "./pages/Registration";


function AppRouter() {
  return (
    <Routes>
      <Route path="/calc" element={<CalculatorIBU />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/*" element={<CalculatorIBU />} />
    </Routes>
  );
}

export default AppRouter;
