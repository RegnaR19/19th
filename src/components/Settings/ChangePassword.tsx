import { Button, PasswordInput } from '@mantine/core';
import Indent10 from '../Forms/Indent';

const ChangePassword = () => {
   return (
      <>
         <PasswordInput
            placeholder="Изменить пароль"
            label="Пароль"
            description="Пароль должен включать минимум одну букву, число и специальный символ"
            withAsterisk
         />
         <Indent10 />
         <Button variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}>
            Сохранить
         </Button>
      </>
   );
}

export default ChangePassword