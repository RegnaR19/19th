import { achievementSound, successAchievement, useAppDispatch } from '@/hoc/hooks'
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

   const onMainPhotoSelected = (value: any) => {
      let partName = value

      if (partName) {
         dispatch(savePhoto(partName))
         dispatch(newPhotoAchievementAction())
         if (!success) {
            successAchievement('100G | Вы успешно изменили аватар')
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