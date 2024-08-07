// страница header
import { Accordion, Grid } from '@mantine/core'
import Indent10 from '../Forms/Indent';
import AutoUpdate4 from '../Changelog/AutoUpdate4';
import AutoUpdate3 from '../Changelog/AutoUpdate3';
import AutoUpdate2 from '../Changelog/AutoUpdate2';
import AutoUpdate5 from '../Changelog/AutoUpdate5';
import AutoUpdate6 from '../Changelog/AutoUpdate6';
import AutoUpdate7 from '../Changelog/AutoUpdate7';
import AutoUpdate8 from '../Changelog/AutoUpdate8';

const ChangelogSidebar = () => {

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <center><div className='big-title'>История</div>
                  <AutoUpdate8 />
                  <Accordion defaultValue="customization">
                     <Accordion.Item value="flexibility">
                        <Accordion.Control>Прошлые версии</Accordion.Control>
                        <Accordion.Panel>
                           <AutoUpdate7 /><Indent10 />
                           <AutoUpdate6 /><Indent10 />
                           <AutoUpdate5 /><Indent10 />
                           <AutoUpdate4 /><Indent10 />
                           <AutoUpdate3 /><Indent10 />
                           <AutoUpdate2 /><Indent10 />
                        </Accordion.Panel>
                     </Accordion.Item>
                  </Accordion>
               </center>
            </Grid.Col>
         </Grid >
         <Indent10 />
      </>
   );
}

export default ChangelogSidebar