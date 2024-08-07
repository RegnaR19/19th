// страница header
import { Grid } from '@mantine/core';
import s from './Header.module.css';
import ColorChange from '../Common/ChangeColor';
import { useAppSelector } from '@/hoc/hooks';

const Header = () => {

   const isAuth = useAppSelector(state => state.auth.isAuth)
   const login = useAppSelector(state => state.auth.login)

   const Auth = () => {
      if (isAuth) {
         return <div className={s.login}>Привет, {login}</div>
      }
      else {
         <Grid.Col className={s.login}>
            Вход не выполнен

            <pre>{JSON.stringify(isAuth, null, 2)}</pre>
         </Grid.Col>
      }
   }

   return (
      <>
         <Grid justify="space-between" align="center" className={s.header}>

            <Grid.Col span="content"><div className="big-title-program">19th</div></Grid.Col>
            <Grid.Col span={4}>{Auth()}</Grid.Col>
            <Grid.Col span="content"><ColorChange /></Grid.Col>
         </Grid>
      </>
   );
}

export default Header