import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IHop } from "../../interface/IHop";
import nextId from "react-id-generator";
import { Calc } from "../../pages/CalculatorIBU/CalcFunc";
import { CalcHopStand } from "../../pages/CalculatorIBU/CalcHopStand";


export interface IHop {
  id?: any;
  volume: any;
  destiny: string;
  boil: string;
  name: string;
  alpha: string;
  amount: string;
  time: string;
  volumeValidation: boolean;
  destinyValidation: boolean;
  boilValidation: boolean;
}


const HOPS = createSlice({
  name: "hops",
  initialState: [] as IHop["id"],
  reducers: {
    mountWort: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
      return state;
    },
    //wort
    addVolume: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        //Условие выполнится только для объекта wort
        if (element.id === "wort") {
          //Условие выполнится только для объекта wort
          return (element.volume = action.payload);
        } else return state;
      });
      return state;
    },
    volumeValidation: (state) => {
      state.forEach((element: any) => {
        if (element.id === "wort") {
          if (
            parseInt(element.volume, 10) < 100000 &&
            parseInt(element.volume, 10) !== 0
          ) {
            element.volumeValidation = true;
          } else element.volumeValidation = false;
        } else return state;
      });
      return state;
    },
    addDestiny: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        if (element.id === "wort") {
          return (element.destiny = action.payload);
        } else return state;
      });
      return state;
    },
    destinyValidation: (state) => {
      state.forEach((element: any) => {
        if (
          element.id === "wort" &&
          element.plato === true
        ) {
          if (
            element.destiny &&
            parseFloat(element.destiny) >= parseFloat("0.5") &&
            parseFloat(element.destiny) <= parseFloat("40")
          ) {
            element.destinyValidation = true;
          } else element.destinyValidation = false;
        } 
        if (element.id === "wort" && element.destiny && element.sg === true) {
          if (
            element.destiny &&
            parseFloat(element.destiny) >= parseFloat("1.002") &&
            parseFloat(element.destiny) <= parseFloat("1.179")
          ) {
            element.destinyValidation = true;
          } else element.destinyValidation = false;
        } 
      });
      return state;
    },
    toSG: (state) => {
      state.forEach((element: any) => {
        if (parseFloat(element.destiny) ) {
          const sg = 1 +parseInt(element.destiny, 10) / (258.6 - (parseInt(element.destiny, 10) / 258.2) * 227.1);
          element.destiny = sg.toFixed(4)
          element.plato = false;
          element.sg = true;
          return element
        } return element
      }); 
      return state;
    },
    toPlato: (state) => {
      state.forEach((element: any) => {
        if (parseFloat(element.destiny)) {
        const plato =
        -1 * 616.868 + 1111.14 * element.destiny -
        630.272 * Math.pow(element.destiny, 2) + 135.997 * Math.pow(element.destiny, 3);
        element.destiny = Math.round(plato);
        }
      });
      return state;
    },
    selectDestiny: (state, action: PayloadAction<any>) =>{
      state.forEach((element:any)=>{
        if(action.payload === 'plato')
        {
          element.plato = false;
          element.sg = true;
          return element
      }
        if(action.payload === 'sg')
        {
          element.plato = true;
          element.sg = false;
        return element
      } return element
      })
      return state;
    },
    addBoil: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        if (element.id === "wort") {
          return (element.boil = action.payload);
        } else return state;
      });
      return state;
    },
    boilValidation: (state) => {
      state.forEach((element: any) => {
        if (element.id === "wort") {
          if (parseFloat(element.boil) <= 200) {
            element.boilValidation = true;
          } else element.boilValidation = false;
        } else return state;
      });
      return state;
    },
    //wort
    //hops
    addHop: (state, action: PayloadAction<string>) => {
      if (state.length < 6) {
        var pharamHop = { id: nextId("hop-"), hopType: action.payload };
        state.push(pharamHop);
      } else return state;
    },
    deleteHop: (state, action: PayloadAction<any>) => {
      return state.filter((element: any) => element.id !== action.payload);
    },
    selectedHop: (state, action: PayloadAction<any>) => {
      state.map((element: any, index: any) => {
        if (index === 0) {
          return element;
        } else return (element.selectedHop = action.payload)
      } 
      )
      return state;
    },
    exitHop: (state, action: PayloadAction<any>) => {
      state.map((element: any, index: any) => {
        if (index === 0) {
          return element;
        } else return (element.selectedHop = action.payload);
      });
      return state;
    },
    addName: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        if (element.selectedHop === element.id) {
          return (element.name = action.payload);
        } else return element;
      });
      return state;
    },
    addAlpha: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        if (element.selectedHop === element.id) {
          return (element.alpha = action.payload);
        } else return element;
      });
      return state;
    },
    alphaValidation: (state) => {
      state.forEach((element: any) => {
        // if (element.alpha &&
          if (element.id === element.selectedHop) 
        {if (
          parseFloat(element.alpha) >= parseFloat("0.1")
        ) {
          element.alphaValidation = true;
        } else element.alphaValidation = false;}
      }
      );
      return state;
    },
    addAmount: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        if (element.selectedHop === element.id) {
          return (element.amount = action.payload);
        } else return element;
      });
      return state;
    },
    amountValidation: (state) => {
      state.forEach((element: any) => {
        if (
          // element.amount &&
          element.id === element.selectedHop
        ) {
          if (parseFloat(element.amount)>=0) {
            element.amountValidation = true;
          } else element.amountValidation = false
        } else return element;
      });
      return state;
    },
    addTime: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        if (element.selectedHop === element.id) {
          return (element.time = action.payload);
        } else return element;
      });
      return state;
    },
    timeValidation: (state) => {
      state.forEach((element: any) => {
      if (element.selectedHop === element.id)
      {
        if (
          // element.time &&
          state[0].boil !== ""
          && parseInt(element.time, 10) <= parseInt(state[0].boil, 10)
        ) {
          element.timeValidation = true;
        } else element.timeValidation = false;
      }  else return element
      });
      return state;
    },
    //hops
    //hopsStand
    addTimeHopStand: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        if (element.selectedHop === element.id) {
          return (element.time = action.payload);
        } else return element;
      });
      return state;
    },
    timeValidationHopStand: (state) => {
      state.forEach((element: any) => {
      if (element.selectedHop === element.id)
      {
        if (
          // element.time &&
          parseInt(element.time, 10) <= 100
        ) {
          element.timeValidation = true;
        } else element.timeValidation = false;
      }  else return element
      });
      return state;
    },
    addTemperature: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        if (element.selectedHop === element.id) {
          return (element.temperature = action.payload);
        } else return element;
      });
      return state;
    },
    temperatureValidation: (state) => {
      state.forEach((element: any) => {
      if (element.selectedHop === element.id)
      {
        if (
          // element.time &&
          parseInt(element.temperature, 10) <= 100
        ) {
          element.temperatureValidation = true;
        } else element.temperatureValidation = false;
      }  else return element
      });
      return state;
    },
    calcIBUHopStand: (state) => {
      state.map((element: any) => {
        if (
          (element.hopType === 'hopstand' && element.id === element.selectedHop && state[0].volume,
          state[0].destiny&& state[0].boil)
        ) {
          return (element.ibuHopStand = CalcHopStand(
            element.name,
            element.alpha,
            element.amount,
            element.time,
            element.temperature,
            state[0].volume,
            state[0].destiny,
          ));
        } else return (element.ibuHopStand = 0);
      });
      return state;
    },
    concatIBUHopStand: (state) => {
      state.reduce((acc: any, element: any, index: any) => {
        if (element.hopType === 'hopstand') {
        element.concatIBUHopStand = acc.ibuHopStand + element.ibuHopStand;
        if (index !== 0) {
          if (acc.concatIBUHopStand) {
            element.reduceIBUHopStand = acc.concatIBUHopStand + element.ibuHopStand;
            return element;
          }
          element.reduceIBUHopStand = element.ibuHopStand; //если concatIBU нету или он NaN тогда reduce равен первому ibu
        }
      }//
        return element;
      }, 0);
      return state;
    },
    
    //hopsStand

    addIBU: (state, action: PayloadAction<any>) => {
      state.map((element: any) => {
        if (element.selectedHop === element.id) {
          return (element.ibu = action.payload);
        } else return element;
      });
      return state;
    },
    calcIBU: (state) => {
      state.map((element: any) => {
        if (
          (element.hopType === 'boil' && element.id === element.selectedHop && state[0].volume,
          state[0].destiny && state[0].boil)
        ) {
          return (element.ibu = Calc(
            element.name,
            element.alpha,
            element.amount,
            element.time,
            state[0].volume,
            state[0].destiny,
            state[0].boil
          ));
        } else return (element.ibu = 0);
      });
      return state;
    },
    concatIBU: (state) => {
      state.reduce((acc: any, element: any, index: any) => {
        if (element.hopType === 'boil') {
        element.concatIBU = acc.ibu + element.ibu;
        if (index !== 0) {
          if (acc.concatIBU) {
            element.reduceIBU = acc.concatIBU + element.ibu;
            return element;
          }
          element.reduceIBU = element.ibu; //если concatIBU нету или он NaN тогда reduce равен первому ibu
        }
      }//
        return element;
      }, 0)
  
      return state;
    },
  }
});
export default HOPS;
