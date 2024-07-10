import { achievementSound, useAppDispatch } from '@/hoc/hooks'
import { newPhotoAchievementAction } from '@/redux/achievementReducer'
import { savePhoto } from '@/redux/profileReducer'
import { Button, FileButton, Text, rem } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconBrandXbox, IconUpload } from '@tabler/icons-react'
import { FC, useState } from 'react'


const UploadAvatar = () => {

   const [success, setSuccess] = useState(false)
   const dispatch = useAppDispatch()
   const [file, setFile] = useState<File | null>(null)

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
         <FileButton onChange={onMainPhotoSelected} accept="image/png,image/jpeg">
            {(props) => <Button {...props} leftSection={icon}>Загрузить аватар</Button>}
         </FileButton>
         {file && (
            <Text size="sm" ta="center" mt="sm">
               {onMainPhotoSelected.name}
            </Text>
         )}
      </>
   );
}

export default UploadAvatar