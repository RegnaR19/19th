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
import { MantineProvider } from "@mantine/core";
import { Notifications, notifications } from "@mantine/notifications";
import s from "./App.module.css"
import './App.scss'
import HeaderTwoContainer from "./components/Navbar/HeaderTwoContainer";
import Sidebar2 from "./components/Navbar/Sidebar2";
import NavigationContainer from "./components/Navbar/NavigationContainer";
import SidebarContainer from "./components/Navbar/SidebarContainer";
import { useAppDispatch } from './hoc/hooks';
import { initApp } from './redux/appReducer';
import Dialogs from './components/Dialogs/Dialogs';
import { IconBrandXbox } from '@tabler/icons-react';

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
         className: 'my-notification-class',
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

   return (
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
         <Notifications position="bottom-center" containerWidth={350} />
         <header className={s.layout2}>
            <HeaderTwoContainer />
         </header>
         <div className={s.layout}>
            <nav className={s.col1}> <NavigationContainer /></nav>
            <aside className={s.col3}>
               <div className={s.sidebar}><Sidebar2 /></div>
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
      </MantineProvider >
   );
}

export default App