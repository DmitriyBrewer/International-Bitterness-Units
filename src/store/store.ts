import { configureStore, combineReducers } from "@reduxjs/toolkit";
import hops from "../store/reducer/hopSlice";

const rootReducer = combineReducers({
  hops: hops.reducer
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
