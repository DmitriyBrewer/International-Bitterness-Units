import React, { useState } from "react";
import PharamInput from "./PharamInput";
import AccordionComponent from "./AccordionComponent";

//MUI
import { Typography } from "@mui/material";
//MUI

//redux
import { useSelector, useDispatch } from "react-redux";
import HOP from "../../store/reducer/hopPharamSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

import { Calc } from "../CalculatorIBU/CalcFunc";
import {
    alphaValidations,
    amountValidations,
    timeValidations,
    timeHopValidations,
    temperatureValidations,
    ibuValidations,
    textHopIBU,
    disableTimeInput,
    helperTextHop
  } from "./ValidationPharam";

interface IHop {
    hopElement: {
      id: string,
      nameHop: string | undefined,
      alpha: string | undefined,
      amount: string | undefined,
      time: string | undefined,
      hopStand: string | undefined,
      alphaValidation: boolean | undefined,
      amountValidation: boolean | undefined,
      timeValidation: boolean | undefined,
      hopStandValidation: boolean | undefined,
      ibu: undefined | number | string
    };
    hopStand: boolean;
  }

export const HopPattern: React.FC<IHop> = ({ hopElement,hopStand }) => {
    //Redux
    const dispatch: AppDispatch = useDispatch();
    const Hop = useSelector((state: AppState) => state.hop);
    //Redux
  
    const [pharam, setPharam] = React.useState(hopElement);
    // console.log(pharam);
    console.log(Hop);
    
    const hopIBU = Calc(
      pharam.nameHop,
      pharam.alpha,
      pharam.amount,
      pharam.time,
      Hop.wort.volume,
      Hop.wort.destiny,
      Hop.wort.boil
    );
    
    const allValidation =
      pharam.alphaValidation ||
      pharam.amountValidation ||
      pharam.timeValidation ||
      Hop.wort.volumeValidation ||
      Hop.wort.destinyValidation ||
      Hop.wort.boilValidation;
      
    const ibuValidation = ibuValidations(allValidation, hopIBU);

    const disableTimeInputHopBoil = disableTimeInput(Hop.wort.boil, hopStand);

    const textHopsIBU = textHopIBU(Hop.wort.volume, Hop.wort.destiny, Hop.wort.boil, pharam.alpha, pharam.amount, pharam.time, pharam.hopStand, hopIBU, allValidation, pharam.hopStandValidation);
  
    React.useMemo(() => {
        if(hopStand === true) {

        dispatch(HOP.actions.getPharamHopStand(pharam));

    } if(hopStand === false) {
        dispatch(HOP.actions.getPharamHopBoil(pharam));
    }
    }, [pharam]);

    React.useMemo(() => {
     setPharam({...pharam, ibu:hopIBU})
  }, [hopIBU]);
  
    function handleChange(e: any) {
      const { name, value } = e.target;
      setPharam((prevState: any) => {
        return { ...prevState, [name]: value };
      });
    }
  
    React.useEffect(()=>{
      setPharam({ ...pharam, 
        alphaValidation: alphaValidations(pharam.alpha),
        amountValidation:amountValidations(pharam.amount),
        timeValidation: hopStand===true? timeHopValidations(pharam.time) : timeValidations(pharam.time, Hop.wort.boil),
        hopStandValidation: temperatureValidations(pharam.hopStand),
        ibu: ibuValidation
      });
  },[])

    const deleteHopStand = () => {
    if(hopStand === true) {
        dispatch(HOP.actions.deleteHopStand(pharam.id));
        }
    if(hopStand === false) {
        dispatch(HOP.actions.deleteHopBoil(pharam.id));
        }
    };
  
    const ValidationAlpha = () => {
      setPharam({ ...pharam, alphaValidation: alphaValidations(pharam.alpha)});
    };
  
    const ValidationAmount = () => {
      setPharam({
        ...pharam,
        amountValidation: amountValidations(pharam.amount)
      });
    };
  
    const ValidationTime = () => {
        if(hopStand === true) {
      setPharam({ ...pharam, timeValidation: timeHopValidations(pharam.time) });
        } else setPharam({ ...pharam, timeValidation: timeValidations(pharam.time, Hop.wort.boil) });
    };
  
    const ValidationHopStand = () => {
      setPharam({
        ...pharam,
        hopStandValidation: temperatureValidations(pharam.hopStand)
      });
    };

    const nameTypeHop = !hopStand? 'варку':'вирпул'

    return (
      <React.Fragment>
        <AccordionComponent
        subtitle='Параметры хмеля'
        title={(
          <Typography>
            Хмель на {nameTypeHop} {pharam.nameHop} IBU: {textHopsIBU}
          </Typography>
        )}
        sliderAmount={pharam.amount}
        handleChange={handleChange}
        stackColumn1 ={(
          <React.Fragment>
            <PharamInput
                  onChange={handleChange}
                  value={pharam.nameHop}
                  placeholder="Наименование хмеля"
                  name="nameHop"
                  types="text"
                  requireds={false}
                />
                <PharamInput
                  onChange={handleChange}
                  value={pharam.alpha}
                  placeholder="Альфа кислота"
                  name="alpha"
                  onBlur={ValidationAlpha}
                  validation={pharam.alphaValidation}
                  helperText={helperTextHop.alpha}
                />
          </React.Fragment>
        )}
        stackColumn2 ={(
          <React.Fragment>
            <PharamInput
                  onChange={handleChange}
                  value={pharam.amount}
                  placeholder="Кол-во, г"
                  name="amount"
                  onBlur={ValidationAmount}
                  validation={pharam.amountValidation}
                  labelProps={pharam.amount ? true : false}
                  helperText={helperTextHop.amount}
                />
                <PharamInput
                  onChange={handleChange}
                  value={pharam.time}
                  placeholder="Время внесения, мин"
                  name="time"
                  onBlur={ValidationTime}
                  validation={pharam.timeValidation}
                  disable={disableTimeInputHopBoil}
                  helperText={helperTextHop.time}
                />
          </React.Fragment>
        )}
        stackColumn3={hopStand?(
          <PharamInput
                  onChange={handleChange}
                  value={pharam.hopStand}
                  placeholder="Температура HopStand"
                  name="hopStand"
                  onBlur={ValidationHopStand}
                  validation={pharam.hopStandValidation}
                  helperText={helperTextHop.hopStand}
                />
        ):<React.Fragment></React.Fragment>}
        deleteHop={deleteHopStand}
        />
      </React.Fragment>
    );
  };