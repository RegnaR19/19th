import { achievementSound, useAppDispatch } from '@/hoc/hooks'
import { newPhotoAchievementAction } from '@/redux/achievementReducer'
import { savePhoto } from '@/redux/profileReducer'
import { FileInput, rem } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconBrandXbox, IconUpload } from '@tabler/icons-react'
import { FC, useState } from 'react'


const UploadAvatar = () => {

   const [success, setSuccess] = useState(false)
   const dispatch = useAppDispatch()
   const [value, setValue] = useState<File | null>(null);

   const successForm = () => {
      notifications.show({
         withCloseButton: true,
         autoClose: 10000,
         title: "Достижение разблокировано",
         message: '100G | Вы успешно изменили аватар',
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

   const onMainPhotoSelected = (value: any) => {
      let partName = value

      if (partName) {
         dispatch(savePhoto(partName))
         dispatch(newPhotoAchievementAction())
         if (!success) {
            successForm()
            achievementSound()
         }
         setSuccess(true)
      }
   }

   const icon = <IconUpload style={{ width: rem(18), height: rem(18) }} stroke={1.5} />

   return (
      <>
         <FileInput value={value} placeholder="Загрузить новый аватар" leftSection={icon} onChange={onMainPhotoSelected} />
      </>
   );
}

export default UploadAvatar