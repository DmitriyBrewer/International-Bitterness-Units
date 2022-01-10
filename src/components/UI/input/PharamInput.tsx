import React from "react";
import { TextField } from "@mui/material";

interface PharamInputProps {
  disable?: any;
  helperText?: string;
  error?: boolean;
  placeholder: string;
  id?: string;
  value: string | undefined;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
  type: string;
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
  type
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
        value={value}
        id={id}
        onBlur={onBlur}
      />
    </div>
  );
};

export default PharamInput;
