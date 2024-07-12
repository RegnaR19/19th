// экспериментальная страница
import { achievementSound, successForm, useAppDispatch } from '@/hoc/hooks';
import { hidestAchievementAction } from '@/redux/achievementReducer';
import { notifications } from '@mantine/notifications';
import { IconBrandXbox, IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react'

const TestPage = () => {

   const [count, setCount] = useState(0);
   const [success, setSuccess] = useState(false)
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (count == 1) {
         if (!success) {
            dispatch(hidestAchievementAction())
            successForm(notifications.show({ message: 'Привет' }))
            achievementSound()
         }
         setSuccess(true)
      }
   }), [count];

   return (
      <>
         <div className="col2-app">
            <div className='big-title'>Тестовая страница</div>
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
               Кликни на меня
            </button>
         </div>
      </>
   )
}

export default TestPage