import React, {useState} from 'react'
import Slider from "@mui/material/Slider";
import PharamInput from './PharamInput';
import nextId from "react-id-generator";

import {toSG} from '../CalculatorIBU/CalcFunc'
import {toPlato} from '../CalculatorIBU/CalcFunc'
import {destinyValidations, volumeValidations, boilValidations} from './ValidationPharam'

//radioButton MUI
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from '@mui/material/Tooltip';
//radioButton MUI

//redux
import { useSelector, useDispatch } from "react-redux";
import HOP from "../../store/reducer/hopPharamSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

const Wort = () => {
  
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hop = useSelector((state: AppState) => state.hop);
  //Redux

  const [pharam, setPharam] = React.useState(Hop.wort);
  // const { volume, destiny } = pharam;//деструктуризация для более простого чтения

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

  React.useMemo(()=>{
    // dispatch(HOP.actions.changeDestiny(pharam.destinyType))
    setTimeout(()=>{
      dispatch(HOP.actions.getPharamWort(pharam))
    },0)
  },[pharam])

  function handleChange (e:any) {
    const {name, value} = e.target
    setPharam((prevState:any)=>{
      return {...prevState, [name]: value}
    })
}

const ValidationVolume = () => {
  setPharam({...pharam, volumeValidation:volumeValidations(pharam.volume)})
}

const ValidationDestiny = () => {
  setPharam({...pharam, destinyValidation:destinyValidations(pharam.destiny, pharam.destinyType)})
}

const ValidationBoil = () => {
  setPharam({...pharam, boilValidation:boilValidations(pharam.boil)})
}

    //handlers
    const radioHandler = (event: any) => {
      setPharam({...pharam, destinyType:event.target.value})
      if (pharam.destinyType !== 'sg') {
        setPharam({...pharam, destiny:toSG(pharam.destiny), destinyType:event.target.value})
      }
      if (pharam.destinyType !== 'plato') {
        setPharam({...pharam, destiny:toPlato(pharam.destiny), destinyType:event.target.value})
      }
    }

  const addHopBoil = () => {
    setAnchorEl(null);
    dispatch(HOP.actions.addHopBoil(nextId("hop-")))
  }

  const addHopStand = () => {
    setAnchorEl(null);
    dispatch(HOP.actions.addHopStand(nextId("hop-")))
  }

  return (
    <React.Fragment>
    <main>
    <h1>Введите параметры сусла</h1>
    
     <PharamInput name='volume' value={pharam.volume} onChange={handleChange} onBlur={ValidationVolume} validation={pharam.volumeValidation}/>

     <PharamInput name='destiny' value={pharam.destiny} onChange={handleChange} onBlur={ValidationDestiny} validation={pharam.destinyValidation}/>

     <PharamInput name='boil' value={pharam.boil} onChange={handleChange} onBlur={ValidationBoil} validation={pharam.boilValidation}/>

    </main>
    <Slider color="secondary" sx={{ width: "90%" }} 
            min={0}
            max={Number(50)}
            value={Number(pharam.destiny)}
            onChange={handleChange}
            name='destiny'
            />

            <RadioGroup
              defaultValue={pharam.destinyType}
              onChange={radioHandler}
              name='destinyType'
              value={pharam.destinyType}
            >
              <FormControlLabel value='plato' control={<Radio />} label="Plato"/>
              <FormControlLabel value='sg' control={<Radio />} label="SG" />
            </RadioGroup>

            <Tooltip title="Выбрать хмель">
            <Button
      disabled={false}
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
    </React.Fragment>
  );
};

export default Wort;