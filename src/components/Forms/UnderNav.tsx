import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

const UnderNav = () => {
    return (
        <>
            <Alert icon={<IconAlertCircle size={16} />} title="Нотификация" color="red">
                Следующую сборку скину тогда, когда приделаю автообновление как в Дискорде,
                шобы не скачивать каждую сборку отдельно.
            </Alert>
        </>
    );
}

export default UnderNav;