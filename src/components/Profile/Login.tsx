import { Field, Form } from "react-final-form";
import Indent10 from "../Forms/Indent";
import { Button, Checkbox, Input } from "@mantine/core";
import { connect } from "react-redux";
import { login } from "@/redux/authReducer";
import { useEffect, useState } from "react";
import s from "./../Common/FormsControls.module.css"
import { useNavigate } from "react-router-dom";
import { achievementSound, useAppDispatch, useAppSelector } from '@/hoc/hooks';
import { loginAchievementAction } from '@/redux/achievementReducer';
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";


const Login = () => {

   type Employee = {
      email?: any
      password?: any
   }

   const successLogin = () => {
      notifications.show({
         id: 'login',
         withCloseButton: false,
         autoClose: 5000,
         title: "Достижение разблокировано",
         message: '100G | Вы вошли в аккаунт',
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
   
   const dispatch = useAppDispatch()
   const isAuth = useAppSelector(state => state.auth.isAuth)
   const [success, setSuccess] = useState(false)

   const addNewForExit = () => {
      if (!success) {
         dispatch(loginAchievementAction())
         achievementSound()
      }
      setSuccess(true)
   }

   const onSubmit = (formData: any) => {
      dispatch(login(formData.email, formData.password, formData.rememberMe))
   }

   const navigate = useNavigate();

   useEffect(() => {
      { isAuth ? navigate("/profile") : '' }
   }, [isAuth])

   useEffect(() => {
      { isAuth ? successLogin() : '' }
   }, [isAuth])

   useEffect(() => {
      { isAuth ? addNewForExit() : '' }
   }, [isAuth])

   return (
      <>
         <div className="col2-app">
            <div className='big-title'>Вход в аккаунт</div>

            <Form onSubmit={onSubmit}
               validate={(values: any) => {
                  const errors: Employee = {}
                  if (!values.email) {
                     errors.email = 'Необходимо заполнить Email'
                  }
                  if (!values.password) {
                     errors.password = 'Необходимо заполнить пароль'
                  }
                  return errors
               }}
               render={({ handleSubmit, values, submitting }) => (
                  <form onSubmit={handleSubmit}>
                     <Field name='email' component="input" autoComplete="current-password">
                        {({ input, meta }) => (
                           <div className={s.form}>
                              <Input {...input} placeholder="Email" autoComplete="current-password" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                           </div>
                        )}
                     </Field>
                     <Indent10 />
                     <Field name='password' component="input" autoComplete="on" type="password">
                        {({ input, meta }) => (
                           <div className={s.form}>
                              <Input {...input} placeholder="Пароль" autoComplete="current-password" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                           </div>
                        )}
                     </Field>
                     <Indent10 />
                     <Field name='rememberMe' component="input" type="checkbox">
                        {({ input, meta }) => (
                           <div>
                              <Checkbox {...input} label="Запомнить меня" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                           </div>
                        )}
                     </Field>
                     <Indent10 />
                     <Button type="submit" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} disabled={submitting}>
                        Войти
                     </Button>
                  </form>
               )}
            />
         </div>
      </>
   );
}

export default connect(null, { login })(Login);