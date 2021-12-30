import React, { useEffect } from "react";
import DeleteButton from "../UI/button/DeleteButton";
import PharamInput from "../UI/input/PharamInput";
import {registration} from "../../api/user";



interface IRegistration {
  email: string;
    password: string;
  }
  

const Registration = () => {
  const [value, setValue] = React.useState<IRegistration>({
    email: "",
    password: ""
  });

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
      <h1 style={{fontFamily:'roboto'}}>Регистрация</h1>
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
        onClick={() => registration(value?.email, value?.password)}
        children={"Зарегистрироваться"}
      />
    </form>
  );
};

export default Registration;
