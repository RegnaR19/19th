import { achievementSound, useAppDispatch } from '@/hoc/hooks';
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
      achievementSound()
      ohh()
    }
    setSuccess(true)
  }

  const ohh = () => {
    notifications.show({
      withCloseButton: false,
      autoClose: 10000,
      title: "Достижение разблокировано",
      message: '100G | Вы попытались прикрепить файл',
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

  return (
    <>
      <FileInput placeholder="Прикрепить изображение" icon={<IconUpload size={rem(14)} />} onClick={() => { addNewForAttach() }} />
    </>
  )
}

export default UploadPhotoPost