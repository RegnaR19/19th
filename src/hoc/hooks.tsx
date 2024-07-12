import { AppDispatch, RootState } from '@/redux/redux-store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import achievement from '../sounds/Xbox 360 Achievment.mp3'
import startup from '../sounds/startup.mp3'
import theend from '../sounds/YOASOBI — Idol.mp3'
import { Howl } from 'howler'
import { notifications } from '@mantine/notifications'
import { IconBrandXbox } from '@tabler/icons-react'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const achievementSound = () => {
    new Audio(achievement).play()
}

export const startUp = () => new Howl({
    src: [startup],
    format: ['mp3'],
    autoplay: true
})

export const theEND = () => new Howl({
    src: [theend],
    format: ['mp3'],
    autoplay: true
})

export let successForm = (title: any) => {
    notifications.show({
        withCloseButton: true,
        autoClose: 10000,
        title: [title],
        message: 'Hi',
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