import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from '@/redux/redux-store';
import { Notification } from '@mantine/core';
import Header from './Header';
import { useAppSelector } from '@/hoc/hooks';

const auth = useAppSelector(state => state.auth)
const profile = useAppSelector(state => state.profilePage.profile)

const HeaderContainer = () => {

   return (
      <>
         <Header profile={profile} auth={auth} />
      </>
   )
}

let mapStateToProps = (state: RootState) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}


export default compose(connect(mapStateToProps))(HeaderContainer)