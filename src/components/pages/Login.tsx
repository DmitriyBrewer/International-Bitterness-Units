import React, { useEffect } from "react";
import DeleteButton from "../UI/button/DeleteButton";
import PharamInput from "../UI/input/PharamInput";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import {login} from "../../api/user";
import { RootState } from "../../store/store";

interface ILogin {
    email: string;
    password: string;
  }
  
  interface LoginProps {
  }

const Login = () => {
  const [value, setValue] = React.useState<ILogin>({
    email: "",
    password: ""
  });
  const isAuth = useSelector((state: RootState) => state.user.isAuth)
  const dispatch = useDispatch();

  const Blur = () => {
    setValue(value);
    console.log(value);
  };

  const loginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, email: event.target.value });
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, password: event.target.value });
  };

const redirect = () => {
  console.log(1);
}


  return (
    <div>
    {!isAuth &&
    <form onSubmit={Blur} style={{ textAlign: "center" }}>
      <h1 style={{fontFamily:'roboto'}}>Войти в личный кабинет</h1>
      <PharamInput
        placeholder="Введите email"
        value={value?.email}
        onChange={loginHandler}
        onBlur={Blur}
        type="string"
      />
      <PharamInput
        placeholder="Введите пароль"
        value={value?.password}
        onChange={passwordHandler}
        onBlur={Blur}
        type="number"
      />
      <DeleteButton
        onClick={()=>dispatch(login(value?.email, value?.password))}
        children={"войти"}
      />
    </form>
}
{isAuth &&
<div style={{ textAlign: "center" }}>
<Link to="/calc">

  <DeleteButton
        onClick={()=>{}}
        children={"Get Stated"}
      />
      </Link>
      </div>
}
    </div>
  );
};

export default Login;
