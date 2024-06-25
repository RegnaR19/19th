import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

let mapStateToProps = (state: any) => ({
   isAuth: state.auth.isAuth
})

type Props = {
   isAuth: any
}

export const authRedirect = (Component: any) => {

   class RedirectComponent extends React.Component<Props> {
      render() {
         if (!this.props.isAuth) return <Navigate to="/login" />
         return <Component {...this.props} />
      }
   }
   let AuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

   return AuthRedirectComponent
}