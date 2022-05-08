import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface IRadio {
  value?: any;
  onChange?:any;
}

const RadioButtonsGroup: React.FC<IRadio> = ({value, onChange}) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        Выберите плотность
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Plato"
        name="radio-buttons-group"
        row
        sx={{ justifyContent: "center" }} // radio по центру Paper
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="plato" control={<Radio />} label="Plato" />
        <FormControlLabel value="sg" control={<Radio />} label="SG" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;
