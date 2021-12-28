import {createSlice} from '@reduxjs/toolkit'

export const userReducer = createSlice({
  name:'users',
  initialState: {
    currentUser: {},
    isAuth: false
  },
  reducers: {
    setUser: (state,action) => {
      state.currentUser = action.payload
      state.isAuth = true
    },
    logout: (state,action) => {
    localStorage.removeItem('token')
    state.currentUser = {}
    state.isAuth = false
    }
  }
})

export const {setUser} = userReducer.actions
export const {logout} = userReducer.actions
export default userReducer.reducer