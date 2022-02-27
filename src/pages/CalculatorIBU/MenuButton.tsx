import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleBoil = () => {
    console.log("boil");
    setAnchorEl(null);
  };
  const handleHopStand = () => {
    console.log("HopStand");
    setAnchorEl(null);
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
        <MenuItem onClick={handleDryHop}>На сухое охмеление</MenuItem>
      </Menu>
    </Stack>
  );
}
