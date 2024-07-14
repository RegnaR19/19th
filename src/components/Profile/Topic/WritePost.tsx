import Indent10 from "@/components/Forms/Indent";
import { Button, Grid, Input, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconAlignBoxLeftBottomFilled, IconBrandXbox } from "@tabler/icons-react";
import { Form, Field } from 'react-final-form';
import s from "../../Common/FormsControls.module.css";
import UploadPhotoPost from "./UploadPhotoPost";
import { successAchievement, useAppDispatch, useAppSelector } from '@/hoc/hooks';
import { postAchievementAction } from '@/redux/achievementReducer';
import { useState } from 'react';
import { addPostCreator, addPostPostText, profileSlice } from "@/redux/profileReducer";

export const WritePost = () => {

   const dispatch = useAppDispatch();
   const { addPost } = profileSlice.actions
   const addAchievement = () => {
      dispatch(postAchievementAction());
      successAchievement('100G | Новый пост')
   };
   const [success, setSuccess] = useState(false);

   const add = (value: any) => {
      dispatch(addPostCreator(value.title));
      dispatch(addPostPostText(value.postText));
      addAchievement()
   };

   type Employee = {
      title?: any;
      postText?: any;
   };

   return (
      <>
         <IconAlignBoxLeftBottomFilled />&nbsp;&nbsp;
         <span className='big-title'>Новая запись</span>

         <Form onSubmit={add}
            validate={(values: any) => {
               const errors: Employee = {};
               if (!values.title) {
                  errors.title = 'Необходимо заполнить заголовок';
               }
               if (!values.postText) {
                  errors.postText = 'Необходимо заполнить сообщение';
               }
               return errors;
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
                  <Field name="postText" component="textarea">
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
            )} />
      </>
   );
};

export default WritePost