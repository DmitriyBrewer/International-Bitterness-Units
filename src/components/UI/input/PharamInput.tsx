import React from "react";
import { TextField } from "@mui/material";
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
  onMouseUp?: (event: any) => void;
  onMouseDown?: (event: any) => void;
  onFocus?:(event: any) => void;
  onMouseOut?: (event: any) => void;
  autoFocus?:boolean;
  type?: string;
  required?:boolean;
  InputLabelProps?:any;
  tabIndex?:any;
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
  onMouseUp,
  required,
  onMouseDown,
  type,
  onFocus,
  tabIndex,
  InputLabelProps
}) => {
  return (
    <div style={{ margin: "10px", display: "inline-flex" }}>
       <ThemeProvider theme={theme}>
      <TextField
        disabled={disable}
        error={error}
        helperText={helperText}
        label={placeholder}
        variant="outlined"
        size="small"
        color="primary"
        type={type}
        onChange={onChange}
        onClick={onClick}
        value={value}
        id={id}
        onBlur={onBlur}
        onMouseOver={onMouseOver} //при наведении
        onMouseOut={onMouseOut}
        autoFocus={autoFocus} // фокус при загрузке страницы
        required={required}
        InputLabelProps={InputLabelProps}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown} 
        onFocus={onFocus} //при выделении с клавиатуры
        tabIndex={tabIndex}
      />
      </ThemeProvider>
    </div>
  );
};

export default PharamInput;
