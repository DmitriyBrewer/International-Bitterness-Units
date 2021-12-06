import Wort from "../../components/Wort";
import HopList from "../../components/HopList";
import HopsButton from "../../components/UI/button/HopsButton";
import { useState } from "react";
import { Container } from "@mui/material";
// import { Slider } from "@mui/material";
export interface IHop {
  id: string;
}

const CalculatorIBU: React.FC = () => {
  const [hops, setHops] = useState<any>([]);
  const [volume, setVolume] = useState<string>("");
  const [destiny, setDestiny] = useState<string>("");
  const [boil, setBoil] = useState<string>("");

  const addHop = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (hops.length <= 3) {
      event.preventDefault();
      setHops([...hops, { id: Date.now() }]);
    }
  };

  const removeHop = (hop: any) => {
    setHops(hops.filter((p: any) => p.id !== hop.id));
  };

  const getInputHop = (id: any, newValueArray: any) => {
    const valueChange = hops.map((hop: any) => {
      if (id === hop.id) {
        return {
          ...hop,
          name: newValueArray.name,
          alpha: newValueArray.alpha,
          amount: newValueArray.amount,
          time: newValueArray.time
        };
      }
      return hop;
    });
    setHops(valueChange);
  };

  const getAllIbu = (id: any, ibuValue: any) => {
    const allIBU = hops.map((hop: any) => {
      if (id === hop.id) {
        return {
          ...hop,
          allibu: ibuValue
        };
      }
      return hop;
    });
    setHops(allIBU);
  };

  const getInputWort = (volume: string, destiny: string, boil: string) => {
    setVolume(volume);
    setDestiny(destiny);
    setBoil(boil);
  };

  console.log(hops);
  //concat IBU
  var initialValue = 0;
  var concatIbu = hops.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.allibu;
  }, initialValue);
  var parsConcatIbu = parseFloat(concatIbu.toFixed(2));
  //concat IBU

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Wort getwort={getInputWort} />
        <HopsButton onClick={addHop}>Добавить хмель</HopsButton>
        <HopList
          hops={hops}
          remove={removeHop}
          gethop={getInputHop}
          volume={volume}
          destiny={destiny}
          boil={boil}
          getibu={getAllIbu}
        />
        <h1
          style={{
            fontSize: "20px",
            color: "purple",
            margin: "10px",
            fontFamily: "roboto"
          }}
        >
          Общее ibu: {parsConcatIbu || 0}
        </h1>
        {/* <Slider
          disabled
          defaultValue={0}
          min={0}
          max={250}
          value={parsConcatIbu || 0}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{
            width: "50%",
            color: "success.secondary"
          }}
        /> */}
      </Container>
    </div>
  );
};

export default CalculatorIBU;
