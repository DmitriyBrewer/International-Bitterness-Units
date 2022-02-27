import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
//redux
import { useSelector, useDispatch } from "react-redux";
import HOPS from "../../../store/reducer/hopSlice";
import HOPSSTAND from "../../../store/reducer/hopStandSlice";
import { AppDispatch, AppState, RootState } from "../../../store/store";
//redux

const options = ['Добавить хмель на варку', 'Добавить хмель на вирпул', 'Добавить хмель на сухое охмеление'];

interface Props {
  }


 const SplitButton: React.FC<Props> = ()=> {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  //redux
  const dispatch: AppDispatch = useDispatch();
  //redux

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    if (`${options[selectedIndex]}` === 'Добавить хмель на варку') {
        dispatch(HOPS.actions.addHop());
        dispatch(HOPS.actions.calcIBU());
        dispatch(HOPS.actions.concatIBU());
        dispatch(HOPS.actions.volumeValidation());
        dispatch(HOPS.actions.destinyValidation());
        dispatch(HOPS.actions.boilValidation());
    }
    if (`${options[selectedIndex]}` === 'Добавить хмель на вирпул') {
        dispatch(HOPS.actions.volumeValidation());
        dispatch(HOPS.actions.destinyValidation());
        dispatch(HOPS.actions.boilValidation());
        dispatch(HOPSSTAND.actions.addHop())
    }
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);    
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" >
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu"  >
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}

export default SplitButton;