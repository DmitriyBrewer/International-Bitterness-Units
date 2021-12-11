import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Hops {
  id?: any;
  name?: string;
  alpha?: string;
  amount?: string;
  time?: string;
  volume?: string;
  destiny?: string;
  boil?: string;
}

const HOPS = createSlice({
  name: "hops",
  initialState: [] as Hops[],
  reducers: {
    addTodo: (state, action: PayloadAction<number>) => {
      if (state.length <= 3) {
        // state.push({ id: Date.now() });
        state.push({ id: action.payload });
        return state;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((hop) => hop.id !== action.payload);
    },
    saveAction: (state, action: PayloadAction<any>) => {
      state = action.payload;
      return state;
    }
  }
});

export default HOPS;
