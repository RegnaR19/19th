import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from 'react'
import FooterOne from "./components/Navbar/Footer";
import NewsPage from "./components/News/NewsPage";
import MusicPage from "./components/Music/MusicPage";
import SettingsPage from "./components/Settings/SettingsPage";
import TestPage from "./components/Settings/TestPage";
import VideoPage from "./components/Video/VideoPage";
const Users = lazy(() => import('./components/Users/Users'));
const Login = lazy(() => import('./components/Profile/Login'));
const MainProfile = lazy(() => import('./components/Profile/MainProfile'));
import { MantineProvider, createTheme, rem } from '@mantine/core';
import {
   MantineEmotionProvider,
} from '@mantine/emotion';
import { Notifications, notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import s from "./App.module.css"
import './App.scss'
import AchievementSidebar from "./components/Navbar/AchievementSidebar"
import { startUp, successAchievement, useAppDispatch } from './hoc/hooks';
import { initApp } from './redux/appReducer';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Navbar/Header";
import Navigation from "./components/Navbar/Navigation";
import ChangelogSidebar from "./components/Navbar/ChangelogSidebar";
import ChangelogPage from "./components/Changelog/ChangelogPage";
// import UpdateElectron from '@/components/update'

const App = () => {

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(initApp())
      // successAchievement('Успешная инициализация)
      // startUp()
   }, [successAchievement])

   const theme = createTheme({
      colors: {
         // Add your color
         deepBlue: [
            '#eef3ff',
            '#dce4f5',
            '#b9c7e2',
            '#94a8d0',
            '#748dc1',
            '#5f7cb8',
            '#5474b4',
            '#44639f',
            '#39588f',
            '#2d4b81',
         ],
         // or replace default theme color
         blue: [
            '#eef3ff',
            '#dee2f2',
            '#bdc2de',
            '#98a0ca',
            '#7a84ba',
            '#6672b0',
            '#5c68ac',
            '#4c5897',
            '#424e88',
            '#364379',
         ],
      },

      shadows: {
         md: '1px 1px 3px rgba(0, 0, 0, .25)',
         xl: '5px 5px 3px rgba(0, 0, 0, .25)',
      },

      headings: {
         fontFamily: 'Roboto, sans-serif',
         sizes: {
            h1: { fontSize: rem(36) },
         },
      },
   });

   return (
      <MantineProvider theme={theme}>
         <MantineEmotionProvider>
            <Notifications position="bottom-center" />
            <header className={s.layout2}>
               <Header />
            </header>
            <div className={s.layout}>
               <nav className={s.col1}><Navigation /></nav>
               <aside className={s.col3}>
                  <div className={s.sidebar}><AchievementSidebar /></div>
                  <div className={s.sidebar}><ChangelogSidebar /></div>
               </aside>
               <main>
                  <Routes>
                     <Route path="/" element={
                        <Suspense fallback={' '}>
                           <MainProfile />
                        </Suspense>
                     } />
                     <Route path="profile" element={
                        <Suspense fallback={' '}>
                           <MainProfile />
                        </Suspense>
                     } />
                     <Route path="profile/:userId" element={
                        <Suspense fallback={' '}>
                           <MainProfile />
                        </Suspense>
                     } />
                     <Route path="messages" element={<Dialogs />} />
                     <Route path="users" element={
                        <Suspense fallback={' '}>
                           <Users />
                        </Suspense>} />
                     <Route path="news" element={<NewsPage />} />
                     <Route path="music" element={<MusicPage />} />
                     <Route path="settings" element={<SettingsPage />} />
                     <Route path="test" element={<TestPage />} />
                     <Route path="video" element={<VideoPage />} />
                     <Route path="changelog" element={<ChangelogPage />} />
                     <Route path="login" element={
                        <Suspense fallback={' '}>
                           <Login />
                        </Suspense>} />
                  </Routes>
               </main>
            </div>
            <footer className={s.layout}>
               <div className={s.col1_noborder}></div>
               <div className={s.col3_noborder}></div>
               <div>
                  <div className={s.header}><FooterOne /></div>
               </div>
            </footer>
         </MantineEmotionProvider>
      </MantineProvider >
   );
}

export default App