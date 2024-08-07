import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "../Forms/Indent";
import gif from '../../assets/boruto-karma.gif'
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";

const AutoUpdate5 = () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Подробности обновления программы до версии 1.0.5"
            >
                <Image src={gif} mx="auto" radius="md" />
                <List>
                    <h4>Общие изменения:</h4>
                    <List.Item>Наконец то добавлена пагинация для страниц, месяц до этого не мог добраться (вуф), <br />это надо было сильно подумать, чтобы решить</List.Item>
                    <List.Item>Анимации на странице профиля (начального уровня)</List.Item>
                    <List.Item>Изменен дизайн, цвета</List.Item>
                </List>
                <List>
                    <h4>Разное</h4>
                    <List.Item>nothing</List.Item>
                </List>
                <Indent10 />
            </Modal>
            <Indent10 />
            <Group justify="center">
                <Button onClick={() => setOpened(true)}
                    variant="gradient" gradient={{ from: '#3f51b5', to: '#2236a4', deg: 45 }}>
                    ✅ 1.0.5</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate5;