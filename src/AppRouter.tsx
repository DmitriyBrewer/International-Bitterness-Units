import React from "react";
import { Routes, Route, Navigate   } from "react-router-dom";
import CalculatorIBU from "./pages/CalculatorIBU/CalculatorIBU";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import About from "./pages/About";






function AppRouter() {
  return (
    <Routes>
      <Route path="/calc" element={<CalculatorIBU />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/main" element={<Main />}/>
      <Route path="/about" element={<About />}/>
      {/* <Route
        path="/lala"
        element={<Navigate to="/calc" />}
    /> */}
      <Route path="/signup" element={<Registration />} />
      <Route path="/*" element={<CalculatorIBU />} />
    </Routes>
  );
}

export default AppRouter;
