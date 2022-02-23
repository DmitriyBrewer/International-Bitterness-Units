import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IHop } from "../../interface/IHop";
import nextId from "react-id-generator";
import { Calc } from "../../pages/CalculatorIBU/CalcFunc";

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


const HOPSSTAND = createSlice({
  name: "hopsStand",
  initialState: [] as IHop["id"],
  reducers: {
      //hops
    addHop: (state) => {
        if (state.length < 6) {
          var id = { id: nextId("hop-") };
          state.push(id);
        } else return state;
      },
      deleteHop: (state, action: PayloadAction<any>) => {
        return state.filter((element: any) => element.id !== action.payload);
      },
      selectedHop: (state, action: PayloadAction<any>) => {
        state.map((element: any, index: any) => {
         return (element.selectedHop = action.payload)
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
      calcIBU: (state) => {
        state.map((element: any) => {
          if (
            (element.id === element.selectedHop && state[0].volume,
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
          element.concatIBU = acc.ibu + element.ibu;
          if (index !== 0) {
            if (acc.concatIBU) {
              element.reduceIBU = acc.concatIBU + element.ibu;
              return element;
            }
            element.reduceIBU = element.ibu; //если concatIBU нету или он NaN тогда reduce равен первому ibu
          }
          return element;
        }, 0);
        return state;
      }
    }
});
export default HOPSSTAND;
