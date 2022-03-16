import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

//redux
import { useSelector, useDispatch } from "react-redux";
import HOPS from "../../store/reducer/hopSlice";
import HOPSSTAND from "../../store/reducer/hopStandSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

export default function MenuButton() {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hops = useSelector((state: AppState) => state.hops);
  const HopsStand = useSelector((state: AppState) => state.hopStand);
  console.log(Hops);
  console.log(HopsStand);
  //Redux
  //wort redux
  let ReduxValueWort = {
    volume: "",
    destiny: "",
    boil: "",
    concatIBU: "",
    reduceIBU: ""
  };
  Hops.forEach((element: any) => {
    ReduxValueWort = {
      volume: element.volume,
      destiny: element.destiny,
      boil: element.boil,
      concatIBU: element.concatIBU,
      reduceIBU: element.reduceIBU
    };
  });
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
    console.log("boil");
    setAnchorEl(null);
    //addHop
    event.preventDefault()
    dispatch(HOPS.actions.addHop('boil'));
    //addHop
    // dispatch(HOPS.actions.addIBU(IBU));
    //Validation
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.volumeValidation());
    dispatch(HOPS.actions.destinyValidation());
    dispatch(HOPS.actions.boilValidation());
    //Validation
  };
  const handleHopStand = (event:any) => {
    console.log("HopStand");
    setAnchorEl(null);
    event.preventDefault()
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    // dispatch(HOPSSTAND.actions.addHop('hopstand'))
    // dispatch(HOPS.actions.calcIBUHopStand());
    // dispatch(HOPS.actions.concatIBUHopStand());
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
      <Button
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
    </Stack>
  );
}
