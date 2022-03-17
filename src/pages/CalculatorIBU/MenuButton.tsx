import * as React from "react";
//MUI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
//MUI

//redux
import { useSelector, useDispatch } from "react-redux";
import HOPS from "../../store/reducer/hopSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

export default function MenuButton() {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hops = useSelector((state: AppState) => state.hops);
  console.log(Hops);
  //Redux
  //wort redux
  let ReduxValueWort = {
    volume: "",
    destiny: "",
    boil: "",
    concatIBU: "",
    reduceIBU: "", 
    volumeValidation: undefined,
    boilValidation: undefined,
    checkError:undefined

  };
  Hops.forEach((element: any) => {
    ReduxValueWort = {
      volume: element.volume,
      destiny: element.destiny,
      boil: element.boil,
      concatIBU: element.concatIBU,
      reduceIBU: element.reduceIBU,
      volumeValidation: element.volumeValidation,
      boilValidation: element.boilValidation,
      checkError: Hops[0].checkError
    };
  });

  // const Error = Hops[0].boilValidation? Hops[0].checkError : 0

  console.log(ReduxValueWort.volumeValidation)
  //wort redux
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleBoil = (event:any) => {
    // console.log("boil");
    setAnchorEl(null);
    //addHop
    event.preventDefault()
    dispatch(HOPS.actions.addHop('boil'));
    //addHop
    //Validation
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.volumeValidation());
    dispatch(HOPS.actions.destinyValidation());
    dispatch(HOPS.actions.boilValidation());
    //Validation
  };
  const handleHopStand = (event:any) => {
    // console.log("HopStand");
    setAnchorEl(null);
    event.preventDefault()
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.addHop('hopstand'))
    dispatch(HOPS.actions.volumeValidation());
    dispatch(HOPS.actions.destinyValidation());
    dispatch(HOPS.actions.boilValidation());
  };
  const handleDryHop = () => {
    console.log("HopStand");
    setAnchorEl(null);
  };

  return (
    <Stack spacing={2} direction="row" sx={{ display: "block" }}>
      <Tooltip title="Выбрать хмель">
      <span>
      <Button
      disabled={!ReduxValueWort.checkError? true : false}
        variant="contained"
        id="basic-button"
        aria-controls={open ? "Sbasic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="secondary"
      >
        Добавить хмель
      </Button>
      </span>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={handleBoil}>На варку</MenuItem>
        <MenuItem onClick={handleHopStand}>На вирпул</MenuItem>
        {/* <MenuItem onClick={handleDryHop}>На сухое охмеление</MenuItem> */}
      </Menu>
      {!ReduxValueWort.checkError? 
      <Alert severity="error" style={{  justifyContent:'center', marginTop:'20px', marginLeft:'8px', marginRight:'8px' }}>Для продолжения корректно заполните поля !</Alert>
      :
      <span></span>
    }
    </Stack>
  );
}
