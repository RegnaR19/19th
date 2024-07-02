// страница header
import { Grid, Group } from '@mantine/core';
import s from './Header.module.css';

const HeaderTwo = ({ login, isAuth }) => {

   const Auth = () => {
      if (isAuth) {
         return <div className={s.login}>Привет, {login}</div>
      }
      else {
         <Grid.Col className={s.login}>
            Вход не выполнен
         </Grid.Col>
      }
   }


   return (
      <>
         <Grid justify="center" align="center" className={s.header}>
            <Grid.Col span="content">
               <div className="big-title-program">Bund</div>
            </Grid.Col>
         </Grid>
         <Grid className={s.header}>
            <Grid.Col span="content">
               <Group position="right">
                  {Auth()}
               </Group>
            </Grid.Col>
         </Grid>
      </>
   );
}



export default HeaderTwo