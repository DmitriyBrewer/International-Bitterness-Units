import React, { useEffect } from "react";
// import { Calc } from "../../pages/CalculatorIBU/CalcHopStand";

// import SliderMUI from "../../components/UI/slider/SliderMUI";
import HopSetting from "./HopSetting";
import DeleteButton from "./DeleteButton";
//component
//MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
//MUI

//redux
import HOPSSTAND from "../../store/reducer/hopStandSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store/store";
//redux

interface IHop {
    id?:any
  }

  export interface ISlider {
    AMOUNT: string;
  }
  
 const HopStand: React.FC<IHop> = ({id}) => {
   //accordion
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  //accordion
  const [amount,setAmount] = React.useState<ISlider>({AMOUNT: '5000'})

  const amountHandlerSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount({ ...amount, AMOUNT: event.target.value });
  };
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
    let ReduxValueHop = { name: "", alpha: "", amount: 0, time: "", ibu: "", alphaValidation: undefined, timeValidation: undefined,amountValidation: undefined,temperature:"", temperatureValidation: undefined  };
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
    // const IBU = Calc(ReduxValueHop.name,ReduxValueHop.alpha,ReduxValueHop.amount,ReduxValueHop.time,ReduxValueHop.temperature, ReduxValueWort.volume, ReduxValueWort.destiny, ReduxValueWort.boil)
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
      <Grid item>
      <Paper elevation={3}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Хмель на вирпул {ReduxValueHop.name} IBU: {ReduxValueHop.ibu}</Typography>
          </AccordionSummary>
          <Stack
            // spacing={2}
            direction="row"
            sx={{
              display: "flex",
              flexWrap: "inherit",
              justifyContent: "space-between",
              margin: "10px"
            }}
          >
            <Typography variant="h5" component="h2">
              Параметры хмеля
            </Typography>
            <Stack direction="row">
              <HopSetting value={amount?.AMOUNT}
              onChange={amountHandlerSlider}/>
              <DeleteButton onClick={()=>{
                dispatch(HOPSSTAND.actions.deleteHop(id))
              }} />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <TextField
              sx={{ margin: "10px" }}
              id="outlined-basic"
              label="Наименование хмеля"
              variant="outlined"
              size="small"
              value={ReduxValueHop.name}
              onClick={selectHopId}
              onFocus={selectHopId} 
              onChange={nameHandler}
              onMouseDown={selectHopId}
              type="string"
            />
            <TextField
              sx={{ margin: "10px" }}
              id="outlined-basic"
              label="Альфа кислота"
              variant="outlined"
              size="small"
              value={ReduxValueHop.alpha}
              onClick={selectHopId}
              onFocus={selectHopId} 
              onChange={alphaHandler}
              onBlur={alphaBlurValidation}
              // onMouseUp={selectHopId}
              onMouseDown={selectHopId}
              type="number"
              error={ReduxValueHop.alphaValidation===undefined?false:!ReduxValueHop.alphaValidation}
              helperText={
                ReduxValueHop.alphaValidation===undefined?
                "Введите от 0.1 до ∞"
                :
                !ReduxValueHop.alphaValidation? 
                "❌ от 0.1 до ∞" :"✅ Верное значение" 
              }
              required={true}
            />
          </Stack>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <TextField
              sx={{ margin: "10px" }}
              id="outlined-basic"
              label="Кол-во, г"
              variant="outlined"
              size="small"
              value={ReduxValueHop.amount}
              onClick={selectHopId}
              onChange={amountHandler}
              onBlur={amountBlurValidation}
              onMouseDown={selectHopId}
              //
              onFocus={selectHopId} 
              //
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
              required={true}
            />
            <TextField
              sx={{ margin: "10px" }}
              id="outlined-basic"
              label="Время на вирпуле,м"
              variant="outlined"
              size="small"
              value={ReduxValueHop.time}
              onClick={selectHopId}
              onChange={timeHandler}
              onBlur={timeBlurValidation}
              // onMouseUp={selectHopId}
              onMouseDown={selectHopId}
              type="number"
              // disabled={!boilValidation}
              error={ReduxValueHop.timeValidation===undefined?false:!ReduxValueHop.timeValidation}
              helperText={
                ReduxValueHop.timeValidation===undefined?
                "⚠️  от 0 до 100, м"
                :
                !ReduxValueHop.timeValidation? 
                "❌ от 0 до 100, м" :"✅ Верное значение" 
              }
              required={true}
            />
            {/* <Stack
            direction="row"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <TextField
              sx={{ margin: "10px" }}
              id="outlined-basic"
              label="Температура HopStand"
              variant="outlined"
              size="small"
              value={ReduxValueHop.temperature}
              onClick={selectHopId}
              onChange={temperatureHandler}
              onBlur={temperatureBlurValidation}
              // onMouseUp={selectHopId}
              onMouseDown={selectHopId}
              type="number"
              // disabled={!boilValidation}
              error={ReduxValueHop.temperatureValidation===undefined?false:!ReduxValueHop.temperatureValidation}
              helperText={
                ReduxValueHop.temperatureValidation===undefined?
                "⚠️  от 0 до 100, м"
                :
                !ReduxValueHop.temperatureValidation? 
                "❌ от 0 до 100, м" :"✅ Верное значение" 
              }
              required={true}
            />
            </Stack> */}
            <Slider color="secondary" sx={{ width: "90%" }} 
            // valueLabelDisplay="auto"
            min={0.1}
            max={Number(amount?.AMOUNT)}
            value={ReduxValueHop.amount}
            onChange={(event: any) => {
              dispatch(HOPSSTAND.actions.calcIBU());
              dispatch(HOPSSTAND.actions.concatIBU());
              dispatch(HOPSSTAND.actions.selectedHop(id));
              dispatch(HOPSSTAND.actions.addAmount(event.target.value));
              dispatch(HOPSSTAND.actions.amountValidation());
            }}
            />
          </Stack>
        </Accordion>
      </Paper>
    </Grid>
