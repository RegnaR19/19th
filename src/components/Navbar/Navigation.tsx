// страница основного меню
import { NavLink } from 'react-router-dom';
import { NavLink as NavMantine } from '@mantine/core';
import {
   IconSettings,
   IconAt, IconActivity, IconCircleOff, IconBadge4k, IconUsers, IconAddressBook, IconNews, IconLogout,
   IconRotateClockwise2,
   IconEyeCog,
   IconPhoto
} from '@tabler/icons-react';
import s from './Navigation.module.css'
import { successAchievement, useAppDispatch, useAppSelector } from '@/hoc/hooks';
import { useState } from 'react';
import { logoutAchievementAction } from '@/redux/achievementReducer';
import { logout } from '@/redux/authReducer';

const Navigation = (props: any) => {

   const dispatch = useAppDispatch()
   const [success, setSuccess] = useState(false)
   const isAuth = useAppSelector(state => state.auth.isAuth)

   const successExitYo = () => {
      if (!success) {
         dispatch(logoutAchievementAction())
         successAchievement('100G | Вы вышли из аккаунта')
      }
      setSuccess(true)
   }

   function logout1() {
      dispatch(logout())
   }

   return (
      <>
         <div className={s.link}>
            <NavLink to="profile">
               <NavMantine
                  leftSection={<IconAddressBook size={18} stroke={1.5} />}
                  description='Стена' label="Профиль" component='span' />
            </NavLink>
            <NavLink to="messages">
               <NavMantine
                  leftSection={<IconAt size={18} stroke={1.5} />}
                  description='' label="Сообщения" component='span' />
            </NavLink>
            <NavLink to="news">
               <NavMantine
                  leftSection={<IconNews size={18} stroke={1.5} />}
                  description='' label="Новости" component='span' />
            </NavLink>
            <NavLink to="users">
               <NavMantine
                  leftSection={<IconUsers size={18} stroke={1.5} />}
                  description='' label="Пользователи" component='span' />
            </NavLink>
            <NavLink to="music">
               <NavMantine
                  leftSection={<IconActivity size={18} stroke={1.5} />}
                  description='' label="Музыка" component='span' />
            </NavLink>
            <NavLink to="video">
               <NavMantine
                  leftSection={<IconBadge4k size={18} stroke={1.5} />}
                  description='' label="Видео" component='span' />
            </NavLink>
            <NavLink to="settings">
               <NavMantine
                  leftSection={<IconSettings size={18} stroke={1.5} />}
                  description='' label="Настройки" component='span' />
            </NavLink>
            <NavLink to="gallery">
               <NavMantine
                  leftSection={<IconPhoto size={18} stroke={1.5} />}
                  label="Галерея" description='4х4' component='span' />
            </NavLink>
            <NavLink to="test">
               <NavMantine
                  leftSection={<IconEyeCog size={18} stroke={1.5} />}
                  description='Эксперименты' label="Тестовая" component='span' />
            </NavLink>
            <NavLink to="changelog">
               <NavMantine
                  leftSection={<IconRotateClockwise2 size={18} stroke={1.5} />}
                  label="Обновления" component='span' />
            </NavLink>

            {isAuth ? <NavLink to='' onClick={() => { successExitYo() }} onClickCapture={logout1}>
               <NavMantine
                  leftSection={<IconLogout size={18} stroke={1.5} />}
                  description='' label="Выход" component='span' />
            </NavLink> :
               <NavLink to="login">
                  <NavMantine
                     leftSection={<IconCircleOff size={18} stroke={1.5} />}
                     description='' label="Вход" component='span' />
               </NavLink>
            }
         </div >
      </>
   );
}

export default Navigation