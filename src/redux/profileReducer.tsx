import { profileAPI, usersAPI } from "@/api/api"
import cyber from "../assets/cyber.jpg"
import dota from "../assets/dota2.jpg"
import fable from "../assets/fable.png"
import newPostImage from "../assets/new.jpg"
import { createSlice } from '@reduxjs/toolkit'

type Posts = {
   id: number
   post: string
   message: string
   likescount: number
   img: string
}

let initialState = {
   posts: [
      { id: 1, post: "Cyberpunk 2077", message: "Сюжет Cyberpunk 2077 рассказывает о герое/героине Ви из города Найт-Сити — опасной и мультикультурной клоаке будущего с могущественными корпорациями, уличными бандами, насилием, имплантами и сексом. Пытаясь сорвать куш и примкнуть к преступной элите города, Ви и его друг Джеки Уэллс решаются на опасное дело. Естественно, задание вылезет им боком и приведет к головокружительным приключениям, смертям и новым знакомствам. Во время безумного хоровода зрелищных событий, которые позже оказываются лишь прологом, Ви встречает обезбашенную личность из прошлого, рок-музыканта и террориста Джонни Сильверхенда (Киану Ривз). И вот тут у главного героя начинаются реальные проблемы.", likescount: 300, img: cyber },
      { id: 2, post: "Dota 2", message: "Dota 2 — компьютерная многопользовательская командная игра жанра стратегия в реальном времени с элементами компьютерной ролевой игры, реализация известной карты DotA для игры Warcraft III в отдельном клиенте. В игре участвуют две команды по пять человек. Одна команда играет за светлую сторону, другая — за темную.", likescount: 1000, img: dota },
      { id: 3, post: "Fable", message: "Fable - своего рода симулятор героя, пушествующего по городам и селам мира Альбион. Жизнь нашего персонажа, за которым мы следим чуть ли не с младенческого возраста, - постоянный выбор между черным и белым, между добром и злом.", likescount: 5000, img: fable },
   ] as Array<Posts>,
   profile: {
      photos: {},
      userId: null,
      fullName: null
   },
   status: null as string | null
}

export type InitialStateType = typeof initialState

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      addPost(state, action) {
         let newPost = {
            id: 4,
            post: action.payload,
            message: action.payload,
            likescount: 0,
            img: newPostImage
         }
         state.posts = [...state.posts, newPost]
      },
      setUserProfile(state, action) {
         state.profile = action.payload
      },
      setStatus(state, action) {
         state.status = action.payload
      },
      savePhotoSuccess(state, action) {
         state.profile = { ...state.profile, photos: action.payload }
      }
   }
})

export const addPostCreator = (newPostText: any, title: any) => ({ type: "profile/addPost", payload: newPostText, title })
export const setUserProfileCreator = (profile: any) => ({ type: "profile/setUserProfile", payload: profile })
export const setStatusCreator = (status: any) => ({ type: "profile/setStatus", payload: status })
export const savePhotoSuccessCreator = (photos: any) => ({ type: "profile/savePhotoSuccess", payload: photos })

export const getUserProfile = (userId: any) => async (dispatch: any) => {
   const response = await usersAPI.getProfile(userId);
   dispatch(setUserProfileCreator(response.data))
}

export const getUserStatus = (userId: any) => async (dispatch: any) => {
   const response = await profileAPI.getStatus(userId)
   dispatch(setStatusCreator(response.data))
}

export const updateStatus = (status: any) => async (dispatch: any) => {
   const response = await profileAPI.updateStatus(status)
   if (response.data.resultCode === 0) {
      dispatch(setStatusCreator(status))
   }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
   const response = await profileAPI.savePhoto(file)
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccessCreator(response.data.data.photos))
   }
}

export const { addPost, savePhotoSuccess, setStatus, setUserProfile } = profileSlice.actions

export default profileSlice.reducer