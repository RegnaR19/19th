import { connect } from 'react-redux';
import Login from './Login';
import { compose } from 'redux';
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";
import { RootState } from '@/redux/redux-store';

export const successLogin = () => {
   notifications.show({
      id: 'login',
      withCloseButton: false,
      autoClose: 5000,
      title: "Достижение разблокировано",
      message: '100G | Вы вошли в аккаунт',
      color: 'green',
      icon: <IconBrandXbox />,
      className: 'my-notification-class',
      loading: false,
      styles: (theme) => ({
         root: {
            backgroundColor: theme.colors.gray[1],
            '&::before': { backgroundColor: theme.black },
         },
         title: { color: theme.black },
         description: { color: theme.black },
      }),
   })
}

const LoginContainer = (props: any) => {

   return (
      <Login isAuth={props.isAuth} />
   )
}



let mapStateToProps = (state: RootState) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default compose(connect(mapStateToProps)(LoginContainer))