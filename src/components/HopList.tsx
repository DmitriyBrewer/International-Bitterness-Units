import React from "react";
import Hop from "./Hop";
interface HopListProps {
  hops: any[];
  id?: number;
  hop?: any;
  remove: any;
  key?: any;
  gethop: any;
  getibu: any;
  volume: string;
  destiny: string;
  boil: string;
}

const HopList: React.FC<HopListProps> = ({
  hops,
  remove,
  gethop,
  getibu,
  volume,
  destiny,
  boil
}) => {
  return (
    <div>
      {hops.map((hop) => (
        <Hop
          id={hop.id}
          hop={hop}
          remove={remove}
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
