import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from 'react'
import FooterOne from "./components/Navbar/Footer";
import NewsPage from "./components/News/NewsPage";
import MusicPage from "./components/Music/MusicPage";
import SettingsPage from "./components/Settings/SettingsPage";
import TestPage from "./components/Settings/TestPage";
import VideoPage from "./components/Video/VideoPage";
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = lazy(() => import('./components/Profile/LoginContainer'));
const MainProfile = lazy(() => import('./components/Profile/MainProfile'));
import { MantineProvider, createTheme, rem } from '@mantine/core';
import {
   emotionTransform,
   MantineEmotionProvider,
} from '@mantine/emotion';
import { Notifications, notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import s from "./App.module.css"
import './App.scss'
import AchievementSidebar from "./components/Navbar/AchievementSidebar";
import NavigationContainer from "./components/Navbar/NavigationContainer";
import SidebarContainer from "./components/Navbar/SidebarContainer";
import { startUp, useAppDispatch } from './hoc/hooks';
import { initApp } from './redux/appReducer';
import Dialogs from './components/Dialogs/Dialogs';
import { IconBrandXbox } from '@tabler/icons-react';
import HeaderContainer from "./components/Navbar/HeaderContainer";
// import UpdateElectron from '@/components/update'

const App = () => {

   const dispatch = useAppDispatch()
   const successForm = () => {
      notifications.show({
         withCloseButton: true,
         autoClose: 10000,
         title: "Добро пожаловать, пользователь",
         message: 'Сможешь ли набрать 1000G?',
         color: 'green',
         icon: <IconBrandXbox />,
         loading: false,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.gray[1],
               '&::before': { backgroundColor: theme.black },
            },
            title: { color: theme.black },
            description: { color: theme.black },
         }),
      })
   }
   useEffect(() => {
      dispatch(initApp())
      // successForm()
      // startUp()
   }, [successForm])

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
               <HeaderContainer />
            </header>
            <div className={s.layout}>
               <nav className={s.col1}><NavigationContainer /></nav>
               <aside className={s.col3}>
                  <div className={s.sidebar}><AchievementSidebar /></div>
                  <div className={s.sidebar}><SidebarContainer /></div>
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
                           <UsersContainer />
                        </Suspense>} />
                     <Route path="news" element={<NewsPage />} />
                     <Route path="music" element={<MusicPage />} />
                     <Route path="settings" element={<SettingsPage />} />
                     <Route path="test" element={<TestPage />} />
                     <Route path="video" element={<VideoPage />} />
                     <Route path="login" element={
                        <Suspense fallback={' '}>
                           <LoginContainer />
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