import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "../Forms/Indent";
import gif from '../../assets/sasuke.gif'

const AutoUpdate7 = () => {
    const [opened, setOpened] = useState(false);

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
            <Group justify="center">
                <Button onClick={() => setOpened(true)}
                    variant="gradient" gradient={{ from: '#1c7ed6', to: 'lime', deg: 45 }}>
                    ✅ 1.0.7</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate7;