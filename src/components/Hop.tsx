import React from "react";
import DeleteButton from "./UI/button/DeleteButton";
import PharamInput from "./UI/input/PharamInput";
import Calculate from "../components/Calculate";
// import { Slider } from "@mui/material";

export interface IHop {
  name: string;
  alpha: string;
  amount: string;
  time: string;
}

interface HopProps {
  id: number;
  hop: any;
  remove: any;
  gethop: any;
  getibu: any;
  volume: string;
  destiny: string;
  boil: string;
}
const Hop: React.FC<HopProps> = ({
  remove,
  hop,
  gethop,
  getibu,
  id,
  volume,
  destiny,
  boil
}) => {
  const [value, setValue] = React.useState<IHop>({
    name: "",
    alpha: "",
    amount: "",
    time: ""
  });

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
    console.log(value);
  };

  return (
    <div>
      <PharamInput
        placeholder="Название хмеля"
        value={value?.name}
        onChange={nameHandler}
        onBlur={Blur}
      />
      <PharamInput
        placeholder="Альфа кислота"
        value={value?.alpha}
        onChange={alphaHandler}
        onBlur={Blur}
      />
      <PharamInput
        placeholder="Кол-во, г"
        value={value?.amount}
        onChange={amountHandler}
        onBlur={Blur}
      />
      <PharamInput
        placeholder="Время внесения, мин"
        value={value?.time}
        onChange={timeHandler}
        onBlur={Blur}
      />
      <DeleteButton onClick={() => remove(hop)} children={"удалить"} />
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
      {/* <Slider
        color="secondary"
        min={0}
        max={15000}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{
          width: "50%",
          color: "success.purple"
        }}
        defaultValue={value?.amount}
        value={value?.amount}
        onChange={amountHandler}
      /> */}
    </div>
  );
};

export default Hop;
