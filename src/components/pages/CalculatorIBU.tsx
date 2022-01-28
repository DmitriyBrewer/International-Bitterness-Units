import Wort from "../../components/Wort";
import HopList from "../../components/HopList";
import HopsButton from "../../components/UI/button/HopsButton";
import { useState } from "react";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from "react-redux";
import HOPS from "../../store/reducer/hopSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
import Alert from '@mui/material/Alert';


export interface IHop {
  id: string;
}

const CalculatorIBU: React.FC = () => {
  //BL
  //Три хука получения значений из Wort.tsx
  const [volume, setVolume] = useState<string>("");
  const [destiny, setDestiny] = useState<string>("");
  const [boil, setBoil] = useState<string>("");
  //Три хука получения значений из Wort.tsx

  //Redux
  const dispatch: AppDispatch = useDispatch(); 
  const Hops = useSelector((state: AppState) => state.hops); // достаём массив из hopSlice
  //Redux


  const getInputHop = (id: any, newValueArray: any) => {
    const valueChange = Hops.map((hop: any) => {
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
    dispatch(HOPS.actions.saveAction(valueChange));
  };

  
  const getAllIbu = (id: any, ibuValue: any) => {
    const allIBU = Hops.map((hop: any) => {
      if (id === hop.id) {
        return {
          ...hop,
          allibu: ibuValue
        };
      }
      return hop;
    });
    dispatch(HOPS.actions.saveAction(allIBU));

  };

  const getInputWort = (volume: string, destiny: string, boil: string) => {
    setVolume(volume);
    setDestiny(destiny);
    setBoil(boil);
  };

  //concat IBU
  var initialValue = 0;
  var concatIbu = Hops.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.allibu;
  }, initialValue);
  var parsConcatIbu = parseFloat(concatIbu.toFixed(2));
  //concat IBU

  return (
    <div>
      <CssBaseline />
    <div style={{ textAlign: "center"}}>
      <Container  maxWidth="sm">
        <Alert variant="filled" severity="info" style={{marginTop:'20px'}}>
          Для наглядной работы калькулятора, поля были заблаговременно заполнены, нажмите добавить хмель
        </Alert>
        <Wort getwort={getInputWort} />
        <div style={{ margin: "10px", display: "flex", justifyContent:'center', flexWrap:'wrap' }}>
        <HopsButton
            onClick={(event) => {
              event.preventDefault();
              dispatch(HOPS.actions.addTodo(Date.now()));
            }}
          >
            Добавить хмель
          </HopsButton>
        </div>
        <HopList
          Hops={Hops}
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
      </Container>
    </div>
    </div>
  );
};

export default CalculatorIBU;
