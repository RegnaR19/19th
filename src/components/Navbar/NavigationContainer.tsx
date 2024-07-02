import { connect } from 'react-redux';
import { logout } from '@/redux/authReducer';
import { compose } from 'redux';
import Navigation from './Navigation';
import { RootState } from '@/redux/redux-store';

const NavigationContainer = (props: any) => {

   return (
      <Navigation {...props} />
   )
}

let mapStateToProps = (state: RootState) => {
   return {
      isAuth: state.auth.isAuth,
      logout: state.auth.logout
   }
}

export default compose(connect(mapStateToProps, { logout }))(NavigationContainer)