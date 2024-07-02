import { Button, Textarea } from '@mantine/core';
import { Field, Form } from 'react-final-form';
import Indent10 from '../../Forms/Indent';

type Props = {
   addNewMessage?: any
}

const DialogsForm: React.FC<Props> = ({ addNewMessage }) => {

   type Employee = {
      message?: string
   }

   return (
      <>
         <Form onSubmit={addNewMessage}
            validate={(values: any) => {
               const errors: Employee = {}
               if (!values.message) {
                  errors.message = 'Необходимо заполнить поле'
               }
               return errors
            }}
            render={({ handleSubmit, submitting }) => (
               <form onSubmit={handleSubmit}>
                  <Field placeholder="Сообщение" name='message' component="textarea">
                     {({ input, meta }) => (
                        <div>
                           <Textarea {...input} placeholder="Текст сообщения" />
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Indent10 />
                  <Button type="submit" disabled={submitting} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                     Отправить
                  </Button>
               </form>
            )}
         />
      </>
   )
}

export default DialogsForm