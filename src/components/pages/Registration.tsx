import React, { useEffect } from "react";
import DeleteButton from "../UI/button/DeleteButton";
import PharamInput from "../UI/input/PharamInput";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "../../store/store";
import {registration} from "../../api/user";



interface IRegistration {
  email: string;
    password: string;
  }
  
  interface RegistrationProps {
  }


const Registration = () => {
  const [value, setValue] = React.useState<IRegistration>({
    email: "",
    password: ""
  });
  // const [email, setEmail] = React.useState<IRegistration>("")
  //   const [password, setPassword] = React.useState<IRegistration>("")

  const dispatch = useDispatch();
  // const User = useSelector((state: AppState) => state.users);

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
        // onClick={(event) => {
        //   event.preventDefault();
        //   dispatch(USERS.actions.SETUSER(false));
        // }}
        onClick={() => registration(value?.email, value?.password)}
        children={"Зарегестрироваться"}
      />
    </form>
  );
};

export default Registration;
