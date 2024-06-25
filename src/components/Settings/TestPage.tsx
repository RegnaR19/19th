// экспериментальная страница
import { achievementSound, useAppDispatch } from '@/hoc/hooks';
import { hidestAchievementAction } from '@/redux/achievementReducer';
import { notifications } from '@mantine/notifications';
import { IconBrandXbox } from '@tabler/icons-react';
import { useEffect, useState } from 'react'

const TestPage = () => {

   const [count, setCount] = useState(0);
   const [success, setSuccess] = useState(false)
   const dispatch = useAppDispatch()

   const successForm = () => {
      notifications.show({
         withCloseButton: true,
         autoClose: 10000,
         title: "Скрытое достижение разблокировано",
         message: '200G | Вы кликнули 25 раз на кнопку "Кликни на меня"',
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

   useEffect(() => {
      document.title = `Вы кликнули ${count} раз`;
      if (count == 25) {
         if (!success) {
            dispatch(hidestAchievementAction())
            successForm()
            achievementSound()
         }
         setSuccess(true)
      }
   }), [count];





   return (
      <>
         <div className="col2-app">
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
               Кликни на меня
            </button>
         </div>
      </>
   )
}

export default TestPage