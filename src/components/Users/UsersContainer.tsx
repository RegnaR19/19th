import React, { useEffect } from "react";
import Users from "./Users";
import { getUsers } from '@/redux/usersReducer';
import { connect } from 'react-redux';
import { RootState } from '@/redux/redux-store';

type Props = {
   pageSize: number
   currentPage: number
   getUsers: (pageNumber: number, pageSize: number) => void
}

const UsersContainer: React.FC<Props> = (props) => {

   useEffect(() => {
      props.getUsers(props.currentPage, props.pageSize)
   }, [])


   const onPageChanged = (pageNumber: number, setUsers: number) => {
      props.getUsers(pageNumber, setUsers)
   }

   return <>
      <Users onPageChanged={onPageChanged} />
   </>
}

let mapStateToProps = (state: RootState) => {
   return {
      currentPage: state.usersPage.currentPage,
      pageSize: state.usersPage.pageSize
   }
}

export default connect(mapStateToProps, { getUsers })(UsersContainer)