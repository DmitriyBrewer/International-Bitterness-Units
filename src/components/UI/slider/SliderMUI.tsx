import React from "react";
import { TextField } from "@mui/material";
// import { Checkbox } from '@mui/material';
import { Switch, Slider } from '@mui/material';




interface SliderProps {
  value: any;
  onChange: (event: any) => void;
  color: any;
}

export interface ISlider {
  AMOUNT: string;

}


const SliderMUI: React.FC<SliderProps> = ({ value, onChange, color }) => {

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
      <Switch 
      checked={checked}       
      onChange={handleCheckbox}
      color='info'
      />

      {/* <Checkbox  
      checked={checked}       
      onChange={handleCheckbox}
      inputProps={{ 'aria-label': 'controlled' }}
/> */}
      <TextField 
      style={{width:'150px'}}
      disabled = {!checked}
      id="filled-basic"
      label="Max-IBU" 
      variant="outlined"
      size="small"
      color="info"
      placeholder="max"
      value={amount?.AMOUNT}
      onChange={amountHandler}
      type="number"/>
      <div>
      <Slider
        color={color}
        min={0}
        // max={5000}
        max={Number(amount?.AMOUNT)}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{
          width: "50%",
          color: "success.purple"
        }}
        defaultValue={0}
        value={value}
        onChange={onChange}
      />
      </div>
    </div>
  );
};

export default SliderMUI;
