import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import '../styles.css'


const Main = () => {
  return (
    <div style={{ textAlign: "center", background:'none' }}>
    <Container  maxWidth="sm" style={{background:'none'}}>
    <Link to="/calc" style={{textDecoration:'none'}}>
      <div className="background">
        <div className="text_content">
        Калькулятор IBU
        </div>
        </div>
        </Link>

      </Container>
    </div>
  );
};

export default Main;
