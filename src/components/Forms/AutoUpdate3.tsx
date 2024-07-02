import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "./Indent";
import chica from '../../assets/chika-fujiwara.gif'
import tobe from '../../assets/to-be-continued.jpg'

const AutoUpdate3 = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Modal size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Подробности обновления программы до версии 1.0.3"
            >
                <Image src={chica} mx="auto" radius="md" />
                <List>
                    <h4>Общие изменения:</h4>
                    <List.Item>Добавлена иконка к кнопке "Изменить размер"<br />
                        (теперь программа открывается сразу в большом размере,<br /> так что эта кнопка только для разработчика)</List.Item>
                    <List.Item>По умолчанию главной установлена страница "Новости"</List.Item>
                </List>
                <List>
                    <h4>Страница "Пользователи":</h4>
                    <List.Item>Были добавлены аватары с сервера к пользователям, которые их добавили</List.Item>
                    <List.Item>Работает переход по страницам</List.Item>
                    <List.Item>Страница профиля была немного обновлена</List.Item>
                    <List.Item>Открывается профиль каждого из пользователей</List.Item>
                </List>
                <List>
                    <h4>Страница "Профиль":</h4>
                    <List.Item>Страница профиля была обновлена</List.Item>
                </List>
                <p><Image src={tobe} maw={240} radius="md" /></p>
            </Modal>
            <Indent10 />
            <Group position="center">
                <Button onClick={() => setOpened(true)}
                    variant="gradient" gradient={{ from: 'teal', to: 'magenta', deg: 60 }}>
                    ✅ 1.0.3</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate3;