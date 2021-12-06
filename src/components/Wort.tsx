import React from "react";
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
    volume: "",
    destiny: "",
    boil: ""
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
      />
      <PharamInput
        placeholder="Плотность сусла"
        id="destiny"
        value={value?.destiny}
        onChange={destinyHandler}
        onBlur={Blur}
      />
      <PharamInput
        placeholder="Время кипячения"
        id="boil"
        value={value?.boil}
        onChange={boilHandler}
        onBlur={Blur}
      />
    </div>
  );
};

export default Wort;
