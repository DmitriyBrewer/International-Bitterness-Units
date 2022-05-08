import React from 'react';
//redux
import { useSelector, useDispatch } from "react-redux";
import HOP from "../../store/reducer/hopPharamSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

const ResultCalculations = () => {
       //Redux
       const dispatch: AppDispatch = useDispatch();
       const Hop = useSelector((state: AppState) => state.hop);
       //Redux

       const [value, setValue] = React.useState(Hop.IBU)

       const calcIbu = Hop.hopBoil.reduce((prev:any,curr:any)=>prev + curr.ibu,0)+ Hop.hopStand.reduce((prev:any,curr:any)=>prev + curr.ibu,0)

       const caclHopBoil = Hop.hopBoil.reduce((prev:any,curr:any)=>prev + curr.ibu,0)

       const caclHopStand = Hop.hopStand.reduce((prev:any,curr:any)=>prev + curr.ibu,0)



    React.useEffect(()=>{
    setValue({...value, 
        ibu: calcIbu.toFixed(1),
        ibuHopBoil: caclHopBoil.toFixed(1),
        ibuHopStand:caclHopStand.toFixed(1)
    })
    },[])


    

    return (
        <React.Fragment>
            <div>{value.ibu}</div>
            <div>{value.ibuHopBoil}</div>
            <div>{value.ibuHopStand}</div>
        </React.Fragment>
    )
}

export default ResultCalculations