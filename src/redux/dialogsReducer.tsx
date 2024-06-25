import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Dialog = {
   id: number
   name: string
}

type Message = {
   id: number
   message: string
}

let initialState = {
   dialogs: [
      { id: 1, name: "Валера" },
      { id: 2, name: "Димон" },
      { id: 3, name: "Руслан" }
   ] as Array<Dialog>,
   messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you? Im in Almenevo today" },
      { id: 3, message: "Hello" },
   ] as Array<Message>
}

export type InitialStateType = typeof initialState

export const dialogsSlice = createSlice({
   name: 'dialogs',
   initialState,
   reducers: {
      sendMessage(state, action: PayloadAction<string>) {
         state.messages = [...state.messages, { id: 4, message: action.payload }]
      }
   }
})

export const { sendMessage } = dialogsSlice.actions

export default dialogsSlice.reducer