import { achievementSound, successAchievement, useAppDispatch } from '@/hoc/hooks';
import { achievementSlice } from '@/redux/achievementReducer';
import { FileInput, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconBrandXbox, IconUpload } from '@tabler/icons-react';
import { useState } from 'react';

const UploadPhotoPost = () => {

  const dispatch = useAppDispatch()
  const { attachAchievement } = achievementSlice.actions
  const [success, setSuccess] = useState(false)
  const addNewForAttach = () => {
    if (!success) {
      dispatch(attachAchievement(100))
      successAchievement('100G | Вы попытались прикрепить файл')
    }
    setSuccess(true)
  }

  const icon = <IconUpload style={{ width: rem(18), height: rem(18) }} stroke={1.5} />

  return (
    <>
      <FileInput placeholder="Прикрепить изображение" leftSection={icon} onClick={() => { addNewForAttach() }} />
    </>
  )
}

export default UploadPhotoPost