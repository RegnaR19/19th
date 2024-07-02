// ссылка на диалог
import { Button } from '@mantine/core';
import { NavLink } from 'react-router-dom';

type Props = {
   path?: string,
   name: string,
   id: number
}

const DialogItem: React.FC<Props> = ({ id, name }) => {

   let path = "dialogs" + id;

   return (
      <div>
         <Button.Group orientation="vertical">
            <Button variant="default">
               {id}. {name}
            </Button>
         </Button.Group>
      </div>
   )
}

export default DialogItem