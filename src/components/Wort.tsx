import React, { useEffect } from "react";
import PharamInput from "../components/UI/input/PharamInput";
//radioButton MUI
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
//radioButton MUI


interface IWort {
  volume: string;
  destiny: any;
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

  //хук ogsg
  const [switchDestiny, setSwitchDestiny] = React.useState("Plato");
  const handleChangeDestiny = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchDestiny((event.target as HTMLInputElement).value);
  };
  //хук ogsg

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
    if (!value.volume.trim() || parseInt(value.volume, 10) > 100000) {
      setError({ ...error, volume: true });
    } else setError({ ...error, volume: false });
    setValue(value);
    getwort(value.volume, value.destiny, value.boil);
  };

  //Blur Destiny разделим на два
  // const BlurDestiny = () => {
  //   if (
  //     !value.destiny.trim() ||
  //     parseInt(value.destiny, 10) < 5 ||
  //     parseInt(value.destiny, 10) > 35
  //   ) {
  //     setError({ ...error, destiny: true });
  //   } else setError({ ...error, destiny: false });
  //   setValue(value);
  //   getwort(value.volume, value.destiny, value.boil);
  // };

  const BlurDestinyPlato = () => {
    if (
      !value.destiny.trim() ||
      parseInt(value.destiny, 10) < 7.56 ||
      parseInt(value.destiny, 10) > 35
    ) {
      setError({ ...error, destiny: true });
    } else setError({ ...error, destiny: false });
    setValue(value);
    getwort(value.volume, value.destiny, value.boil);
  };

  const BlurDestinySG = () => {
    if (!value.destiny.trim() || parseInt(value.destiny, 10) < 1.03 ||
    parseInt(value.destiny, 10) > 1.09) {
      setError({ ...error, destiny: true });
    } else setError({ ...error, destiny: false });
    setValue(value);
    //
    getwort(value.volume, value.destiny * 1000, value.boil);
    //
  };
    //Blur Destiny разделим на два

//helperText={boil ? !error.time ? "" : "❌ от 0 до Время кипячения":
// !error.time ? "⚠️Введите время кипячения" : "❌Введите Время Кипячения"
// }
  const BlurBoil = () => {
    if (!value.boil.trim() || parseInt(value.boil, 10) > 200) {
      setError({ ...error, boil: true });
    } else setError({ ...error, boil: false });
    setValue(value);
    getwort(value.volume, value.destiny, value.boil);
  };

  //при монтировании орабатывает
  useEffect(()=>{
    setValue(value);
       getwort(value.volume, value.destiny, value.boil);
  },[])

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
        placeholder={switchDestiny}
        id="destiny"
        value={value?.destiny}
        onChange={destinyHandler}
        onBlur={switchDestiny === "Plato" ? BlurDestinyPlato : BlurDestinySG }
        type="number"
        error={error.destiny}
        helperText={switchDestiny === "Plato" ?
          !error.destiny ? "" : "❌ Plato от 7.56 до 35" : !error.destiny ? "" : "❌ SG от 1.03 до 1.09"
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
      <FormControl component="fieldset">
        <FormLabel component="legend" style={{fontSize:'12px'}}>Введите плотность</FormLabel>
        <RadioGroup
        row
          aria-label="gravity"
          name="controlled-radio-buttons-group"
          value={switchDestiny}
          onChange={handleChangeDestiny}
        >
          <FormControlLabel value="Plato" control={<Radio  size="small"/>} label="Plato" />
          <FormControlLabel value="SG" control={<Radio  size="small"/>} label="SG" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Wort;
