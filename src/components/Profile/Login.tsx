import { Field, Form } from "react-final-form";
import Indent10 from "../Forms/Indent";
import { Button, Checkbox, Input } from "@mantine/core";
import { connect } from "react-redux";
import { login } from "@/redux/authReducer";
import { useEffect, useState } from "react";
import s from "./../Common/FormsControls.module.css"
import { successLogin } from "./LoginContainer";
import { useNavigate } from "react-router-dom";
import { achievementSound, useAppDispatch } from '@/hoc/hooks';
import { loginAchievementAction } from '@/redux/achievementReducer';

type Props = {
   isAuth: any
}

const Login: React.FC<Props> = (props: any) => {

   type Employee = {
      email?: any
      password?: any
   }

   const dispatch = useAppDispatch()
   const [success, setSuccess] = useState(false)

   const addNewForExit = () => {
      if (!success) {
         dispatch(loginAchievementAction())
         achievementSound()
      }
      setSuccess(true)
   }

   const onSubmit = (formData: any) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }

   const navigate = useNavigate();

   useEffect(() => {
      { props.isAuth ? navigate("/profile") : '' }
   }, [props.isAuth])

   useEffect(() => {
      { props.isAuth ? successLogin() : '' }
   }, [props.isAuth])

   useEffect(() => {
      { props.isAuth ? addNewForExit() : '' }
   }, [props.isAuth])

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
                     <Field name='email' component="input">
                        {({ input, meta }) => (
                           <div className={s.form}>
                              <Input {...input} placeholder="Email" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                           </div>
                        )}
                     </Field>
                     <Indent10 />
                     <Field name='password' component="input" autoComplete="off" type="password">
                        {({ input, meta }) => (
                           <div className={s.form}>
                              <Input {...input} placeholder="Пароль" />
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