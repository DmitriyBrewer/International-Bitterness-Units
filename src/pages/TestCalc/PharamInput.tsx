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
}

const PharamInput: React.FC<IProps> = ({
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  validation,
  types,
  initialHelperText,
  errorValidationHelperText,
  trueValidationHelperText
}) => {
  const Validation = () => {
    if (validation === false) {
      return errorValidationHelperText;
    }
    if (validation === true) {
      return trueValidationHelperText;
    }
    if (value === undefined) {
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
        // error={validation === undefined ? false: !validation}
        helperText={Validation()}
        required={true}
      />
    </React.Fragment>
  );
};

export default PharamInput;
