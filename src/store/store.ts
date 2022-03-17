import { configureStore, combineReducers } from "@reduxjs/toolkit";
import hops from "./reducer/hopSlice";
import userReducer from './reducer/userSlice';
import { useDispatch } from 'react-redux'



const rootReducer = combineReducers({
  hops: hops.reducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState> // для useSelector на state: RootState
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

//старое
// export type AppDispatch = typeof store.dispatch;
// export type AppState = ReturnType<typeof rootReducer>;
//старое

// export default store;

