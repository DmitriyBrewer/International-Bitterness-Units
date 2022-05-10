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

  const validPharam = Hop.IBU.ibu > 0? false : true
  const validPharamBoil = Hop.IBU.ibuHopBoil > 0? false : true
  const validPharamHopstand = Hop.IBU.ibuHopStand > 0? false : true
  const ibu = reduceIBU.calcIbu>0? reduceIBU.calcIbu:"✍️...Ввод параметров"
  

  return (
    <React.Fragment>
      <AccordionComponent
      disable={validPharam}
      H1='Параметры горечи'
      menu={true}
      slider={true}
      childrenText={(
        <Typography>
          Общее IBU : {ibu}
        </Typography>
      )}
      stack1 ={(
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
                disable={validPharam}
                validation={validPharamBoil}
              />
        </React.Fragment>
      )}
      stack2={(
        <PharamInput
                value={reduceIBU.caclHopStand}
                placeholder="HopStand IBU"
                name="hopstand"
                onChange={() => {}}
                disable={validPharam}
                validation={validPharamHopstand}
              />
      )}
      />
    </React.Fragment>
  );
};

export default ResultCalculations;