//         <div>
//           <h1 style={{
//           fontSize: "16px",
//           color: "black",
//           margin: "10px",
//           fontFamily: "roboto"
//         }}>Хмель на вирпул : {ReduxValueHop.name}</h1>
//       <PharamInput
//         required={true}
//         placeholder="Название хмеля"
//         value={ReduxValueHop.name}
//         onClick={selectHopId}
//         onFocus={selectHopId} 

//         onChange={nameHandler}
//         onMouseDown={selectHopId}

//         type="string"
//       />
//       <PharamInput
//         placeholder="Альфа кислота"
//         value={ReduxValueHop.alpha}
//         onClick={selectHopId}
//         onFocus={selectHopId} 

//         onChange={alphaHandler}
//         onBlur={alphaBlurValidation}
//         onMouseDown={selectHopId}

//         type="number"
//         error={ReduxValueHop.alphaValidation===undefined?false:!ReduxValueHop.alphaValidation}
//         helperText={
//           ReduxValueHop.alphaValidation===undefined?
//           "Введите Альфа кислоту от 0.1 до ∞"
//           :
//           !ReduxValueHop.alphaValidation? 
//            "❌ Альфа кислота от 0.1 до ∞" :"✅ Верное значение" 
//         }
//       />
//       <PharamInput
//         // placeholder={ReduxValueHop.amount?"":"Кол-во, г"}
//         placeholder="Кол-во, г"
//         value={ReduxValueHop.amount}
//         onClick={selectHopId}
//         onFocus={selectHopId} 

//         onChange={amountHandler}
//         onBlur={amountBlurValidation}
//         onMouseDown={selectHopId}

//         type="number"
//         error={ReduxValueHop.amountValidation===undefined?false:!ReduxValueHop.amountValidation}
//         helperText={
//           ReduxValueHop.amountValidation===undefined?
//           "Введите от 0 до ∞"
//           :
//           !ReduxValueHop.amountValidation? 
//            "❌ от 0 до ∞" :"✅ Верное значение" 
//         }
//         // InputLabelProps={{
//         //   shrink: ReduxValueHop.amount ? true : false
//         // }}
//       />

//       <PharamInput
//         placeholder="Время на вирпуле, мин"
//         value={ReduxValueHop.time}
//         onClick={selectHopId}
//         onFocus={selectHopId} 

//         onChange={timeHandler}
//         onBlur={timeBlurValidation}
//         onMouseDown={selectHopId}

//         type="number"
//         // disable={!boilValidation}
//         error={ReduxValueHop.timeValidation===undefined?false:!ReduxValueHop.timeValidation}
//         helperText={
//           ReduxValueHop.timeValidation===undefined?
//           "⚠️ Введите от 0 до 100"
//           :
//           !ReduxValueHop.timeValidation? 
//            "❌ от 0 до 100" :"✅ Верное значение" 
//         }
//       />
//       <PharamInput
//         placeholder="Температура HOPSTAND"
//         value={ReduxValueHop.temperature}
//         onClick={selectHopId}
//         onChange={temperatureHandler}
//         onBlur={temperatureBlurValidation}
//         onMouseDown={selectHopId}

//         type="number"
//         error={ReduxValueHop.temperatureValidation===undefined?false:!ReduxValueHop.temperatureValidation}
//         helperText={
//           ReduxValueHop.temperatureValidation===undefined?
//           "Введите Альфа кислоту от 0.1 до ∞"
//           :
//           !ReduxValueHop.temperatureValidation? 
//            "❌ Альфа кислота от 0 до 100" :"✅ Верное значение" 
//         }
//       />
//             <DeleteButton children={"удалить"} onClick={()=>{
//             dispatch(HOPSSTAND.actions.deleteHop(id));
//             }} />
// <h1 style={{
//           fontSize: "16px",
//           color: "purple",
//           margin: "10px",
//           fontFamily: "roboto"
//         }}>ibu {ReduxValueHop.name}: {IBU}</h1>            
//         </div>
    )
}


export default HopStand;