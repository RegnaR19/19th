// страница header
import { Accordion, Grid } from '@mantine/core'
import Indent10 from '../Forms/Indent';
import AutoUpdate4 from '../Forms/AutoUpdate4';
import AutoUpdate3 from '../Forms/AutoUpdate3';
import AutoUpdate2 from '../Forms/AutoUpdate2';
import AutoUpdate5 from '../Forms/AutoUpdate5';
import AutoUpdate6 from '../Forms/AutoUpdate6';
import AutoUpdate7 from '../Forms/AutoUpdate7';

const Sidebar = () => {

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <center><div className='big-title'>История</div>
                  <AutoUpdate7 />
                  <Accordion defaultValue="customization">
                     <Accordion.Item value="flexibility">
                        <Accordion.Control>Прошлые версии</Accordion.Control>
                        <Accordion.Panel>
                           <AutoUpdate2 /><Indent10 />
                           <AutoUpdate3 /><Indent10 />
                           <AutoUpdate4 /><Indent10 />
                           <AutoUpdate5 /><Indent10 />
                           <AutoUpdate6 />
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

export default Sidebar