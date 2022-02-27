import React, { useEffect } from "react";
//component
import RadioButtonsGroup from "./RadioButton";
import MenuButton from "./MenuButton";
import PharamInput from "../../components/UI/input/PharamInput";
//component
//radioButton MUI
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
//radioButton MUI

//redux
import HOPS from "../../store/reducer/hopSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store/store";
//redux

const Wort: React.FC = () => {
      //redux value
      const dispatch: AppDispatch = useDispatch();
      const Hops = useSelector((state: AppState) => state.hops);
      //redux value
    //wort redux
    let ReduxValueWort = {
      volume: "",
      volumeValidation:undefined,
      destiny: "",
      destinyValidation:undefined,
      boil: "",
      boilValidation:undefined,
      concatIBU: "",
      reduceIBU: "",
      plato:undefined
    };

    Hops.forEach((element: any, index:any) => {
      if (index===0)
   {   ReduxValueWort = {
        volume: element.volume,
        destiny: element.destiny,
        boil: element.boil,
        concatIBU: element.concatIBU,
        reduceIBU: element.reduceIBU,
        volumeValidation:element.volumeValidation,
        destinyValidation:element.destinyValidation,
        boilValidation:element.boilValidation,
        plato:element.plato
      }}
    });
//wort redux
    //state radio button
    const [value, setValue] = React.useState({radioButton:'plato'})
    console.log(value.radioButton);
    //state

    //handlers
    const radioHandler = (event: any) => {
      setValue({...value, radioButton:event.target.value})
      dispatch(HOPS.actions.selectDestiny(value.radioButton));
      if(value.radioButton !== 'plato')
        {
          dispatch(HOPS.actions.toPlato());} 
        if(value.radioButton !== 'sg')
        {
          dispatch(HOPS.actions.toSG());}
    };

    const volumeHandler = (event: any) => {
      dispatch(HOPS.actions.addVolume(event.target.value));
    };
    const volumeBlurValidation = () => {
      dispatch(HOPS.actions.calcIBU());
      dispatch(HOPS.actions.concatIBU());
      dispatch(HOPS.actions.volumeValidation());
    }

    const destinyHandler = (event: any) => {
      dispatch(HOPS.actions.addDestiny(event.target.value));
    };
    const destinyBlurValidation = () => {
      dispatch(HOPS.actions.calcIBU());
      dispatch(HOPS.actions.concatIBU());
      dispatch(HOPS.actions.destinyValidation());
    }

    const boilHandler = (event: any) => {
      dispatch(HOPS.actions.addBoil(event.target.value));
    };
    const boilBlurValidation = () => {
      dispatch(HOPS.actions.calcIBU());
      dispatch(HOPS.actions.concatIBU());
      dispatch(HOPS.actions.boilValidation());
    }

    //handlers

console.log(value);


  return (
    <Grid item>
      <Paper>
        <Typography variant="h5" component="h2">
          Параметры сусла
        </Typography>
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
            label="Объём сусла, л"
            variant="outlined"
            size="small"
            type="number"
            error={ReduxValueWort.volumeValidation===undefined?false:!ReduxValueWort.volumeValidation}
            helperText={
              ReduxValueWort.volumeValidation===undefined?
              "Введите объём от 0 до 100 000, л"
              :
              !ReduxValueWort.volumeValidation? 
              "❌ Объём от 0 до 100 000, л" :"✅ Верное значение" 
            }
            value={ReduxValueWort.volume}
            onChange={volumeHandler}
            onBlur={volumeBlurValidation}
            autoFocus={true}
          />
          <TextField
            sx={{ margin: "10px" }}
            id="outlined-basic"
            label="Время кипячения, мин"
            variant="outlined"
            size="small"
            type="number"
            error={ReduxValueWort.boilValidation===undefined?false:!ReduxValueWort.boilValidation}
            helperText={
              ReduxValueWort.boilValidation===undefined?
              "Введите кипячение от 0 до 200 мин"
              :
              !ReduxValueWort.boilValidation?
              "❌ Кипячение от 0 до 200 мин" : "✅ Верное значение"
            }
            value={ReduxValueWort.boil}
            onChange={boilHandler}
            onBlur={boilBlurValidation}
          />
        </Stack>
        <Stack>
          <RadioButtonsGroup value={value.radioButton}
          onChange={radioHandler}/>
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
            label="Плотность сусла"
            variant="outlined"
            size="small"
            type="number"
            error={ReduxValueWort.destinyValidation===undefined?false:!ReduxValueWort.destinyValidation}
            helperText={
              value.radioButton === 'plato' ?
                ReduxValueWort.destinyValidation===undefined?
                  "Введите Plato от 0.5 до 40"
                  :
                  !ReduxValueWort.destinyValidation?"❌ Plato от 0.5 до 40":"✅ Верное значение"
                  :
                  ReduxValueWort.destinyValidation===undefined?
                  "Введите Plato от 1.002 до 1.179"
                  :
                  !ReduxValueWort.destinyValidation?"❌ Plato от 1.002 до 1.179":"✅ Верное значение"
            }
            value={ReduxValueWort.destiny}
            onChange={destinyHandler}
            onBlur={destinyBlurValidation}
          />
        </Stack>
        <Stack>
          <MenuButton />
        </Stack>
      </Paper>
    </Grid>
    // <div>
    //   <h1 style={{ textAlign: "center", fontFamily: "roboto" }}>
    //     Калькулятор IBU
    //   </h1>
    //   <PharamInput
    //     placeholder="Объем сусла, л"
    //     id="wort"
    //     type="number"
    //     error={ReduxValueWort.volumeValidation===undefined?false:!ReduxValueWort.volumeValidation}
    //     helperText={
    //       ReduxValueWort.volumeValidation===undefined?
    //       "Введите объём от 0 до 100 000, л"
    //       :
    //       !ReduxValueWort.volumeValidation? 
    //        "❌ Объём от 0 до 100 000, л" :"✅ Верное значение" 
    //     }
    //     value={ReduxValueWort.volume}
    //     onChange={volumeHandler}
    //     onBlur={volumeBlurValidation}
    //     autoFocus={true}
    //   />
    //   <PharamInput
    //     placeholder="Время кипячения"
    //     id="boil"
    //     type="number"
    //     error={ReduxValueWort.boilValidation===undefined?false:!ReduxValueWort.boilValidation}
    //     helperText={
    //       ReduxValueWort.boilValidation===undefined?
    //       "Введите кипячение от 0 до 200 мин"
    //       :
    //       !ReduxValueWort.boilValidation?
    //       "❌ Кипячение от 0 до 200 мин" : "✅ Верное значение"
    //     }
    //     value={ReduxValueWort.boil}
    //     onChange={boilHandler}
    //     onBlur={boilBlurValidation}
    //   />
    //   <FormControl component="fieldset" style={{ display:'flex', flexDirection:'column', justifyContent:'center'}}>
    //     <FormLabel component="legend" style={{fontSize:'12px'}}>Выберите плотность</FormLabel>
    //     <RadioGroup
    //     row
    //       aria-label="gravity"
    //       name="controlled-radio-buttons-group"
    //       value={value.radioButton}
    //       onChange={radioHandler}
    //       style={{marginRight:"35%",marginLeft:"35%"}}
    //     >
    //       <FormControlLabel 
    //       style={{margin:'0px'}}
    //       value="plato" 
    //       control={<Radio  size="small"  />} label="Plato"
    //       />
    //       <FormControlLabel 
    //       style={{margin:'0px'}}
    //       value="sg" 
    //       control={<Radio  size="small"/>} label="SG" 
    //       />
    //     </RadioGroup>
    //   </FormControl>
    //   <PharamInput
    //     placeholder={'Плотность'}
    //     id="destiny"
    //     type="number"
    //     error={ReduxValueWort.destinyValidation===undefined?false:!ReduxValueWort.destinyValidation}
    //     helperText={
    //       value.radioButton === 'plato' ?
    //         ReduxValueWort.destinyValidation===undefined?
    //           "Введите Plato от 0.5 до 40"
    //           :
    //           !ReduxValueWort.destinyValidation?"❌ Plato от 0.5 до 40":"✅ Верное значение"
    //     :
    //           ReduxValueWort.destinyValidation===undefined?
    //           "Введите Plato от 1.002 до 1.179"
    //           :
    //           !ReduxValueWort.destinyValidation?"❌ Plato от 1.002 до 1.179":"✅ Верное значение"
    //     }
    //     value={ReduxValueWort.destiny}
    //     onChange={destinyHandler}
    //     onBlur={destinyBlurValidation}
    //   />
    // </div>
  );
};

export default Wort;
