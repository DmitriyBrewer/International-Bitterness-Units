import Wort from "../../components/Wort";
import HopList from "../../components/HopList";
import HopsButton from "../../components/UI/button/HopsButton";
import { useState } from "react";
import { Container } from "@mui/material";
import { Slider } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import HOPS from "../../store/reducer/hopSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";



export interface IHop {
  id: string;
}

const CalculatorIBU: React.FC = () => {
  // const [hops, setHops] = useState<any>([]);
  const [volume, setVolume] = useState<string>("");
  const [destiny, setDestiny] = useState<string>("");
  const [boil, setBoil] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();
  const Hops = useSelector((state: AppState) => state.hops);
  const isAuth = useSelector((state:RootState) => state.user.isAuth)




    //loader test
    setTimeout(() => {
      setLoading(false)
    }, 500);
    //loader test

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
    // setHops(valueChange);
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
    // setHops(allIBU);
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
      {isAuth &&
    <div style={{ textAlign: "center" }}>
      {loading? <CircularProgress color="inherit" style={{margin:'30px'}}/> : 
      <Container  maxWidth="sm">
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
        <Slider
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
        />
        <HopsButton
        onClick={(event) => {
          event.preventDefault();
        }}
    >
      сохранить расчёт
    </HopsButton>
      </Container>
      
        }
    </div>
    }
    </div>
  );
};

export default CalculatorIBU;
