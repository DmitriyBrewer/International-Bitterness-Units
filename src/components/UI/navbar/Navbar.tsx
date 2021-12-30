import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css";
import Logo from "./Logo";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/store";
import { logout } from '../../../store/reducer/userSlice';
import AvatarMenu from './AvatarMenu'


export default function Navbar() {


  const isAuth = useSelector((state:RootState) => state.user.isAuth)
  const dispatch = useDispatch()

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
          <Link to="/calc" className={cl.header_text_content}>
            About
          </Link>
          {/* {!isAuth &&
          <div>
          <Link to="/signup " className={cl.header_text_content}>
            Регистрация
          </Link>
          <Link to="/login" className={cl.header_text_content}>
            Вход
          </Link>
          </div>}
          {isAuth && 
          <div 
          className={cl.header_text_content} onClick={()=>dispatch(logout({}))}>
            Выход
          </div>
          }
          {isAuth &&
          <div><AvatarMenu/></div>
          } */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
