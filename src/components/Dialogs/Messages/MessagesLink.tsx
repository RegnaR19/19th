// ссылка на сообщения
import { IconSend } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

type Props = {
   id: number,
   message: string
}

const Messages: React.FC<Props> = ({ id, message }) => {

   return (
      <>
         <div><IconSend size={20} /> {id}. {message}</div>
      </>
   )
}

export default Messages