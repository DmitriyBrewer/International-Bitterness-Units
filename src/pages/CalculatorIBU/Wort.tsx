import React, { useEffect } from "react";
//component
import RadioButtonsGroup from "./RadioButton";
import MenuButton from "./MenuButton";
import PharamInput from "./PharamInput";
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

import {destinyValidations, volumeValidations, boilValidations} from '../TestCalc/ValidationPharam'
import {toSG} from './CalcFunc'
import {toPlato} from './CalcFunc'

const Wort: React.FC = () => {

  return (
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
          <PharamInput name='volume' value={'1000'} onChange={()=>{}} onBlur={()=>{}} validation={true}
          initialHelperText='Объём от 0 до 100 000, л'
          errorValidationHelperText='❌ Объём от 0 до 100 000, л'
          trueValidationHelperText='✅ Верное значение'
          />
        </Stack>
        <Stack>
          <RadioButtonsGroup 
          // value={value.radioButton}
          // onChange={radioHandler}
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
        </Stack>
        <Stack>
          <MenuButton />
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Wort;
