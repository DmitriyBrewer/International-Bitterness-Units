import React, { useState } from "react";
import PharamInput from "./PharamInput";

import { toSG } from "../CalculatorIBU/CalcFunc";
import { toPlato } from "../CalculatorIBU/CalcFunc";
import {destinyValidations,volumeValidations,boilValidations,wortValidations,helperTextWort} from "./ValidationPharam";
import RadioButtonsGroup from "./RadioButtonGroup";
import {MenuButton} from "./MenuButton";

// MUI
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
// MUI

//redux
import { useSelector, useDispatch } from "react-redux";
import HOP from "../../store/reducer/hopPharamSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

const Wort = () => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hop = useSelector((state: AppState) => state.hop);
  //Redux

  const [pharam, setPharam] = React.useState(Hop.wort);
  // const { volume, destiny } = pharam;//деструктуризация для более простого чтения

  React.useEffect(()=>{
      setPharam({
        ...pharam,
        volumeValidation: volumeValidations(pharam.volume),
        boilValidation: boilValidations(pharam.boil),
        destinyValidation: destinyValidations(pharam.destiny, pharam.destinyType)
      });
  },[])

  React.useMemo(() => {
    setTimeout(() => {
      dispatch(HOP.actions.getPharamWort(pharam));
    }, 0);
  }, [pharam]);

  React.useMemo(() => {
    if(pharam.destinyValidation === false) {
      if (pharam.destinyType === 'sg') {
        setPharam({ ...pharam, destiny: toSG(pharam.destiny) });
      }
      if (pharam.destinyType === 'plato') {
        setPharam({ ...pharam, destiny: toPlato(pharam.destiny) });
      }
    } else setPharam({ ...pharam, destiny: pharam.destiny });
    
  }, [pharam.destinyType]);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setPharam((prevState: any) => {
      return { ...prevState, [name]: value };
    });
  }

  const radioHandler = (event: any) => {
      setPharam({ ...pharam, destinyType: event.target.value });
  };
  
  const ValidationVolume = () => {
    setPharam({
      ...pharam,
      volumeValidation: volumeValidations(pharam.volume)
    });
  };

  const ValidationDestiny = () => {
    setPharam({
      ...pharam,
      destinyValidation: destinyValidations(pharam.destiny, pharam.destinyType)
    });
  };

  const ValidationBoil = () => {
    setPharam({ ...pharam, boilValidation: boilValidations(pharam.boil) });
  };

  const wortValidation = wortValidations(pharam.volumeValidation,pharam.destinyValidation,pharam.boilValidation, pharam.volume, pharam.destiny, pharam.boil)

  const helperTextDestiny = pharam.destinyType === 'plato' ? helperTextWort.destinyPlato : helperTextWort.destinySG
  const valueDestiny = pharam.destinyType === 'plato' ? pharam.destiny : toSG(pharam.destiny)

  console.log(pharam);
  
    
  return (
    <React.Fragment>
      <Grid item>
        <Paper elevation={3} sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
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
            <PharamInput
              name="volume"
              value={pharam.volume}
              placeholder="Объём сусла, л"
              onChange={handleChange}
              onBlur={ValidationVolume}
              validation={pharam.volumeValidation}
              helperText ={helperTextWort.volume}
            />
            <PharamInput
              name="boil"
              value={pharam.boil}
              placeholder="Время кипячения, мин"
              onChange={handleChange}
              onBlur={ValidationBoil}
              validation={pharam.boilValidation}
              helperText ={helperTextWort.boil}
            />
          </Stack>
          <Stack>
            <RadioButtonsGroup
              value={pharam.destinyType}
              onChange={radioHandler}
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
            <PharamInput
              name="destiny"
              value={pharam.destiny}
              placeholder="Плотность сусла"
              onChange={handleChange}
              onBlur={ValidationDestiny}
              validation={pharam.destinyValidation}
              helperText ={helperTextDestiny}
            />
          </Stack>
          <Stack>
            <MenuButton validWort={wortValidation}/>
          </Stack>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default Wort;
