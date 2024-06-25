import { usersAPI } from "@/api/api"
import { createSlice } from '@reduxjs/toolkit'

type Users = {
   usersList: any
   pageSize: any
   totalUsersCount: number
   currentPage: number
}

let initialState: Users = {
   usersList: [],
   pageSize: 20,
   totalUsersCount: 0 as number,
   currentPage: 1 as number
}

export type InitialStateType = typeof initialState

export const usersSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUsers(state, action) {
         state.usersList = [...action.payload]
      },
      setTotalUsersCount(state, action) {
         state.totalUsersCount = action.payload
      },
      setCurrentPage(state, action) {
         state.currentPage = action.payload
      }
   }
})

export const getUsers = (currentPage: number) => {
   return (dispatch: any) => {
      usersAPI.getUsers(currentPage).then((data: any) => {
         dispatch(setUsers(data.items))
         dispatch(setTotalUsersCount(data.totalCount))
         dispatch(setCurrentPage(currentPage))
      })
   }
}

export const { setUsers, setTotalUsersCount, setCurrentPage } = usersSlice.actions

export default usersSlice.reducer