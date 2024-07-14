import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "../Forms/Indent";
import gif from '../../assets/tower-of-god.gif'
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";
import { achievementSound, useAppDispatch } from '@/hoc/hooks';
import { changelogAchievementAction } from '@/redux/achievementReducer';

const AutoUpdate8 = () => {
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
                title="Подробности обновления до версии 1.0.8, дата: 11.07.2024"
            >
                <Image src={gif} mx="auto" radius="md" />
                Tower of God (Башня бога)
                <List>
                    <h4>Общие изменения:</h4>
                    <List.Item>Переходим на 2 цветный режим (черная и белая тема, черная основная)</List.Item>
                    <List.Item>Добавлена кнопка переключения цветового режима</List.Item>
                    <List.Item>Все пакеты (Mantine, React, Electron, Vite и т.д.) обновлены до последней версии</List.Item>
                    <List.Item>Избавились от контейнеров, переходим на прямой путь подключения Redux базы</List.Item>
                    <List.Item>Все компоненты программы успешно удалось перенести с 6 версии Mantine на 7</List.Item>
                    <List.Item>Удалось подключить сервер Express.js, в будущем буду переходить на него</List.Item>
                </List>
                <Indent10 />
            </Modal>
            <Indent10 />
            <Group justify="center">
                <Button onClick={() => setOpened(true)} onClickCapture={addStatus}
                    variant="gradient"
                    gradient={{ from: 'grape', to: 'orange', deg: 90 }}>
                    ✅ Версия 1.0.8</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate8;