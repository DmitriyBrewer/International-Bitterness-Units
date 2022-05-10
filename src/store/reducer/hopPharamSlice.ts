import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IHop } from "../../interface/IHop";
import nextId from "react-id-generator";
import { CalcHopStand } from "../../pages/CalculatorIBU/CalcHopStand";

import {Calc} from '../../pages/CalculatorIBU/CalcFunc'

interface HopState {
  nameHop: string;
  id: any;
  alpha:string;
}

interface State {
  wort: {
    volume?:string | undefined, 
    destiny?:string | undefined, 
    boil?:string | undefined,
    destinyType?:string | undefined,
    volumeValidation?: boolean | undefined,
    destinyValidation?: boolean | undefined,
    boilValidation?: boolean | undefined,
  }
  hopBoil: any
  hopStand: any
  IBU:any
}

const initialState:State =  {
  // wort:{volume:'', destiny: '14', boil:'60', destinyType:'plato', volumeValidation: undefined, destinyValidation: undefined, boilValidation: undefined},
  wort:{destinyType:'plato', volumeValidation:undefined, destinyValidation:undefined, 
  volume:'1000', 
  destiny: '14',
   boil:'60',
},
      hopBoil: [{}] ,
      hopStand: [{nameHop:'Lemondrop', id: 2, alpha:'17',amount:'3100', time:'40'}],
      IBU: {ibu:'', ibuHopBoil:'', ibuHopStand:''}
}

const HOP = createSlice({
  name: "hop",
  initialState,
  reducers: {

    addHopBoil: (state:any, action) => {
      let name = 'Cascade'
      let alpha = '12'
      let amount = '2500'
      let time= '25'
      state.hopBoil.push({
        nameHop:name, id: action.payload , amount: amount, alpha:'12'
        // nameHop:name, id: action.payload, alpha:alpha, amount:amount, time:time, alphaValidation: undefined, 
      // ibu: Calc(name, alpha, amount, time, state.wort.volume, state.wort.destiny, state.wort.boil)
    });
      },

    addHopStand: (state:any, action) => {
      state.hopStand.push({nameHop:'Lemondrop', id: action.payload, alpha:'14',amount:'2500', time:'40'});
      },

    deleteHopBoil: (state:any,  action: PayloadAction<any>) => {
    state.hopBoil = state.hopBoil.filter((el:any) => {
        return el.id !== action.payload} );
    },

    deleteHopStand: (state:any,  action: PayloadAction<any>) => {
      state.hopStand = state.hopStand.filter((el:any) => {
          return el.id !== action.payload} );
      },

    getPharamWort: (state:any, action:any) => {
      state.wort = action.payload
      return state
    },

    getPharamHopBoil: (state, action) => {

    state.hopBoil.map((el:any)=>{
        if(el.id === action.payload.id) {
            el.nameHop = action.payload.nameHop
            el.alpha = action.payload.alpha
            el.amount = action.payload.amount
            el.time = action.payload.time
            el.alphaValidation = action.payload.alphaValidation
            el.amountValidation = action.payload.amountValidation
            el.timeValidation = action.payload.timeValidation
            el.ibu = action.payload.ibu
        }
    })
    return state
    },
    getPharamHopStand: (state, action) => {
      state.hopStand.map((el:any)=>{
          if(el.id === action.payload.id) {
              el.nameHop = action.payload.nameHop
              el.alpha = action.payload.alpha
              el.amount = action.payload.amount
              el.time = action.payload.time
              el.hopStand = action.payload.hopStand
              el.alphaValidation = action.payload.alphaValidation
              el.amountValidation = action.payload.amountValidation
              el.timeValidation = action.payload.timeValidation
              el.ibu = action.payload.ibu
          }
      })
      return state
      },
      reduceIBU: (state, action) => {
        state.IBU.ibu = action.payload.calcIbu
        state.IBU.ibuHopBoil = action.payload.caclHopBoil
        state.IBU.ibuHopStand = action.payload.caclHopStand
        },
  }
});
export default HOP;
