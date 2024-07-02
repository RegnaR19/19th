import { createSlice } from '@reduxjs/toolkit'

type Achievement = {
   attach: number
   total: number
   status: number
   post: number
   login: number
   logout: number
   changelog: number
   message: number
   hidest: number
   newPhoto: number
}

let initialState: Achievement = {
   total: 0,
   attach: 0,
   status: 0,
   post: 0,
   login: 0,
   logout: 0,
   changelog: 0,
   message: 0,
   hidest: 0,
   newPhoto: 0
}

export type InitialStateType = typeof initialState

export const achievementSlice = createSlice({
   name: 'achievement',
   initialState,
   reducers: {
      totalAchievement(state, action) {
         state.total = state.attach + state.status + (action.payload)
      },
      attachAchievement(state, action) {
         state.attach = action.payload
      },
      postAchievement(state, action) {
         state.post = action.payload
      },
      statusAchievement(state, action) {
         state.status = action.payload
      },
      loginAchievement(state, action) {
         state.login = action.payload
      },
      logoutAchievement(state, action) {
         state.logout = action.payload
      },
      changelogAchievement(state, action) {
         state.changelog = action.payload
      },
      messageAchievement(state, action) {
         state.message = action.payload
      },
      hidestAchievement(state, action) {
         state.hidest = action.payload
      },
      newPhotoAchievement(state, action) {
         state.newPhoto = action.payload
      }
   }
})

export const attachAchievementAction = () => {
   return {
      type: "achievement/attachAchievement",
      payload: 100
   }
}

export const statusAchievementAction = () => {
   return {
      type: "achievement/statusAchievement",
      payload: 100
   }
}

export const postAchievementAction = () => {
   return {
      type: "achievement/postAchievement",
      payload: 100
   }
}
export const loginAchievementAction = () => {
   return {
      type: "achievement/loginAchievement",
      payload: 100
   }
}
export const logoutAchievementAction = () => {
   return {
      type: "achievement/logoutAchievement",
      payload: 100
   }
}
export const changelogAchievementAction = () => {
   return {
      type: "achievement/changelogAchievement",
      payload: 100
   }
}
export const messageAchievementAction = () => {
   return {
      type: "achievement/messageAchievement",
      payload: 100
   }
}
export const hidestAchievementAction = () => {
   return {
      type: "achievement/hidestAchievement",
      payload: 200
   }
}
export const newPhotoAchievementAction = () => {
   return {
      type: "achievement/newPhotoAchievement",
      payload: 100
   }
}

export const { totalAchievement, attachAchievement, statusAchievement,
   changelogAchievement, hidestAchievement, loginAchievement,
   logoutAchievement, messageAchievement, newPhotoAchievement,
   postAchievement } = achievementSlice.actions

export default achievementSlice.reducer