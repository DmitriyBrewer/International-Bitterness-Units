import React, { useEffect } from "react";
import DeleteButton from "../UI/button/DeleteButton";
import PharamInput from "../UI/input/PharamInput";
import { useDispatch } from "react-redux";

import {login} from "../../api/user";

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

  return (
    <form onSubmit={Blur} style={{ textAlign: "center" }}>
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
        children={"отправить"}
      />
    </form>
  );
};

export default Login;
