// обновления
import Indent10 from "../Forms/Indent";
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit } from '@tabler/icons-react';

const ChangelogPage = () => {
   return (
      <>
         <div className="col2-app">
            <div className='big-title'>Новостная лента</div>
            <Timeline active={2} bulletSize={30} lineWidth={7}>

               <Timeline.Item bullet={<IconGitBranch size={12} />} title="Текущая версия">
                  <Text c="dimmed" size="sm">Выпуск версии 1.0.8</Text>
                  <Text size="xs" mt={4}>11 июля 2024 г.</Text>
               </Timeline.Item>
               <Timeline.Item bullet={<IconGitBranch size={12} />} title="Большое обновление">
                  <Text c="dimmed" size="sm">Выпуск версии 1.0.7</Text>
                  <Text size="xs" mt={4}>30 июня 2023 г.</Text>
               </Timeline.Item>
               <Timeline.Item bullet={<IconGitBranch size={12} />} title="Новая версия">
                  <Text c="dimmed" size="sm">Выпуск версии 1.0.6</Text>
                  <Text size="xs" mt={4}>31 мая 2023 г.</Text>
               </Timeline.Item>
               <Timeline.Item bullet={<IconGitBranch size={12} />} title="Новая версия">
                  <Text c="dimmed" size="sm">Выпуск версии 1.0.5</Text>
                  <Text size="xs" mt={4}>14 мая 2023 г.</Text>
               </Timeline.Item>
               <Timeline.Item bullet={<IconGitCommit size={12} />} title="Большое обновление">
                  <Text c="dimmed" size="sm">Выпуск версии 1.0.4</Text>
                  <Text size="xs" mt={4}>17 апреля 2023 г.</Text>
               </Timeline.Item>
               <Timeline.Item bullet={<IconGitBranch size={12} />} title="Новая версия">
                  <Text c="dimmed" size="sm">Выпуск версии 1.0.3</Text>
                  <Text size="xs" mt={4}>26 марта 2023 г.</Text>
               </Timeline.Item>
               <Timeline.Item bullet={<IconGitBranch size={12} />} title="Новая версия">
                  <Text c="dimmed" size="sm">Выпуск версии 1.0.2</Text>
                  <Text size="xs" mt={4}>12 марта 2023 г.</Text>
               </Timeline.Item>

               <Timeline.Item bullet={<IconGitCommit size={12} />} title="Новая версия">
                  <Text c="dimmed" size="sm">Выпуск версии 1.0.1 со включенным автообновлением</Text>
                  <Text size="xs" mt={4}>6 марта 2023 г.</Text>
               </Timeline.Item>

               <Timeline.Item title="Новая версия" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
                  <Text c="dimmed" size="sm">Релиз 1.0.0</Text>
                  <Text size="xs" mt={4}>6 марта 2023 г.</Text>
               </Timeline.Item>
            </Timeline>
            <Indent10 />
         </div>
      </>
   );
}

export default ChangelogPage