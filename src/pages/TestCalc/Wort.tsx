import React, { useState } from "react";
import PharamInput from "./PharamInput";

import { toSG } from "../CalculatorIBU/CalcFunc";
import { toPlato } from "../CalculatorIBU/CalcFunc";
import {destinyValidations,volumeValidations,boilValidations} from "./ValidationPharam";
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

  React.useMemo(() => {
    setTimeout(() => {
      dispatch(HOP.actions.getPharamWort(pharam));
    }, 0);
  }, [pharam]);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setPharam((prevState: any) => {
      return { ...prevState, [name]: value };
    });
  }

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

  //handlers
  const radioHandler = (event: any) => {
    setPharam({ ...pharam, destinyType: event.target.value });
    if (pharam.destinyType !== "sg") {
      setPharam({
        ...pharam,
        destiny: toSG(pharam.destiny),
        destinyType: event.target.value,
        destinyValidation: destinyValidations(pharam.destiny, pharam.destinyType)
      });
    }
    if (pharam.destinyType !== "plato") {
      setPharam({
        ...pharam,
        destiny: toPlato(pharam.destiny),
        destinyType: event.target.value,
        destinyValidation: destinyValidations(pharam.destiny, pharam.destinyType)
      });
    }
  };

  const wortValidation = pharam.volumeValidation||pharam.destinyValidation||pharam.boilValidation

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
              initialHelperText={"Объём от 0 до 100 000, л"}
              errorValidationHelperText={"❌ Объём от 0 до 100 000, л"}
              trueValidationHelperText={"✅ Верное значение"}
            />
            <PharamInput
              name="boil"
              value={pharam.boil}
              placeholder="Время кипячения, мин"
              onChange={handleChange}
              onBlur={ValidationBoil}
              validation={pharam.boilValidation}
              initialHelperText="Кипячение от 0 до 200 мин"
              errorValidationHelperText="❌ Кипячение от 0 до 200 мин"
              trueValidationHelperText="✅ Верное значение"
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
              initialHelperText={pharam.destinyType==='plato'?"Введите Plato от 0.5 до 40":"Введите SG от 1.002 до 1.179"}
              errorValidationHelperText={pharam.destinyType==='plato'?"❌ Plato от 0.5 до 40":'❌ SG от 1.002 до 1.179'}
              trueValidationHelperText={pharam.destinyType==='plato'?"✅ Верное значение":"Верное значение"}
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
