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

  const [error, setError] = React.useState({
    volume: false,
    destiny: false,
    boil: false
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

  // const Blur = () => {
  //   setValue(value);
  //   getwort(value.volume, value.destiny, value.boil);
  // };

  const BlurVolume = () => {
    if (!value.volume.trim() || parseInt(value.volume, 10) >= 100001) {
      setError({ ...error, volume: true });
    } else setError({ ...error, volume: false });
    setValue(value);
    getwort(value.volume, value.destiny, value.boil);
  };

  const BlurDestiny = () => {
    if (
      !value.destiny.trim() ||
      parseInt(value.destiny, 10) <= 4 ||
      parseInt(value.destiny, 10) >= 36
    ) {
      setError({ ...error, destiny: true });
    } else setError({ ...error, destiny: false });
    setValue(value);
    getwort(value.volume, value.destiny, value.boil);
  };

  const BlurBoil = () => {
    if (!value.boil.trim() || parseInt(value.boil, 10) >= 201) {
      setError({ ...error, boil: true });
    } else setError({ ...error, boil: false });
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
        onBlur={BlurVolume }
        type="number"
        error={error.volume}
        helperText={
          !error.volume ? "" : "❌ Объём от 0 до 100 000, л"
        }
      />
      <PharamInput
        placeholder="Плотность сусла"
        id="destiny"
        value={value?.destiny}
        onChange={destinyHandler}
        onBlur={BlurDestiny }
        type="number"
        error={error.destiny}
        helperText={
          !error.destiny ? "" : "❌ Plato от 5 до 35"
        }
      />
      <PharamInput
        placeholder="Время кипячения"
        id="boil"
        value={value?.boil}
        onChange={boilHandler}
        onBlur={BlurBoil }
        type="number"
        error={error.boil}
        helperText={
          !error.boil
            ? ""
            : "❌ Кипячение от 0 до 200 мин"
        }

      />
    </div>
  );
};

export default Wort;
