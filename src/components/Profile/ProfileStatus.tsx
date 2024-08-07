import { Button, Grid, Input } from "@mantine/core"
import { useState } from "react"
import { useSpring, animated } from '@react-spring/web'
import { profileSlice, updateStatus } from '@/redux/profileReducer'
import { achievementSound, successAchievement, useAppDispatch, useAppSelector } from '@/hoc/hooks'
import { Field, Form } from 'react-final-form'
import Indent10 from '../Forms/Indent'
import { statusAchievementAction } from '@/redux/achievementReducer'

const ProfileStatus = () => {

   const [editMode, setEditMode] = useState(false)
   const [success, setSuccess] = useState(false)
   const { setStatus } = profileSlice.actions
   const dispatch = useAppDispatch()
   const status = useAppSelector(state => state.profilePage.status)

   const [springs] = useSpring(() => ({
      from: {
         opacity: 0.6,
         scale: 1,
      },
      to: {
         opacity: 1,
         scale: 1,
      },
      config: { duration: 800, mass: 100, tension: 100, friction: 100 },
      loop: {
         reverse: true
      }
   }))

   const activateEditMode = () => {
      setEditMode(true)
   }

   const addStatus = (values: any) => {
      dispatch(setStatus(values.status))
      dispatch(updateStatus(values.status))
      dispatch(statusAchievementAction())
      setEditMode(false)
      if (!success) {
         successAchievement(`100G | Статус изменен: ${values.status}`)
      }
      setSuccess(true)
   }

   type Employee = {
      status?: any
   }

   return (
      <>
         {!editMode && <div onClick={activateEditMode}>
            <div className="big-text2">{status || "статус не указан"}</div >
            <animated.div style={springs} className="status"><i>[изменить статус]</i></animated.div></div>
         }

         {
            editMode &&
            <div>
               <Form onSubmit={addStatus}
                  initialValues={{ status: status }}
                  validate={(values: any) => {
                     const errors: Employee = {}
                     if (!values.status) {
                        errors.status = 'необходимо заполнить статус'
                     }
                     return errors
                  }}
                  render={({ handleSubmit, submitting }) => (
                     <form onSubmit={handleSubmit}>
                        <Field name="status" component="input">
                           {({ input, meta }) => (
                              <div>
                                 <Input {...input} type="text" placeholder="Новый статус" autoFocus={true} />
                                 {meta.error && meta.touched && <span>{meta.error}</span>}
                              </div>
                           )}
                        </Field>
                        <Indent10 />
                        <Grid justify="right" align="center">
                           <Grid.Col span="content">
                              <Button type="submit" variant="outline" disabled={submitting}>
                                 Изменить статус
                              </Button>
                           </Grid.Col>
                        </Grid>
                     </form>
                  )
                  }
               />
            </div>
         }
      </>
   )
}

export default ProfileStatus