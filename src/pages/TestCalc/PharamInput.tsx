import React from "react";
import { TextField } from "@mui/material";

interface IProps {
  name: string;
  value: string | undefined;
  placeholder?: string;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  validation?: boolean;
  types?: string;
  initialHelperText?: string;
  errorValidationHelperText?: string;
  trueValidationHelperText?: string;
  requireds?:boolean;
  labelProps?: any;
  helperText?:any;
  disable?: boolean;
}

const PharamInput: React.FC<IProps> = ({
  name,
  value,
  placeholder,
  requireds,
  onChange,
  onBlur,
  validation,
  types,
  initialHelperText,
  errorValidationHelperText,
  trueValidationHelperText,
  labelProps,
  disable
}) => {
  const Validation = () => {
    if (validation === true) {
      return errorValidationHelperText;
    }
    if (validation === false) {
      return trueValidationHelperText;
    }
    if (value === undefined || value === '0' || value === '') {
      return initialHelperText;
    }
  };

  return (
    <React.Fragment>
      <TextField
        sx={{ margin: "10px" }}
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        size="small"
        type={types ? types : "number"}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={validation}
        helperText={Validation()}
        required={requireds === false? requireds : true}
        InputLabelProps={{shrink: labelProps}}
        disabled={disable? disable : false}
      />
    </React.Fragment>
  );
};

export default PharamInput;
