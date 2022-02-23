import React from "react";
import {  useSelector } from "react-redux";
import {  AppState } from "../../store/store";
import HopStand from "./HopStand";



const HopStandList: React.FC = () => {
    const Hops = useSelector((state: AppState) => state.hopStand);  
    return (
      <div>
        {Hops.map((element: any, index: any) => {
     return <HopStand id={element.id} key={element.id} />;
        })}
      </div>
    );
}

export default HopStandList;
