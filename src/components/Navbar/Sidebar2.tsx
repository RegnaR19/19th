// страница header
import { theEND, useAppSelector } from '@/hoc/hooks';
import { Grid, Image, Modal } from '@mantine/core'
import gif from '../../assets/bund.jpg'
import { useEffect, useState } from 'react';

const Sidebar2 = () => {

   const [opened, setOpened] = useState(false);

   const attach = useAppSelector(state => state.achievement.attach)
   const status = useAppSelector(state => state.achievement.status)
   const post = useAppSelector(state => state.achievement.post)
   const login = useAppSelector(state => state.achievement.login)
   const logout = useAppSelector(state => state.achievement.logout)
   const changelog = useAppSelector(state => state.achievement.changelog)
   const message = useAppSelector(state => state.achievement.message)
   const hidest = useAppSelector(state => state.achievement.hidest)
   const newPhoto = useAppSelector(state => state.achievement.newPhoto)

   const total = attach + status + post + login + logout + changelog + message + hidest + newPhoto
   useEffect(() => {
      if (total === 1000) {
         theEND()
         setOpened(true)
      }
   }, [total])

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <center><div className='big-text'>Система достижений</div>
                  <div className='achievement'>
                     <p>{total} G</p>
                  </div>
               </center>
            </Grid.Col>
         </Grid >
         <Modal size="auto"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Congratulations!"
         >
            <Image src={gif} mx="auto" radius="md" />
            <h2>Вы достигли 1000 G и получаете приз: автомобиль!<br />
               И песню Yoasobi - Idol</h2>
         </Modal>
      </>
   );
}

export default Sidebar2