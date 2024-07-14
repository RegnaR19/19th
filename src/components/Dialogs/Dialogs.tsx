import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { Grid } from '@mantine/core';
import DialogsForm from './Messages/DialogsForm';
import { achievementSound, successAchievement, useAppDispatch, useAppSelector } from '@/hoc/hooks';
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



   const sendMessageDispatch = (message: any) => {
      dispatch(sendMessage(message))
   }

   let addNewMessage = (values: any) => {
      sendMessageDispatch(values.message)
      dispatch(messageAchievementAction())
      if (!success) {
         successAchievement('100G | Сообщение отправлено')
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