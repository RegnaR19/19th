import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "./Indent";
import s from '../../App.module.css'
import { IconChartDonut3 } from "@tabler/icons-react";
import rick from '../../assets/rick.jpg'

const AutoUpdate = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Modal size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Подробности обновления программы до 1.0.2"
            >
                <IconChartDonut3 size={80} className={s.logo} />
                <IconChartDonut3 size={80} className={s.logo} />
                <h3>Неделю работал над курсом, дошел до 60 урока.</h3>
                <a href="https://www.youtube.com/watch?v=e6SpHkb0E3I" target="_blank">
                    https://www.youtube.com/watch?v=e6SpHkb0E3I</a><br />
                <h4>Что нового:</h4>
                <List>
                    <List.Item>Были добавлены тысячи пользователей на страницу Пользователи</List.Item>
                    <List.Item>Работает переход по страницам</List.Item>
                    <List.Item>Добавлена иконка к кнопке "Изменить размер"</List.Item>
                    <List.Item>Страница профиля была немного обновлена</List.Item>
                    <List.Item>В следующем обновлении будут открываться профили каждого из пользователей</List.Item>
                </List>
                <br />
                <img src={rick} height={300} />
            </Modal>
            <Indent10 />
            <Group position="center">
                <Button onClick={() => setOpened(true)}
                    variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                    ✅ 1.0.2</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate;