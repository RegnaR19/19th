import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "../Forms/Indent";
import chica from '../../assets/evangelion.gif'
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";

const AutoUpdate3 = () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Подробности обновления программы до версии 1.0.4"
            >
                <Image src={chica} mx="auto" radius="md" />
                <List>
                    <h4>Общие изменения:</h4>
                    <List.Item>Полноценная авторизация</List.Item>
                    <List.Item>Добавлена валидация форм</List.Item>
                    <List.Item>Изменение статуса профиля</List.Item>
                    <List.Item>Активированы всплывающие уведомления к большинству событий</List.Item>
                    <List.Item>Включено добавление заголовка к новому посту</List.Item>
                    <List.Item>В трее возле часов теперь всегда видна иконка программы</List.Item>
                </List>
                <List>
                    <h4>Разное</h4>
                    <List.Item>Изменены музыка и видео на своих страницах</List.Item>
                </List>
                <Indent10 />
            </Modal>
            <Indent10 />
            <Group justify="center">
                <Button onClick={() => setOpened(true)}
                    variant="gradient" gradient={{ from: 'red', to: 'yellow', deg: 60 }}>
                    ✅ 1.0.4</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate3;