import React from "react";
import { TextField } from "@mui/material";
import {helperTextValidations} from './ValidationPharam'

interface IProps {
  name: string;
  value: string | undefined;
  placeholder?: string;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  validation?: boolean;
  types?: string;
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
  labelProps,
  disable,
  helperText
}) => {
  const errorHelperText =  helperText? helperText.errorText:''
  const validHelperText =  helperText? helperText.validText:''
  const initialHelperText =  helperText? helperText.initialText:''

  const helpText = helperTextValidations(validation, value, errorHelperText, validHelperText, initialHelperText)
  
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
        helperText={helpText}
        required={requireds === false? requireds : true}
        InputLabelProps={{shrink: labelProps}}
        disabled={disable}
      />
    </React.Fragment>
  );
};

export default PharamInput;
