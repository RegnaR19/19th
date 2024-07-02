import { connect } from 'react-redux';
import { compose } from 'redux';
import HeaderTwo from './HeaderTwo';
import { RootState } from '@/redux/redux-store';


const HeaderTwoContainer = (props: any) => {

   return (
      <>
         <HeaderTwo {...props} />
         {/* <Notification color="teal" withCloseButton={false} className={s.leftSide}>
            <pre>{JSON.stringify(props.isAuth, null, 2)}</pre>
         </Notification> */}
      </>
   )
}

let mapStateToProps = (state: RootState) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}


export default compose(connect(mapStateToProps))(HeaderTwoContainer)