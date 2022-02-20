import React from "react";
import Hop from "./Hop";
import {  useSelector } from "react-redux";
import {  AppState } from "../../src/store/store";


const HopList: React.FC = () => {
  const Hops = useSelector((state: AppState) => state.hops);  
  return (
    <div>
      {/* начинаем map не с 0 а с 1 */}
      {Hops.map((element: any, index: any) => {
        if (index === 0) {
          //return ? Что вернуть ?
        } else return <Hop id={element.id} key={element.id} />;
      })}
    </div>
  );
};

export default HopList;
