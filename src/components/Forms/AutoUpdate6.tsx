import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "./Indent";
import gif from '../../assets/anya.gif'
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";

const AutoUpdate6 = () => {
    const [opened, setOpened] = useState(false);

    const successForm = () => {
        notifications.show({
            withCloseButton: true,
            autoClose: 5000,
            title: "10G за просмотр ченджлога!",
            message: 'Спасибо за просмотр.',
            color: 'lime',
            icon: <IconBrandXbox />,
            className: 'my-notification-class',
            loading: false,
            styles: (theme) => ({
                root: {
                    backgroundColor: theme.colors.gray[4],
                    '&::before': { backgroundColor: theme.white },
                },
                title: { color: theme.black },
                description: { color: theme.black },
            }),
        })
    }

    return (
        <>
            <Modal size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Подробности обновления программы до версии 1.0.6"
            >
                <Image src={gif} mx="auto" radius="md" />
                <List>
                    <h4>Общие изменения:</h4>
                    <List.Item>Добавлено изменение аватара</List.Item>
                    <List.Item>Записи со стены вынесены на страницу новостей</List.Item>
                </List>
                <h3>Цикл из 100 выпусков 1 курса Путь самурая завершен.</h3>
                <Indent10 />
            </Modal>
            <Indent10 />
            <Group position="center">
                <Button onClick={() => setOpened(true)} onClickCapture={successForm}
                    variant="gradient" gradient={{ from: '#561', to: '#162', deg: 45 }}>
                    ✅ 1.0.6</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate6;