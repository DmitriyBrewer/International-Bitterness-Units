import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css";
import Logo from "../navbar/Logo";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ background: "black" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/calc">
              <Logo />
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 30 }}>
            <Link to="/calc" className={cl.header_text_content}>
              Пивная платформа
            </Link>
          </Typography>
          <Link to="/calc" className={cl.header_text_content}>
            Калькулятор
          </Link>
          <Link to="/signup " className={cl.header_text_content}>
            зарегистрироваться
          </Link>
          <Link to="/login" className={cl.header_text_content}>
            Войти
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
