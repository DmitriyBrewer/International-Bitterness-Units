import React from "react";
import { TextField } from "@mui/material";

interface PharamInputProps {
  disable?: any;
  helperText?: string;
  error?: boolean;
  placeholder?: string;
  id?: string;
  value?: string | undefined;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  onClick?: (event: any) => void;
  onMouseOver?: (event: any) => void;
  onMouseOut?: (event: any) => void;
  autoFocus?:boolean;
  type?: string;
  required?:boolean;
  InputLabelProps?:any;
}
const PharamInput: React.FC<PharamInputProps> = ({
  disable,
  helperText,
  error,
  placeholder,
  onChange,
  value,
  id,
  onBlur,
  onClick,
  onMouseOver,
  onMouseOut,
  autoFocus,
  required,
  type,
  InputLabelProps
}) => {
  return (
    <div style={{ margin: "10px", display: "inline-flex" }}>
      <TextField
        disabled={disable}
        error={error}
        helperText={helperText}
        label={placeholder}
        variant="outlined"
        size="small"
        color="secondary"
        type={type}
        onChange={onChange}
        onClick={onClick}
        value={value}
        id={id}
        onBlur={onBlur}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        autoFocus={autoFocus}
        required={required}
        InputLabelProps={InputLabelProps}
      />
    </div>
  );
};

export default PharamInput;
