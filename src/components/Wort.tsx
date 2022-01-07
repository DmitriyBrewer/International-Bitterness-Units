import React, { useEffect } from "react";
import PharamInput from "../components/UI/input/PharamInput";

interface IWort {
  volume: string;
  destiny: string;
  boil: string;
}

interface WortProps {
  getwort: any;
}

const Wort: React.FC<WortProps> = ({ getwort }) => {
  const [value, setValue] = React.useState<IWort>({
    volume: "1000",
    destiny: "12",
    boil: "60"
  });

  const volumeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, volume: event.target.value });
  };
  const destinyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, destiny: event.target.value });
  };
  const boilHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, boil: event.target.value });
  };

  const Blur = () => {
    setValue(value);
    getwort(value.volume, value.destiny, value.boil);
  };

  //при монтировании орабатывает
  useEffect(()=>{
    setValue(value);
    getwort(value.volume, value.destiny, value.boil);
  })

  return (
    <div>
      
      <h1 style={{ textAlign: "center", fontFamily: "roboto" }}>
        Калькулятор IBU
      </h1>
      <PharamInput
        placeholder="Объем сусла, л"
        id="wort"
        value={value?.volume}
        onChange={volumeHandler}
        onBlur={Blur}
        type="number"
      />
      <PharamInput
        placeholder="Плотность сусла"
        id="destiny"
        value={value?.destiny}
        onChange={destinyHandler}
        onBlur={Blur}
        type="number"
      />
      <PharamInput
        placeholder="Время кипячения"
        id="boil"
        value={value?.boil}
        onChange={boilHandler}
        onBlur={Blur}
        type="number"
      />
    </div>
  );
};

export default Wort;
