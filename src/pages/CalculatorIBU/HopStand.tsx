import React, { useEffect } from "react";
import DeleteButton from "../../components/UI/button/DeleteButton";
import PharamInput from "../../components/UI/input/PharamInput";
import { Calc } from "../../pages/CalculatorIBU/CalcHopStand";

// import Calculate from "../components/Calculate";
import SliderMUI from "../../components/UI/slider/SliderMUI";
import { Switch, Slider } from "@mui/material";
import { TextField } from "@mui/material";

//redux
import HOPSSTAND from "../../store/reducer/hopStandSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store/store";
//redux

interface IHop {
    id?:any
  }
  
 const HopStand: React.FC<IHop> = ({id}) => {
    //redux value
    const dispatch: AppDispatch = useDispatch();
    const Hops = useSelector((state: AppState) => state.hopStand);
    const Wort = useSelector((state: AppState) => state.hops);

    //redux value
    // const boilValidation = Hops.length > 0 ? Hops[0].boilValidation : "";

    let ReduxValueWort = { volume: "", destiny: "", boil: "", boilValidation:undefined,
  };
  Wort.forEach((element: any, index:any) => {
      if (index===0)
      {ReduxValueWort = {
          volume: element.volume,
          destiny: element.destiny,
          boil: element.boil,
          boilValidation:undefined,
        };
      }
    });
    //wort
    //hop
    let ReduxValueHop = { name: "", alpha: "", amount: '', time: "", ibu: "", alphaValidation: undefined, timeValidation: undefined,amountValidation: undefined,temperature:"", temperatureValidation: undefined  };
    Hops.forEach((element: any) => {
      if (element.id === id) {
        ReduxValueHop = {
          name: element.name,
          alpha: element.alpha,
          alphaValidation: element.alphaValidation,
          amount: element.amount,
          amountValidation: element.amountValidation,
          time: element.time,
          timeValidation: element.timeValidation,
          ibu: element.ibu,
          temperature: element.temperature, 
          temperatureValidation: element.temperatureValidation
        };
      }
    });
    //hop
    const IBU = Calc(ReduxValueHop.name,ReduxValueHop.alpha,ReduxValueHop.amount,ReduxValueHop.time,ReduxValueHop.temperature, ReduxValueWort.volume, ReduxValueWort.destiny, ReduxValueWort.boil)
//selectIDHop
const selectHopId = (event:any) => {
  // event.target.select(); //при нажатии на инпут выделяется всё содержимое инпута
  dispatch(HOPSSTAND.actions.selectedHop(id));
};
//selectIDHop
//handlers
const nameHandler = (event: any) => {
  dispatch(HOPSSTAND.actions.addName(event.target.value));
};
const alphaHandler = (event: any) => {
  dispatch(HOPSSTAND.actions.addAlpha(event.target.value));
};
const alphaBlurValidation = () => {
  dispatch(HOPSSTAND.actions.calcIBU());
  dispatch(HOPSSTAND.actions.concatIBU());
  dispatch(HOPSSTAND.actions.alphaValidation());
}
const amountHandler = (event: any) => {
  dispatch(HOPSSTAND.actions.addAmount(event.target.value));
};
const amountBlurValidation = (e:any) => {
  dispatch(HOPSSTAND.actions.calcIBU());
  dispatch(HOPSSTAND.actions.concatIBU());
  dispatch(HOPSSTAND.actions.amountValidation());
}
const timeHandler = (event: any) => {
  dispatch(HOPSSTAND.actions.addTime(event.target.value));
};
const timeBlurValidation = () => {
  dispatch(HOPSSTAND.actions.calcIBU());
  dispatch(HOPSSTAND.actions.concatIBU());
  dispatch(HOPSSTAND.actions.timeValidation());
}

const temperatureHandler = (event: any) => {
  dispatch(HOPSSTAND.actions.addTemperature(event.target.value));
};
const temperatureBlurValidation = () => {
  dispatch(HOPSSTAND.actions.calcIBU());
  dispatch(HOPSSTAND.actions.concatIBU());
  dispatch(HOPSSTAND.actions.temperatureValidation());
}
//handlers

    return(
        <div>
          <h1 style={{
          fontSize: "16px",
          color: "black",
          margin: "10px",
          fontFamily: "roboto"
        }}>Хмель на вирпул : {ReduxValueHop.name}</h1>
      <PharamInput
        required={true}
        placeholder="Название хмеля"
        value={ReduxValueHop.name}
        onClick={selectHopId}
        onFocus={selectHopId} 

        onChange={nameHandler}
        onMouseDown={selectHopId}

        type="string"
      />
      <PharamInput
        placeholder="Альфа кислота"
        value={ReduxValueHop.alpha}
        onClick={selectHopId}
        onFocus={selectHopId} 

        onChange={alphaHandler}
        onBlur={alphaBlurValidation}
        onMouseDown={selectHopId}

        type="number"
        error={ReduxValueHop.alphaValidation===undefined?false:!ReduxValueHop.alphaValidation}
        helperText={
          ReduxValueHop.alphaValidation===undefined?
          "Введите Альфа кислоту от 0.1 до ∞"
          :
          !ReduxValueHop.alphaValidation? 
           "❌ Альфа кислота от 0.1 до ∞" :"✅ Верное значение" 
        }
      />
      <PharamInput
        // placeholder={ReduxValueHop.amount?"":"Кол-во, г"}
        placeholder="Кол-во, г"
        value={ReduxValueHop.amount}
        onClick={selectHopId}
        onFocus={selectHopId} 

        onChange={amountHandler}
        onBlur={amountBlurValidation}
        onMouseDown={selectHopId}

        type="number"
        error={ReduxValueHop.amountValidation===undefined?false:!ReduxValueHop.amountValidation}
        helperText={
          ReduxValueHop.amountValidation===undefined?
          "Введите от 0 до ∞"
          :
          !ReduxValueHop.amountValidation? 
           "❌ от 0 до ∞" :"✅ Верное значение" 
        }
        // InputLabelProps={{
        //   shrink: ReduxValueHop.amount ? true : false
        // }}
      />

      <PharamInput
        placeholder="Время на вирпуле, мин"
        value={ReduxValueHop.time}
        onClick={selectHopId}
        onFocus={selectHopId} 

        onChange={timeHandler}
        onBlur={timeBlurValidation}
        onMouseDown={selectHopId}

        type="number"
        // disable={!boilValidation}
        error={ReduxValueHop.timeValidation===undefined?false:!ReduxValueHop.timeValidation}
        helperText={
          ReduxValueHop.timeValidation===undefined?
          "⚠️ Введите от 0 до 100"
          :
          !ReduxValueHop.timeValidation? 
           "❌ от 0 до 100" :"✅ Верное значение" 
        }
      />
      <PharamInput
        placeholder="Температура HOPSTAND"
        value={ReduxValueHop.temperature}
        onClick={selectHopId}
        onChange={temperatureHandler}
        onBlur={temperatureBlurValidation}
        onMouseDown={selectHopId}

        type="number"
        error={ReduxValueHop.temperatureValidation===undefined?false:!ReduxValueHop.temperatureValidation}
        helperText={
          ReduxValueHop.temperatureValidation===undefined?
          "Введите Альфа кислоту от 0.1 до ∞"
          :
          !ReduxValueHop.temperatureValidation? 
           "❌ Альфа кислота от 0 до 100" :"✅ Верное значение" 
        }
      />
            <DeleteButton children={"удалить"} onClick={()=>{
            dispatch(HOPSSTAND.actions.deleteHop(id));
            }} />
<h1 style={{
          fontSize: "16px",
          color: "purple",
          margin: "10px",
          fontFamily: "roboto"
        }}>ibu {ReduxValueHop.name}: {IBU}</h1>            
        </div>
    )
}


export default HopStand;