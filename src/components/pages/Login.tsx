import React, { useEffect } from "react";
import DeleteButton from "../UI/button/DeleteButton";
import PharamInput from "../UI/input/PharamInput";
import { useSelector, useDispatch } from "react-redux";
// import fetchUsers from "../../store/reducer/userSlice";
import { AppDispatch, AppState } from "../../store/store";

interface ILogin {
    login: string;
    password: string;
  }
  
  interface LoginProps {
  }


const Login = () => {
  const [value, setValue] = React.useState<ILogin>({
    login: "",
    password: ""
  });

  const dispatch = useDispatch();
  // const User = useSelector((state: AppState) => state.users);

  const Blur = () => {
    setValue(value);
    console.log(value);
  };

  const loginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, login: event.target.value });
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, password: event.target.value });
  };

  return (
    <form onSubmit={Blur} style={{ textAlign: "center" }}>
      <PharamInput
        placeholder="Введите email"
        value={value?.login}
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
        onClick={(event) => {
          event.preventDefault();
          // dispatch(USERS.actions.SETUSER(false));
        }}
        children={"отправить"}
      />
    </form>
  );
};

export default Login;
