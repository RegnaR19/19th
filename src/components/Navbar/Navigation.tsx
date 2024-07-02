// страница основного меню
import { NavLink } from 'react-router-dom';
import { NavLink as NavMantine } from '@mantine/core';
import {
   IconSettings,
   IconAt, IconActivity, IconCircleOff, IconBadge4k, IconUsers, IconAddressBook, IconNews, IconLogout
} from '@tabler/icons-react';
import s from './Navigation.module.css'
import { notifications } from '@mantine/notifications';
import { IconBrandXbox } from '@tabler/icons-react';
import { achievementSound, useAppDispatch } from '@/hoc/hooks';
import { useState } from 'react';
import { logoutAchievementAction } from '@/redux/achievementReducer';

const Navigation = (props: any) => {

   const dispatch = useAppDispatch()
   const [success, setSuccess] = useState(false)

   const successExit = () => {
      return notifications.show({
         id: 'logout',
         withCloseButton: false,
         autoClose: 10000,
         title: "Достижение разблокировано",
         message: '100G | Вы вышли из аккаунта',
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

   const successExitYo = () => {
      if (!success) {
         dispatch(logoutAchievementAction())
         achievementSound()
         successExit()
      }
      setSuccess(true)
   }

   return (
      <>
         <div className={s.link}>
            <NavLink to="profile">
               <NavMantine
                  icon={<IconAddressBook size={18} stroke={1.5} />}
                  description='Стена' label="Профиль" />
            </NavLink>
            <NavLink to="messages">
               <NavMantine
                  icon={<IconAt size={18} stroke={1.5} />}
                  description='' label="Сообщения" />
            </NavLink>
            <NavLink to="news">
               <NavMantine
                  icon={<IconNews size={18} stroke={1.5} />}
                  description='' label="Новости" />
            </NavLink>
            <NavLink to="users">
               <NavMantine
                  icon={<IconUsers size={18} stroke={1.5} />}
                  description='' label="Пользователи" />
            </NavLink>
            <NavLink to="music">
               <NavMantine
                  icon={<IconActivity size={18} stroke={1.5} />}
                  description='' label="Музыка" />
            </NavLink>
            <NavLink to="video">
               <NavMantine
                  icon={<IconBadge4k size={18} stroke={1.5} />}
                  description='' label="Видео" />
            </NavLink>
            <NavLink to="settings">
               <NavMantine
                  icon={<IconSettings size={18} stroke={1.5} />}
                  description='' label="Настройки" />
            </NavLink>
            <NavLink to="test">
               <NavMantine
                  icon={<IconCircleOff size={18} stroke={1.5} />}
                  description='Эксперименты' label="Тестовая" />
            </NavLink>

            {props.isAuth ? <NavLink to='' onClick={() => { successExitYo() }} onClickCapture={props.logout}>
               <NavMantine
                  icon={<IconLogout size={18} stroke={1.5} />}
                  description='' label="Выход" />
            </NavLink> :
               <NavLink to="login">
                  <NavMantine
                     icon={<IconCircleOff size={18} stroke={1.5} />}
                     description='' label="Вход" />
               </NavLink>
            }
         </div >
      </>
   );
}

export default Navigation;