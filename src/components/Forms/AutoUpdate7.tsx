import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "./Indent";
import gif from '../../assets/sasuke.gif'
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";
import { achievementSound, useAppDispatch } from '@/hoc/hooks';
import { changelogAchievementAction } from '@/redux/achievementReducer';

const AutoUpdate7 = () => {
    const [opened, setOpened] = useState(false);
    const [success, setSuccess] = useState(false)
    const dispatch = useAppDispatch()

    const successForm = () => {
        notifications.show({
            withCloseButton: true,
            autoClose: 10000,
            title: "Достижение разблокировано",
            message: '100G | Просмотрен ченджлог',
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

    const addStatus = () => {
        dispatch(changelogAchievementAction())
        if (!success) {
            successForm()
            achievementSound()
        }
        setSuccess(true)
    }

    return (
        <>
            <Modal size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Подробности обновления программы до версии 1.0.7"
            >
                <Image src={gif} mx="auto" radius="md" />
                <List>
                    <h4>Общие изменения:</h4>
                    <List.Item>Добавлены достижения как на Xbox</List.Item>
                    <List.Item>Добавлен звук достижений, на вход в программу, <br />ну и в принципе на любое событие сейчас можно добавить звук</List.Item>
                    <List.Item>Все переделано с Redux на Redux Toolkit, внешних изменений не видно, <br />но внутренние довольно большие</List.Item>
                    <List.Item>Обновлена форма статуса, переделана на Final Form</List.Item>
                    <List.Item>Все данные берутся напрямую из базы состояний Redux</List.Item>
                </List>
                <Indent10 />
            </Modal>
            <Indent10 />
            <Group position="center">
                <Button onClick={() => setOpened(true)} onClickCapture={addStatus}
                    variant="gradient" gradient={{ from: '#1c7ed6', to: 'lime', deg: 45 }}>
                    ✅ Версия 1.0.7</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate7;