import React from "react";
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
        type="string"
      />
      <PharamInput
        placeholder="Альфа кислота"
        value={value?.alpha}
        onChange={alphaHandler}
        onBlur={Blur}
        type="number"
      />
      <PharamInput
        placeholder="Кол-во, г"
        value={value?.amount}
        onChange={amountHandler}
        onBlur={Blur}
        type="number"
      />
      <PharamInput
        placeholder="Время внесения, мин"
        value={value?.time}
        onChange={timeHandler}
        onBlur={Blur}
        type="number"
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
      <SliderMUI
        value={value?.amount}
        onChange={amountHandler}
        color="secondary"
      />
    </div>
  );
};

export default Hop;
