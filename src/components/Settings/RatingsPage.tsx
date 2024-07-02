import { Rating } from '@mantine/core';
import Indent10 from '../Forms/Indent';

const RatingsPage = () => {
   return (
      <>
         Пожалуйста оцените проект!<br />
         (от 1 до 5 звезд)
         <Indent10 />
         Оценка:
         <Rating defaultValue={0} />
      </>
   );
}

export default RatingsPage;