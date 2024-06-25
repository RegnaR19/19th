import { useState } from 'react';
import { Drawer, Button, Group, Image } from '@mantine/core';
import Indent10 from './Indent';
import rick from '../../assets/rick.jpg'

const DrawerOpen2 = () => {
   const [opened, setOpened] = useState(false);
   return (
      <>
         <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Форма для чего-нибудь"
            position="right"
            padding="xl"
            size="xs"
         >
            <Image src={rick} />
         </Drawer>

         <Group position="center">
            <Button onClick={() => setOpened(true)}
               variant="gradient" gradient={{ from: 'gray', to: 'black' }}>
               #2</Button>
         </Group>
         <Indent10 />
      </>
   );
}

export default DrawerOpen2;