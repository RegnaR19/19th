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
    let a = new Audio(achievement)
    a.volume = 0.1;
    a.play()
}

export const startUp = () => new Howl({
    src: [startup],
    format: ['mp3'],
    autoplay: true,
    volume: 0.5
})

export const theEND = () => new Howl({
    src: [theend],
    format: ['mp3'],
    autoplay: true,
    volume: 0.1
})

export let successForm = (message: string) => {
    notifications.show({
        withCloseButton: true,
        autoClose: 10000,
        title: 'Достижение разблокировано',
        message: message,
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

export const successAchievement = (message: string) => {
    successForm(message)
    achievementSound()
}