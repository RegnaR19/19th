import { authAPI } from "@/api/api"
import { createSlice } from '@reduxjs/toolkit'

let initialState = {
   userId: null as number | null,
   email: null as string | null,
   login: null as string | null,
   isAuth: false as boolean,
   logout: null as string | null
}

export type InitialStateType = typeof initialState

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUserDataPayload(state, action) {
         return {
            ...state,
            ...action.payload
         }
      }
   }
})

export const setUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
   return {
      type: "auth/setUserDataPayload",
      payload: { userId, email, login, isAuth }
   }
}

export const getAuthUserData = () => async (dispatch: any) => {
   const response = await authAPI.me()
   if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data
      dispatch(setUserData(id, email, login, true))
   }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
   const response = await authAPI.login(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
   }
}

export const logout = () => async (dispatch: any) => {
   const response = await authAPI.logout()
   if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false))
   }
}

export const { setUserDataPayload } = authSlice.actions

export default authSlice.reducer