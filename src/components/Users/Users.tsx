import UsersPage from "./UsersPage";
import React, { useEffect } from "react";
import Paginator from "./Paginator";
import Indent10 from "../Forms/Indent";
import { useAppDispatch, useAppSelector } from '@/hoc/hooks';
import { getUsers } from "@/redux/usersReducer";


const Users = () => {

   const totalUsersCount = useAppSelector(state => state.usersPage.totalUsersCount)
   const usersList = useAppSelector(state => state.usersPage.usersList)
   const pageSize = useAppSelector(state => state.usersPage.pageSize)
   const currentPage = useAppSelector(state => state.usersPage.currentPage)
   const dispatch = useAppDispatch()

   const onPageChanged = (pageNumber: number, setUsers: number) => {
      dispatch(getUsers(pageNumber))
   }

   useEffect(() => {
      dispatch(getUsers(currentPage))
   }, [])

   let usersElements = usersList.map((e: any) =>
      <UsersPage id2={e.id} key={e.id} name={e.name}
         status={e.status} img={e.photos.small} />)


   return (
      <>
         <div className="col2-app">
            <div className='big-title'>Пользователи</div>
            Общее количество: {totalUsersCount}<br /><br />

            <Paginator pageSize={pageSize}
               totalUsersCount={totalUsersCount} currentPage={currentPage}
               onPageChanged={onPageChanged} />
            <Indent10 />
            {usersElements}
            <Indent10 />
            <Paginator pageSize={pageSize}
               totalUsersCount={totalUsersCount} currentPage={currentPage}
               onPageChanged={onPageChanged} />
         </div>
      </>
   )
}

export default Users