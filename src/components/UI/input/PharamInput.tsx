import React from "react";
import { TextField } from "@mui/material";

interface PharamInputProps {
  placeholder: string;
  id?: string;
  value: string | undefined;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
  type: string;
}
const PharamInput: React.FC<PharamInputProps> = ({
  placeholder,
  onChange,
  value,
  id,
  onBlur,
  type
}) => {
  return (
    <div style={{ margin: "10px", display: "inline-flex" }}>
      <TextField
        label={placeholder}
        variant="outlined"
        size="small"
        color="secondary"
        type={type}
        onChange={onChange}
        value={value}
        id={id}
        onBlur={onBlur}
      />
    </div>
  );
};

export default PharamInput;
