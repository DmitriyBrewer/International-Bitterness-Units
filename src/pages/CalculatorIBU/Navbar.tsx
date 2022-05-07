import * as React from "react";
import { Link } from "react-router-dom";
//MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//MUI
//component
import Logo from "./Logo";
import AvatarMenu from '../../components/UI/navbar/AvatarMenu'
//component
//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { logout } from '../../store/reducer/userSlice';
//redux
//styles
import cl from "./Navbar.module.css";
//styles
//switch color element
import SwitchTheme from "./SwitchTheme";
//switch color element



interface INavbar {
  onChangeTheme: any;
}

const Navbar: React.FC<INavbar> = ({ onChangeTheme }) => {


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
          <SwitchTheme onChangeTheme={onChangeTheme} />
          <Link to="/calc" className={cl.header_text_content}>
            Калькулятор
          </Link>
          <Link to="/about" className={cl.header_text_content}>
            About
          </Link>
          <Link to="/test" className={cl.header_text_content}>
            TestCalc
          </Link>
          {!isAuth &&
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
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
