import UsersPage from "./UsersPage";
import React from "react";
import Paginator from "./Paginator";
import Indent10 from "../Forms/Indent";
import { useAppSelector } from '@/hoc/hooks';

type Props = {
   onPageChanged: any
}

const Users: React.FC<Props> = ({ onPageChanged }) => {

   const totalUsersCount = useAppSelector(state => state.usersPage.totalUsersCount)
   const usersList = useAppSelector(state => state.usersPage.usersList)
   const pageSize = useAppSelector(state => state.usersPage.pageSize)
   const currentPage = useAppSelector(state => state.usersPage.currentPage)

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