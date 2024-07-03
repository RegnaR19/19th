import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { Button, Grid } from '@mantine/core';
import DialogsForm from './Messages/DialogsForm';
import { notifications } from '@mantine/notifications';
import { IconBrandXbox } from '@tabler/icons-react';
import { achievementSound, useAppDispatch, useAppSelector } from '@/hoc/hooks';
import { dialogsSlice } from '@/redux/dialogsReducer';
import { useState } from 'react';
import { messageAchievementAction } from '@/redux/achievementReducer';

const Dialogs = () => {

   const dispatch = useAppDispatch()
   const [success, setSuccess] = useState(false)
   const dialogsPage = useAppSelector(state => state.dialogsPage)
   const { sendMessage } = dialogsSlice.actions

   let dialogsElements =
      dialogsPage.dialogs.map((e: any) => <DialogItem id={e.id} key={e.id} name={e.name} />)

   let messagesElements =
      dialogsPage.messages.map((e: any) => <Messages id={e.id} key={e.id} message={e.message} />)

   const successForm = () => {
      notifications.show({
         withCloseButton: false,
         autoClose: 10000,
         title: "Достижение разблокировано",
         message: '100G | Отправлено сообщение',
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

   const sendMessageDispatch = (message: any) => {
      dispatch(sendMessage(message))
   }

   let addNewMessage = (values: any) => {
      sendMessageDispatch(values.message)
      dispatch(messageAchievementAction())
      if (!success) {
         successForm()
         achievementSound()
      }
      setSuccess(true)
   }

   return (
      <>
         <div className='col2-app'>
            <div className='big-title'>Сообщения</div>

            <Grid grow>
               <Grid.Col span={5} className={s.border}><b>Имена</b></Grid.Col>
               <Grid.Col span={7} className={s.border}><b>Сообщения</b></Grid.Col>
               <Grid.Col span={5} className={s.border}>{dialogsElements}</Grid.Col>
               <Grid.Col span={7} className={s.border}>{messagesElements}</Grid.Col>
            </Grid>
            <div style={{ marginBottom: 20 }} />
            <DialogsForm addNewMessage={addNewMessage} />
         </div>
      </>
   )
}

export default Dialogs