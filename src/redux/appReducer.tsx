import { createSlice } from '@reduxjs/toolkit';
import { getAuthUserData } from "./authReducer"

let initialState = {
   initialized: false as boolean
}

export type InitialStateType = typeof initialState;

export const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      setInit(state) {
         state.initialized = true
      }
   }
})

export const initApp = () => async (dispatch: any) => {
   dispatch(setInit())
   dispatch(getAuthUserData())
}

export const { setInit } = appSlice.actions

export default appSlice.reducer