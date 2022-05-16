import * as React from "react";
import nextId from "react-id-generator";
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
import HOP from "../../store/reducer/hopPharamSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

interface IMenuButton {
  validWort:any;
}

export const MenuButton: React.FC<IMenuButton> = ({validWort}) => {
//Redux
  const dispatch: AppDispatch = useDispatch();
  const Hop = useSelector((state: AppState) => state.hop);
//Redux
 
  //open/close menu-button
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //open/close menu-button

  const addHopBoil = () => {
    setAnchorEl(null);
    dispatch(HOP.actions.addHopBoil(nextId("hop-")))
  }

  const addHopStand = () => {
    setAnchorEl(null);
    dispatch(HOP.actions.addHopStand(nextId("hop-")))
  }

  return (
    <Stack spacing={2} direction="row" sx={{ display: "block" }}>
      <Tooltip title="Выбрать хмель">
      <span>
      <Button
      disabled={validWort}
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
        <MenuItem onClick={addHopBoil}>На варку</MenuItem>
        <MenuItem onClick={addHopStand}>На вирпул</MenuItem>
      </Menu>
      {validWort?
      <Alert severity="error" style={{  justifyContent:'center', marginTop:'20px', marginLeft:'8px', marginRight:'8px' }}>Для продолжения корректно заполните поля !</Alert>
      :
      <React.Fragment></React.Fragment>
      }
    </Stack>
  );
}
