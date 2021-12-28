import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {login} from '../../api/user'


const USERS = createSlice({
    name: "users",
    initialState: {
      currentUser: {},
      isAuth: false
    },
    reducers: {
      SETUSER: (state, action) => {
        state.currentUser = action.payload;
        state.isAuth = true;
        return state;
      }
    }
  });

  export default USERS;
