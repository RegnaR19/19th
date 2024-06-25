import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { Button, Grid, Paper, Tabs, Transition, rem } from '@mantine/core';
import DialogsForm from './Messages/DialogsForm';
import { notifications } from '@mantine/notifications';
import { IconBrandXbox, IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
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

   const scaleY = {
      in: { opacity: 1, transform: 'scaleY(1)' },
      out: { opacity: 0, transform: 'scaleY(0)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
   };

   const [opened, setOpened] = useState(false)

   return (
      <>
         <div className='col2-app'>
            <div className='big-title'>Сообщения</div>

            <Grid grow>
               <Grid.Col span={5} className={s.border}><b>Имена</b></Grid.Col>
               <Grid.Col span={7} className={s.border}><b>Сообщения</b></Grid.Col>
               <Grid.Col span={5} className={s.border}></Grid.Col>
               <Grid.Col span={7} className={s.border}>

               </Grid.Col>
            </Grid>
            <Button onClick={() => setOpened(true)}>Open dropdown</Button>
            <Transition mounted={opened} transition={scaleY} duration={500} timingFunction="ease">
               {(styles) => (
                  <Paper
                     shadow="md"
                     style={{ ...styles, height: rem(120) }}
                  >
                     Dropdown
                  </Paper>
               )}
            </Transition>

            <div style={{ marginBottom: 20 }} />

            <Tabs color="lime" radius="xs" orientation="vertical" defaultValue="gallery">
               <Tabs.List>
                  <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>{dialogsElements}</Tabs.Tab>
                  <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>                     {messagesElements}
                  </Tabs.Tab>
                  <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab>
               </Tabs.List>
            </Tabs>

            <DialogsForm addNewMessage={addNewMessage} />
         </div>
      </>
   )
}

export default Dialogs