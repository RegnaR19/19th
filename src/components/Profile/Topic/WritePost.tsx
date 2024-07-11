// страница написания постов
import Indent10 from "@/components/Forms/Indent";
import { Accordion, Button, Grid, Input, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconAlignBoxLeftBottomFilled, IconBrandXbox } from "@tabler/icons-react";
import { Form, Field } from 'react-final-form'
import s from "../../Common/FormsControls.module.css"
import UploadPhotoPost from "./UploadPhotoPost";
import { achievementSound, useAppDispatch } from '@/hoc/hooks';
import { postAchievementAction } from '@/redux/achievementReducer';
import { useEffect, useState } from 'react';
import { addPostCreator, addPost, profileSlice } from "@/redux/profileReducer";

const WritePost = () => {

   const dispatch = useAppDispatch()
   const addAchievement = () => {
      dispatch(postAchievementAction())
   }
   const { addPost } = profileSlice.actions
   const [success, setSuccess] = useState(false)

   const successForm = () => {
      notifications.show({
         withCloseButton: false,
         autoClose: 10000,
         title: "Достижение разблокировано",
         message: `100G | Размещен новый пост`,
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

   const add = (title: any, message: any) => {
      dispatch(addPost({ title, message }))
   }

   type Employee = {
      title?: any
      message?: any
   }

   return (
      <>
         <Accordion defaultValue="customization">
            <Accordion.Item value="flexibility">
               <Accordion.Control>
                  <IconAlignBoxLeftBottomFilled />&nbsp;&nbsp;
                  <span className='big-title'>Новая запись</span>
               </Accordion.Control>
               <Accordion.Panel>

                  <Form onSubmit={add}
                     validate={(values: any) => {
                        const errors: Employee = {}
                        if (!values.title) {
                           errors.title = 'Необходимо заполнить заголовок'
                        }
                        if (!values.message) {
                           errors.message = 'Необходимо заполнить сообщение'
                        }
                        return errors
                     }}
                     render={({ handleSubmit, submitting, form }) => (
                        <form onSubmit={handleSubmit}>
                           <Field name="title" component="input">
                              {({ input, meta }) => (
                                 <div className={s.form}>
                                    <Input {...input} type="text" placeholder="Заголовок" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                 </div>
                              )}
                           </Field>
                           <Indent10 />
                           <Field name="message" component="textarea">
                              {({ input, meta }) => (
                                 <div className={s.form}>
                                    <Textarea {...input} placeholder="Дуров, верни стену!" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                 </div>
                              )}
                           </Field>
                           <Indent10 />
                           <Grid justify="right" align="center">
                              <Grid.Col span="auto"><UploadPhotoPost /></Grid.Col>
                              <Grid.Col span="content">
                                 <Button type="submit" variant="gradient" gradient={{ from: 'red', to: 'yellow', deg: 60 }} disabled={submitting}>
                                    Опубликовать
                                 </Button>
                              </Grid.Col>
                           </Grid>
                           <Indent10 />

                        </form>
                     )
                     }
                  />
               </Accordion.Panel>
            </Accordion.Item>
         </Accordion>
      </>
   )
}

export default WritePost;