import React from "react";
import { TextField } from "@mui/material";
// import { Checkbox } from '@mui/material';
import { Switch, Slider } from '@mui/material';

//theme
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { green, purple } from '@mui/material/colors';


//theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: green[500],
    },
  },
});
//theme


interface SliderProps {
  value: any;
  onChange: (event: any) => void;
  onClick?: (event: any) => void;
  color: any;
}
export interface ISlider {
  AMOUNT: string;
}


const SliderMUI: React.FC<SliderProps> = ({ value, onChange,onClick, color }) => {

  const [amount,setAmount] = React.useState<ISlider>({AMOUNT: '5000'})

  const [checked, setChecked] = React.useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };


  const amountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount({ ...amount, AMOUNT: event.target.value });
  };


  return (
    <div>
      <ThemeProvider theme={theme}>
      <Switch 
      checked={checked}       
      onChange={handleCheckbox}
      color='primary'
      />
      <TextField 
      style={{width:'150px'}}
      disabled = {!checked}
      id="filled-basic"
      label="Max-IBU" 
      variant="outlined"
      size="small"
      color="primary"
      placeholder="max"
      value={amount?.AMOUNT}
      onChange={amountHandler}
      type="number"/>
      <div>
      <Slider
        color={color}
        min={0.1}
        // max={5000}
        max={Number(amount?.AMOUNT)}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{
          width: "50%",
        }}
        defaultValue={0}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      </div>
      </ThemeProvider>
    </div>
  );
};

export default SliderMUI;
