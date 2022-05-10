import React from "react";
//redux
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
//redux
import {HopPattern} from './HopPattern'

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
}

const Hop: React.FC<IHop> = ({ hopElement }) => {
  return (
    <HopPattern hopElement={hopElement} hopStand={false}/>
  );
};

const HopStand: React.FC<IHop> = ({ hopElement }) => {
  return (
    <HopPattern hopElement={hopElement} hopStand={true}/>
  );
};

const HopList: React.FC = () => {
  const Hops = useSelector((state: AppState) => state.hop);

  return (
    <React.Fragment>
      {Hops.hopBoil.map((element: any) => {
        return <Hop key={element.id} hopElement={element} />;
      })}

      {Hops.hopStand.map((element: any) => {
        return <HopStand key={element.id} hopElement={element} />;
      })}
    </React.Fragment>
  );
};

export default HopList;
