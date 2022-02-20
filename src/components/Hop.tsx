import React, { useEffect } from "react";
import DeleteButton from "./UI/button/DeleteButton";
import PharamInput from "./UI/input/PharamInput";
import Calculate from "../components/Calculate";
import SliderMUI from "../components/UI/slider/SliderMUI";
import { Switch, Slider } from "@mui/material";
import { TextField } from "@mui/material";

//redux
import HOPS from "../store/reducer/hopSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../store/store";
//redux

interface IHop {
  id:any
}


const Hop: React.FC<IHop> = ({id
}) => {
    //redux value
  const dispatch: AppDispatch = useDispatch();
  const Hops = useSelector((state: AppState) => state.hops);
  //redux value
  //redux value
  //wort
  const boilValidation = Hops.length > 0 ? Hops[0].boilValidation : "";

  let ReduxValueWort = { volume: "", destiny: "", boil: "", boilValidation:undefined,
};
  Hops.forEach((element: any, index:any) => {
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
  let ReduxValueHop = { name: "", alpha: "", amount: '0', time: "", ibu: "", alphaValidation: undefined, timeValidation: undefined,amountValidation: undefined  };
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
        ibu: element.ibu
      };
    }
  });
  //hop

  //selectIDHop
  const selectHopId = (event:any) => {
    // event.target.select(); //при нажатии на инпут выделяется всё содержимое инпута
    dispatch(HOPS.actions.selectedHop(id));
  };
  //selectIDHop
  //handlers
  const nameHandler = (event: any) => {
    dispatch(HOPS.actions.addName(event.target.value));
  };
  const alphaHandler = (event: any) => {
    dispatch(HOPS.actions.addAlpha(event.target.value));
  };
  const alphaBlurValidation = () => {
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.alphaValidation());
  }
  const amountHandler = (event: any) => {
    dispatch(HOPS.actions.addAmount(event.target.value));
  };
  const amountBlurValidation = (e:any) => {
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.amountValidation());
  }
  const timeHandler = (event: any) => {
    dispatch(HOPS.actions.addTime(event.target.value));
  };
  const timeBlurValidation = () => {
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.timeValidation());
  }
  const ibuBlur = () => {
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.timeValidation());
    dispatch(HOPS.actions.alphaValidation());
    dispatch(HOPS.actions.amountValidation());
  };
  //handlers
  //redux value
  return (
    <div>
      <PharamInput
      required={true}
        placeholder="Название хмеля"
        value={ReduxValueHop.name}
        onClick={selectHopId}
        onChange={nameHandler}
        type="string"
      />
      <PharamInput
        placeholder="Альфа кислота"
        value={ReduxValueHop.alpha}
        onClick={selectHopId}
        onChange={alphaHandler}
        onBlur={alphaBlurValidation}
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
        onChange={amountHandler}
        onBlur={amountBlurValidation}
        type="number"
        error={ReduxValueHop.amountValidation===undefined?false:!ReduxValueHop.amountValidation}
        helperText={
          ReduxValueHop.amountValidation===undefined?
          "Введите от 0 до ∞"
          :
          !ReduxValueHop.amountValidation? 
           "❌ от 0 до ∞" :"✅ Верное значение" 
        }
        InputLabelProps={{
          shrink: ReduxValueHop.amount ? true : false
        }}
      />

      <PharamInput
        placeholder="Время внесения, мин"
        value={ReduxValueHop.time}
        onClick={selectHopId}
        onChange={timeHandler}
        onBlur={timeBlurValidation}
        type="number"
        disable={!boilValidation}
        error={ReduxValueHop.timeValidation===undefined?false:!ReduxValueHop.timeValidation}
        helperText={
          ReduxValueHop.timeValidation===undefined?
          "Введите от 0 до Время кипячения"
          :
          !ReduxValueHop.timeValidation? 
           "❌ от 0 до Время кипячения" :"✅ Верное значение" 
        }
      />
      <DeleteButton children={"удалить"} onClick={()=>{
      dispatch(HOPS.actions.deleteHop(id));
      }} />
      <h1 style={{
          fontSize: "16px",
          color: "purple",
          margin: "10px",
          fontFamily: "roboto"
        }}>ibu {ReduxValueHop.name}: {ReduxValueHop.ibu}</h1>
      <SliderMUI
        value={ReduxValueHop.amount}
        onChange={(event: any) => {
          dispatch(HOPS.actions.calcIBU());
          dispatch(HOPS.actions.concatIBU());
          dispatch(HOPS.actions.selectedHop(id));
          dispatch(HOPS.actions.addAmount(event.target.value));
          dispatch(HOPS.actions.amountValidation());
        }}
        color="secondary"
      />
    </div>
  );
};

export default Hop;
