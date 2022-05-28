import React from "react";
import { Routes, Route, Navigate   } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import About from "./pages/About";
import CalcTestVersion from "./pages/TestCalc/CalcTestVersion";


function AppRouter() {
  return (
    <Routes>
      <Route path="/calc" element={<CalcTestVersion />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/main" element={<Main />}/>
      <Route path="/about" element={<About />}/>
      {/* <Route path="/test" element={<CalcTestVersion />}/> */}

      {/* <Route
        path="/lala"
        element={<Navigate to="/calc" />}
    /> */}
      {/* <Route path="/signup" element={<Registration />} /> */}
      <Route path="/*" element={<CalcTestVersion />} />
    </Routes>
  );
}

export default AppRouter;
