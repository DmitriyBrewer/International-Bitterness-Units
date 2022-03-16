import * as React from "react";
//component
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
import HOPS from "../../store/reducer/hopSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store/store";
//redux


interface IHop {
  id:any
}

export interface ISlider {
  AMOUNT: string;
}

export const Hop: React.FC<IHop> = ({id
}) => {
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
  const Hops = useSelector((state: AppState) => state.hops);
  //redux value
  //wort
  const boilValidation = Hops.length > 0 ? Hops[0].boilValidation : "";

  let ReduxValueWort = { volume: "", destiny: "", boil: "", boilValidation:undefined, reduceIBU: "",concatIBU: ""

};
  Hops.forEach((element: any, index:any) => {
    if (index===0)
    {ReduxValueWort = {
        volume: element.volume,
        destiny: element.destiny,
        boil: element.boil,
        boilValidation:undefined,
        reduceIBU: element.reduceIBU,
        concatIBU: element.concatIBU
      };
    }
  });
  //wort
  //hop
  let ReduxValueHop = { name: "", alpha: "", amount: 0, time: "", ibu: "",ibuHopStand:"", temperature:"", alphaValidation: undefined, timeValidation: undefined,amountValidation: undefined, temperatureValidation:undefined, hopType:""  };
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
        temperatureValidation: element.temperatureValidation,
        hopType: element.hopType,
        ibuHopStand: element.ibuHopStand
      };
    }
  });
  //hop

  //selectIDHop
  const selectHopId = (event:any) => {
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
    dispatch(HOPS.actions.addTimeHopStand(event.target.value));
  };
  const timeBlurValidation = () => {
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.timeValidationHopStand());
  }
  const temperatureHandler = (event: any) => {
    dispatch(HOPS.actions.addTemperature(event.target.value));
  };
  const temperatureBlurValidation = () => {
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.temperatureValidation());
  }
  //handlers
  //redux value
  return (
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
                dispatch(HOPS.actions.deleteHop(id))
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
              onMouseDown={selectHopId}
              type="number"
              error={ReduxValueHop.timeValidation===undefined?false:!ReduxValueHop.timeValidation}
              helperText={
                ReduxValueHop.timeValidation===undefined?
                " от 0 до 100, м"
                :
                !ReduxValueHop.timeValidation? 
                "❌ от 0 до 100, м" : "✅ Верное значение" 
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
                " от 0 до 100, м"
                :
                !ReduxValueHop.temperatureValidation? 
                "❌ от 0 до 100, м" :"✅ Верное значение" 
              }
              required={true}
            />
              </Stack>
            <Slider color="secondary" sx={{ width: "90%" }} 
            // valueLabelDisplay="auto"
            min={0.1}
            max={Number(amount?.AMOUNT)}
            value={ReduxValueHop.amount}
            onChange={(event: any) => {
              // dispatch(HOPS.actions.calcIBUHopStand());
              dispatch(HOPS.actions.concatIBU());
              dispatch(HOPS.actions.selectedHop(id));
              dispatch(HOPS.actions.addAmount(event.target.value));
              dispatch(HOPS.actions.amountValidation());
            }}
            />
        </Accordion>
      </Paper>
    </Grid>
  );
};

export default Hop;