import React from "react";
import Hop from "./Hop";
import HopStnd from "./HopStnd";

//redux
import {  useSelector } from "react-redux";
import {  AppState } from "../../store/store";
//redux

const HopList: React.FC = () => {
  const Hops = useSelector((state: AppState) => state.hops); 
  //hop
  let ReduxValueHop = { hopType:"" };
  Hops.forEach((element: any) => {
      ReduxValueHop = {
        hopType: element.hopType
      };
  });
  //hop
  return (
    <React.Fragment>
      {/* начинаем map не с 0, а с 1 */}
      {Hops.map((element: any, index: any) => {
        if (index === 0) {
        // } else return <Hop id={element.id} key={element.id} />;
      }  if(element.hopType==='boil') {
      return <Hop id={element.id} key={element.id} />
    } if(element.hopType==='hopstand') {
      return <HopStnd id={element.id} key={element.id}/>
    }
      })}
    </React.Fragment>
  );
};

export default HopList;
