import React from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import HOP from "../../store/reducer/hopPharamSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux
//MUI
import { Typography } from "@mui/material";
import PharamInput from "./PharamInput";
import AccordionComponent from "./AccordionComponent";
//MUI

const ResultCalculations = () => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hop = useSelector((state: AppState) => state.hop);
  //Redux


  //{ibuValue?ibuValue:'✍️'}

  const reduceIBU = {
    calcIbu:Hop.hopBoil.reduce((prev: any, curr: any) => prev + curr.ibu, 0) +
    Hop.hopStand.reduce((prev: any, curr: any) => prev + curr.ibu, 0),

    caclHopBoil:Hop.hopBoil.reduce((prev: any, curr: any) => prev + curr.ibu,0),

    caclHopStand:Hop.hopStand.reduce((prev: any, curr: any) => prev + curr.ibu,0)
  }

  React.useMemo(()=>{
    setTimeout(()=>{
      dispatch(HOP.actions.reduceIBU(reduceIBU))
    },100)

  },[reduceIBU])

  const validPharam = (Hop.IBU.ibu > 0? false : true) || false
  const validPharamBoil = (Hop.IBU.ibuHopBoil > 0? false : true) || false
  const validPharamHopstand = (Hop.IBU.ibuHopStand > 0? false : true) || false
  const ibu = reduceIBU.calcIbu>0? reduceIBU.calcIbu:"✍️...Ввод параметров"
  const visionResult = () =>{
    if(Hop.hopBoil.length>0) {
      return true
    }
    if(Hop.hopStand.length>0) {
      return true
    } else return false
  }
  

  return (
    <React.Fragment>
      {/* {visionResult()?
      <AccordionComponent
      disable={validPharam}
      subtitle='Параметры горечи'
      menuSetting={true}
      sliderVision={true}
      title={(
        <Typography>
          Общее IBU : {ibu}
        </Typography>
      )}
      stackColumn1 ={(
        <React.Fragment>
        <PharamInput
                value={reduceIBU.calcIbu}
                placeholder="Общее IBU"
                name="hopstand"
                onChange={() => {}}
                disable={validPharam}
                validation={validPharam}
              />
              <PharamInput
                value={reduceIBU.caclHopBoil}
                placeholder="boil IBU"
                name="hopstand"
                onChange={() => {}}
                disable={validPharamBoil}
                validation={validPharamBoil}
              />
        </React.Fragment>
      )}
      stackColumn2={(
        <PharamInput
                value={reduceIBU.caclHopStand}
                placeholder="HopStand IBU"
                name="hopstand"
                onChange={() => {}}
                disable={validPharamHopstand}
                validation={validPharamHopstand}
              />
      )}
      />
      :
    <React.Fragment></React.Fragment>
  } */}
    </React.Fragment>
  );
};

export default ResultCalculations;
