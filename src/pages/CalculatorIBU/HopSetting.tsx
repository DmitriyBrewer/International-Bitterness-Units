import * as React from "react";
//MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Switch from "@mui/material/Switch";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
//MUI

export interface IProps {
  // AMOUNT: string;
  value: any;
  onChange: any;
}

const HopSetting: React.FC<IProps> = ({value, onChange}) => {
  const [open, setOpen] = React.useState(false);

  //checked
  const [checked, setChecked] = React.useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  console.log(checked);
  
  //checked
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Настроить" arrow>
        <IconButton aria-label="sliderSetting" onClick={handleClickOpen}>
          <SettingsIcon onClick={handleClickOpen} />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Изменить максимальное значения слайдера"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Задать максимальное значение для изменения слайдера
          </DialogContentText>
          <Switch color="primary" checked={checked} onChange={handleCheckbox} />
          <TextField
            disabled={!checked}
            style={{ width: "150px" }}
            id="filled-basic"
            label="Max-IBU"
            variant="outlined"
            size="small"
            color="primary"
            type="number"
            value={value}
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default HopSetting;