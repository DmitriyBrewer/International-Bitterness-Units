import React from "react";
import { Slider } from "@mui/material";

interface SliderProps {
  value: any;
  onChange: (event: any) => void;
  color: any;
}
const SliderMUI: React.FC<SliderProps> = ({ value, onChange, color }) => {
  return (
    <div>
      <Slider
        color={color}
        min={0}
        max={15000}
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
  );
};

export default SliderMUI;
