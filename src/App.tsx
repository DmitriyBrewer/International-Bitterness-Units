import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import Footer from "./components/UI/footer/Footer";
import Navbar from "./components/UI/navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
