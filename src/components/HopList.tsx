import React from "react";
import Hop from "./Hop";
import {  useDispatch } from "react-redux";
import {  AppDispatch } from "../../src/store/store";
import todoSlice from "../../src/store/reducer/hopSlice";

interface HopListProps {
  Hops: any[];
  id?: number;
  hop?: any;
  key?: any;
  gethop: any;
  getibu: any;
  volume: string;
  destiny: string;
  boil: string;
}

const HopList: React.FC<HopListProps> = ({
  gethop,
  getibu,
  volume,
  destiny,
  boil,
  Hops
}) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      {Hops.map((hop) => (
        <Hop
          id={hop.id}
          hop={hop}
          onClick={() => dispatch(todoSlice.actions.deleteTodo(hop.id))}
          key={hop.id}
          gethop={gethop}
          getibu={getibu}
          volume={volume}
          destiny={destiny}
          boil={boil}
        />
      ))}
    </div>
  );
};

export default HopList;
