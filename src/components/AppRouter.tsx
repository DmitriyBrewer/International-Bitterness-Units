import React from "react";
import { Routes, Route } from "react-router-dom";
import CalculatorIBU from "./pages/CalculatorIBU";

function AppRouter() {
  return (
    <Routes>
      <Route path="/calc" element={<CalculatorIBU />} />
      <Route path="/*" element={<CalculatorIBU />} />
    </Routes>
  );
}

export default AppRouter;
