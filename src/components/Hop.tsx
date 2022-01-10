import React, { useEffect } from "react";
import DeleteButton from "./UI/button/DeleteButton";
import PharamInput from "./UI/input/PharamInput";
import Calculate from "../components/Calculate";
import SliderMUI from "../components/UI/slider/SliderMUI";

export interface IHop {
  name: string;
  alpha: string;
  amount: string;
  time: string;
}

interface HopProps {
  id: number;
  hop: any;
  gethop: any;
  getibu: any;
  volume: string;
  destiny: string;
  boil: string;
  onClick: any;
}

const Hop: React.FC<HopProps> = ({
  gethop,
  getibu,
  id,
  volume,
  destiny,
  boil,
  onClick
}) => {
  const [value, setValue] = React.useState<IHop>({
    name: "Sabro",
    alpha: "13.5",
    amount: "2500",
    time: "25"
  });
  const [error, setError] = React.useState({
    alpha: false,
    amount: false,
    time: false
  });

  //disabled TimeInput
  const [disableTime, setDisableTime] = React.useState(false);
  //disabled TimeInput

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, name: event.target.value });
  };
  const alphaHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, alpha: event.target.value });
  };
  const amountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, amount: event.target.value });
  };
  const timeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, time: event.target.value });
  };

  const Blur = () => {
    gethop(id, { ...value });
    setValue(value);
  };

  const BlurAlpha = () => {
    if (!value.alpha.trim() || parseInt(value.alpha, 10) === 0) {
      setError({ ...error, alpha: true });
    } else setError({ ...error, alpha: false });
    gethop(id, { ...value });
    setValue(value);
  };

  const BlurTime = () => {
    if (!value.time.trim() || !boil.trim() || parseInt(value.time, 10) >= parseInt(boil, 10) + 1) {
      setError({ ...error, time: true });
    } else setError({ ...error, time: false });
    gethop(id, { ...value });
    setValue(value);
  };

  //disabled TimeInput
  const BOILTRIM = () => {
    if(!boil.trim()){
      setDisableTime(true)
    } else setDisableTime(false)
  }
  useEffect(()=>{
    BOILTRIM()
    BlurTime()
  },[boil])
  //disabled TimeInput

  return (
    <div>
      <PharamInput
        placeholder="Название хмеля"
        value={value?.name}
        onChange={nameHandler}
        onBlur={Blur}
        type="string"
      />
      <PharamInput
        placeholder="Альфа кислота"
        value={value?.alpha}
        onChange={alphaHandler}
        onBlur={BlurAlpha}
        type="number"
        error={error.alpha}
        helperText={
          !error.alpha ? "" : "❌ Альфа кислота от 0 до ∞"
        }
      />
      <PharamInput
        placeholder="Кол-во, г"
        value={value?.amount}
        onChange={amountHandler}
        onBlur={Blur}
        type="number"
        error={error.amount}
        helperText={''}
      />
      <PharamInput
        placeholder="Время внесения, мин"
        value={value?.time}
        onChange={timeHandler}
        onBlur={BlurTime}
        type="number"
        error={error.time}
        helperText={boil ? !error.time ? "" : "❌ от 0 до Время кипячения":
          !error.time ? "⚠️Введите время кипячения" : "❌Введите Время Кипячения"
        }
        disable={disableTime}
      />
      <DeleteButton onClick={onClick} children={"удалить"} />
      <Calculate
        name={value.name}
        alpha={value.alpha}
        amount={value.amount}
        time={value.time}
        wortvolume={volume}
        wortdestiny={destiny}
        wortboil={boil}
        getibu={getibu}
        id={id}
      />
      <SliderMUI
        value={value?.amount}
        onChange={amountHandler}
        color="secondary"
      />
    </div>
  );
};

export default Hop;
