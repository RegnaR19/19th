// страница header
import { theEND, useAppSelector } from '@/hoc/hooks';
import { Grid, Image, Modal } from '@mantine/core'
import gif from '../../assets/bund.jpg'
import { useEffect, useState } from 'react';

const AchievementSidebar = () => {

   const [opened, setOpened] = useState(false);
   const [text, setText] = useState('');

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
      if (total === 200) {
         theEND()
         setOpened(true)
         setText('Завершено!')
      }
   }, [total])

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <center><div className='big-text'>Система достижений</div>
                  <div className='achievement'>
                     {total} G<br></br>
                  </div>
                  {text}
               </center>
            </Grid.Col>
         </Grid >
         <Modal size="auto"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Congratulations!"
         >
            <h2>Вы достигли 1000 G!<br />
               И песню Yoasobi - Idol</h2>

            <Image src={gif} mx="auto" radius="md" />
         </Modal>
      </>
   );
}

export default AchievementSidebar